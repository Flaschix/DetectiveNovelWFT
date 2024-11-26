import { CST } from "../CST.mjs";

const xS = 510;
const yS = 40;
const yD = 65;
const widnth = 650;
const height = 50;
const round = 10;

export class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: CST.SCENE.GAMESCENE });
        this.typingTimer = null; // Объявляем typingTimer как свойство класса
        this.currentCharacterIndex = 0; // Текущий индекс персонажа
        this.characters = [
            { avatar: "character1", name: 'Anna', dialog: 'Hello! What would you like to talk about with me?', questions: ['Why were you seen sad in the street at 9:15 p.m.?', 'How was your work day at the museum?', 'Do you have any problems that may affect your work?', 'Did you notice anything unusual at the museum that evening?', 'Where were you when the theft occurred?'], answers: ['Yes, I was a little upset. I\'ve been having some personal problems lately that have been bothering me a lot.', 'It was a hard day, lots of visitors, lots of work. I was very tired. I think I left my bag and glasses at work.', 'I have financial difficulties because of my mother\'s illness. But I try not to bring my problems to work.', 'The museum was pretty quiet, I didn\'t notice anything suspicious.', 'I had already left work and was outside when the theft occurred.'] },
            {
                avatar: "character2", name: 'Victor', dialog: 'What do you want?',
                questions: [
                    'Where were you on the night of the theft?',
                    'Why were you seen on the street at 9:10 PM? Where were you rushing to?',
                    'Did you see anything suspicious in the museum before you left?',
                    'What were your plans for the evening?',
                    'Why didn’t you report your torn pants to your boss?'
                ],
                answers: [
                    'I was outside, running to the atelier to get my trousers repaired. They had torn at work and I wanted to tidy up before a meeting.',
                    'I told you, I was trying to get my pants fixed! I had an important meeting with my soon-to-be ex-wife and I was running late.',
                    'I didn\'t see anything. Anything else?',
                    'Oh, just great plans. Meeting with my wife and my divorce lawyer.',
                    'What’s it to you? I was in a hurry. Happy now?'
                ]
            },
            {
                avatar: "character3", name: 'Sam', dialog: 'What happened?',
                questions: [
                    'Why were you seen at 9.25pm in a white coat with a guitar case?',
                    'What did you do at the museum in the evening?',
                    'Do you have any special plans for the future related to your work?',
                    'Do you have any ideas why someone might want to steal this painting?',
                    'How much do you think the missing painting is worth?'],
                answers: [
                    'I was returning to my workshop after a short break. I use the guitar case to store some of my instruments.',
                    'I stayed late at the museum to finalise a project. Sometimes work requires extra time.',
                    'I always strive to improve and dream of bigger projects. I hope my labours will be appreciated.',
                    'I guess people who are really desperate for money.',
                    'It\'s priceless. It\'s worth much more than just the canvas and paint.'
                ]
            },
            {
                avatar: "character4", name: 'Michael', dialog: 'Good evening. How can I help you?',
                questions: [
                    'Why did you meet Irene at the museum?',
                    'Why were you seen with a backpack at 9:45 p.m. on the street?',
                    'Did you leave your camera and laptop at the museum? Why?',
                    'What have you done in other museums where you\'ve been spotted acting suspiciously?',
                    'Does Irene help you?'
                ],
                answers: [
                    'We decided to spend an evening at the museum to enjoy the art and spend time together. We had been planning this date for a long time.',
                    'I always carry a backpack with me, it holds my stuff. There\'s nothing special about it.',
                    'I must have left it there by accident. We were in a hurry when we left.',
                    'Oh, those were misunderstandings. I was just sketching and researching exhibits for my projects. Something like investigations. I study cases of missing rare artifacts. You see, these kinds of cases are definitely investigated worse than serial murders. But someone needs to take care of it, right?',
                    'Well, at first I really got a lot of useful info from her, but now I\'m starting to really like her.'
                ]
            },
            {
                avatar: "character5", name: 'Irene', dialog: 'I\'m glad to help you with the investigation!',
                questions: [
                    'What were you doing at the museum that evening?',
                    'Why was your pendant found in the museum?',
                    'Where did you go after the museum at 9:45 p.m.?',
                    'Why did you want to meet Michael at the museum?',
                    'What did you talk about on the date?'
                ],
                answers: [
                    'Michael and I decided to meet at the museum to spend time away from prying eyes. We had been planning to do this for a long time.',
                    'I didn\'t even notice that I had lost my pendant. Perhaps it fell when I was taking off my coat.',
                    'We just decided to take a walk after the museum. We met on the street to discuss future plans.',
                    'We both love art, and the museum was a great place to meet. It was just a date.',
                    'We always talk about art. Hmm, now that I think about it, he doesn’t really ask me about anything else...'
                ]
            }
        ];
    }

    create() {

        this.createBackground();

        this.characterImage = this.add.image(230, 560, 'character').setScale(0.7);
        this.nextButton = this.add.image(1210, 540, 'nextButton').setScale(0.7).setInteractive();
        this.backButton = this.add.image(1210, 640, 'backButton').setScale(0.7).setInteractive().setVisible(false);

        this.createDialog();
        this.createQuastions();

        this.nextButton.on('pointerdown', () => {
            if (this.currentCharacterIndex < this.characters.length - 1) {
                this.currentCharacterIndex++;
                this.updateCharacter();
            }

            if (this.selectedQuestion) {
                this.selectedQuestion.box.lineStyle(3, 0x343E8A, 1);
                this.selectedQuestion.box.strokeRoundedRect(xS, yS + this.selectedQuestion.index * yD, widnth, height, round);
                this.selectedQuestion.text.setColor('#87878C');
            }
        });

        this.backButton.on('pointerdown', () => {
            if (this.currentCharacterIndex > 0) {
                this.currentCharacterIndex--;
                this.updateCharacter();
            }

            if (this.selectedQuestion) {
                this.selectedQuestion.box.lineStyle(3, 0x343E8A, 1);
                this.selectedQuestion.box.strokeRoundedRect(xS, yS + this.selectedQuestion.index * yD, widnth, height, round);
                this.selectedQuestion.text.setColor('#87878C');
            }
        });

        this.updateCharacter();

        // createUIBottom(this);
        // createUIRight(this);
        // createUITop(this);
        // createUI(this, null);
    }

    createBackground() {
        const paddingTop = 12; // Отступ сверху
        const paddingBottom = 12; // Отступ снизу
        const paddingLeft = 80; // Отступ слева
        const paddingRight = 25; // Отступ справа

        const gameWidth = this.sys.game.config.width;
        const gameHeight = this.sys.game.config.height;

        // Загрузка изображения
        const background = this.add.image(0, 0, 'gameBackground');

        // Вычисление масштаба
        const scaleX = (gameWidth - paddingLeft - paddingRight) / background.width;
        const scaleY = (gameHeight - paddingTop - paddingBottom) / background.height;
        const scale = Math.min(scaleX, scaleY);

        // Установка размера изображения
        background.setDisplaySize(background.width * scale, background.height * scale);

        // Вычисление позиции изображения с учетом отступов
        const posX = paddingLeft + (gameWidth - paddingLeft - paddingRight) / 2;
        const posY = paddingTop + (gameHeight - paddingTop - paddingBottom) / 2;

        // Установка позиции изображения
        background.setPosition(posX, posY);

        this.add.image(40, 50, 'logo').setScale(0.5);

        this.exitButton = this.add.image(40, 670, 'exit').setInteractive();

        this.exitButton.on('pointerdown', () => {
            this.showExitWindow();
        });
    }

    createDialog() {
        // Создание графического объекта
        const graphics = this.add.graphics();

        // Настройка стиля обводки и заливки
        graphics.lineStyle(4, 0x5568FE, 1); // Белая обводка толщиной 4 пикселя
        graphics.fillStyle(0x0F0920, 1); // Заливка темного цвета

        // Рисование прямоугольника с закругленными углами
        graphics.fillRoundedRect(380, 480, 780, 210, 20); // Параметры: x, y, width, height, радиус закругления
        graphics.strokeRoundedRect(380, 480, 780, 210, 20); // Параметры: x, y, width, height, радиус закругления

        this.dialogText = this.add.text(400, 530, '', { font: '18px Arial', fill: '#FFFFFF', wordWrap: { width: 750 } });
        this.characterName = this.add.text(400, 500, '', { font: '24px Arial', fill: '#5568FE' });
    }

    createQuastions() {

        this.questionBoxes = [];
        for (let i = 0; i < 5; i++) {
            // Создание графического объекта для каждого questionBox
            const questionGraphics = this.add.graphics();
            questionGraphics.lineStyle(3, 0x343E8A, 1); // Белая обводка толщиной 4 пикселя
            questionGraphics.fillStyle(0x0F0920, 1); // Заливка темного цвета
            questionGraphics.fillRoundedRect(xS, yS + i * yD, widnth, height, round); // Параметры: x, y, width, height, радиус закругления
            questionGraphics.strokeRoundedRect(xS, yS + i * yD, widnth, height, round); // Параметры: x, y, width, height, радиус закругления

            const questionText = this.add.text(xS + 15, yS + i * yD + 15, '', { font: '16px Arial', fill: '#87878C' });
            questionGraphics.setInteractive(new Phaser.Geom.Rectangle(xS, yS + i * yD, widnth, height), Phaser.Geom.Rectangle.Contains);
            questionGraphics.on('pointerdown', () => {
                const character = this.characters[this.currentCharacterIndex];
                if (this.selectedQuestion) {
                    this.selectedQuestion.box.lineStyle(3, 0x343E8A, 1);
                    this.selectedQuestion.box.strokeRoundedRect(xS, yS + this.selectedQuestion.index * yD, widnth, height, round);
                    this.selectedQuestion.text.setColor('#87878C');
                }
                questionGraphics.lineStyle(3, 0x5568FE, 1);
                questionGraphics.strokeRoundedRect(xS, yS + i * yD, widnth, height, round);
                questionText.setColor('#FFFFFF');
                this.selectedQuestion = { box: questionGraphics, text: questionText, index: i };

                // Остановка текущего таймера печати, если он существует
                if (this.typingTimer) {
                    clearInterval(this.typingTimer);
                }

                // Эффект печати текста
                this.typeText(this.dialogText, `${character.answers[i]}`);
            });
            this.questionBoxes.push({ box: questionGraphics, text: questionText });
        }
    }

    updateCharacter() {
        if (this.typingTimer) {
            clearInterval(this.typingTimer);
        }

        const character = this.characters[this.currentCharacterIndex];
        this.characterImage.setTexture(character.avatar);
        this.characterName.setText(character.name);
        this.typeText(this.dialogText, character.dialog);

        for (let i = 0; i < this.questionBoxes.length; i++) {
            this.questionBoxes[i].text.setText(character.questions[i]);
        }

        this.backButton.setVisible(this.currentCharacterIndex > 0);
        this.nextButton.setVisible(this.currentCharacterIndex < this.characters.length - 1);
    }

    typeText(textObject, content) {
        textObject.setText('');
        let index = 0;
        this.typingTimer = setInterval(() => {
            textObject.text += content[index];
            index++;
            if (index === content.length) {
                clearInterval(this.typingTimer);
            }
        }, 50); // Скорость печати (в миллисекундах)
    }

    showExitWindow() {
        const windowWidth = 460;
        const windowHeight = 250;
        const windowX = (this.sys.game.config.width - windowWidth) / 2;
        const windowY = (this.sys.game.config.height - windowHeight) / 2;

        // Создание полупрозрачного фона для блокировки взаимодействия
        const blocker = this.add.graphics();
        blocker.fillStyle(0x000000, 0.5);
        blocker.fillRect(0, 0, this.sys.game.config.width, this.sys.game.config.height);
        blocker.setInteractive(new Phaser.Geom.Rectangle(0, 0, this.sys.game.config.width, this.sys.game.config.height), Phaser.Geom.Rectangle.Contains);

        // Создание графического объекта для окна
        const graphics = this.add.graphics();
        graphics.lineStyle(2, 0xFFFFFF, 1); // Белая обводка
        graphics.fillStyle(0x221C3E, 1); // Цвет фона
        graphics.fillRoundedRect(windowX, windowY, windowWidth, windowHeight, 20); // Закругленные углы
        graphics.strokeRoundedRect(windowX, windowY, windowWidth, windowHeight, 20);

        // Создание кнопки "leave space" как изображение
        const leaveButton = this.add.image(windowX + 230, windowY + 80, 'leaveSpace').setInteractive();

        // Создание кнопки "close" как изображение
        const closeButton = this.add.image(windowX + 230, windowY + 170, 'close').setInteractive();

        // Обработчик нажатия на кнопку "leave space"
        leaveButton.on('pointerdown', () => {
            // Логика выхода из игры
            window.location.reload();
        });

        // Обработчик нажатия на кнопку "close"
        closeButton.on('pointerdown', () => {
            // Удаление окна и кнопок
            graphics.destroy();
            leaveButton.destroy();
            closeButton.destroy();
            blocker.destroy();
        });
    }

}
