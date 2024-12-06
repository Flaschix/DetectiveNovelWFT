import { CST } from "../CST.mjs";

const xS = 510;
const yS = 40;
const yD = 70;
const widnth = 650;
const height = 60;
const round = 10;

export class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: CST.SCENE.GAMESCENE });
        this.typingTimer = null; // Объявляем typingTimer как свойство класса
        this.currentCharacterIndex = 0; // Текущий индекс персонажа
        this.characters = [
            {
                avatar: "character5", name: 'Irene', dialog: 'What do you want to know?',
                questions: [
                    'What can you say about your colleagues?',
                    'Have you seen anything suspicious lately?',
                    'What do you mean by Victor\'s past ? How do you know about that?',
                    'What were you doing the evening the painting disappeared?',
                    'Who could have wanted to steal the painting?'
                ],
                answers: [
                    'There’s a grumpy security guard, an old restorer, a fantastic photographer, and a quiet tour guide. Poor thing, her mother is sick, and the treatment costs quite a bit. Of course, Victor is helping her out... But I totally get her—I’d do anything to help someone I love.',
                    'Just two days ago, I saw Anna crying her eyes out, and Victor was trying to comfort her. He said he’d find her some money. It\'s no surprise he wants to help her—if it weren’t for Anna, he wouldn’t even have gotten this job, not with his personality and terrible past. You can ask Sam—they had a huge fight in front of everyone the night before the painting went missing. Oh man, what a scene that was, ha-ha-ha! He even managed to get into it with Michael—attacked him on the street, can you believe it?',
                    'I mean his criminal past, of course. I’m just naturally curious, that’s all. A little observation goes a long way—it’s not hard. I’m surprised you don’t know about it yet.',
                    'At first, it was a lovely evening! Mike and I were out walking, and we were having such a great time together! Then we headed back to my place for dinner. I was so nervous because I had planned a surprise for him that night—just the perfect gift for our perfect relationship! Everything was supposed to go smoothly; it was all going according to plan! But then it all went downhill! The museum director started calling us non-stop, and then the police got involved. Ugh! And here we are.',
                    'Clearly, it’s someone who needs money. Have you seen it? The only thing beautiful about that painting is its price.'
                ]
            },
            {
                avatar: "character3", name: 'Sam', dialog: 'What happened?',
                questions: [
                    'What can you say about your colleagues?',
                    'You were seen arguing with Victor. What happened?',
                    'When did this happen, and what exactly went missing?',
                    'Did you notice anything suspicious on the day the painting went missing?',
                    'Who could have wanted to steal the painting?'
                ],
                answers: [
                    'No one, nobody is doing their job properly! If everyone actually worked like they should, nothing like this would have happened!',
                    'This young man needs to leave his personal life at the door when he comes to work! Everyone has their struggles, but that doesn’t mean you can neglect your responsibilities! Is it really that hard to sit and watch the cameras?! My... uh... tools went missing, and he didn’t even keep an eye on things! That’s outrageous! That’s why I decided to teach the kid a lesson!',
                    'My tools, as I said… It was the day before the painting theft. Or maybe on the day of the theft. No, definitely the day before. Old age isn’t a joy! I even forgot where I left my pills!',
                    'I don’t know anything like that! I just remember that Victor couldn’t find his key ring two days before the masterpiece went missing, but then he found it on his desk. The kid claims the keys were lost, but how did they suddenly appear back on his desk? I’m telling you, this is negligence, terrible negligence!',
                    'Whoever stole that painting is an ignorant amateur who knows nothing about art! I can accept that my years of hard work have gone unappreciated, and that my paycheck has been delayed for months, but this! This is a real tragedy! That painting is worth so much more than just canvas and paint! It\'s priceless! But nobody gets that!'
                ]
            },
            {
                avatar: "character1", name: 'Anna', dialog: 'Hello. What did you want to ask me?',
                questions: [
                    'What can you say about your colleagues?',
                    'You were seen crying at the security desk. What were you talking about with Victor?',
                    'On the day of the theft, you were seen rushing down the street at 9:05 PM. Where were\nyou headed?',
                    'Are you planning to quit the museum?',
                    'Did you notice anything suspicious on the day the painting went missing?'
                ],
                answers: [
                    'Well... Michael is new with us, so I don’t really know him that well. He’s into art and spends a lot of time at the museum. Sam has been with us for years; he’s very impressionable and can be tough to deal with, but he’s dedicated to his work. As for Irene... We’ve known each other for a long time, but I still feel awkward around her. I’m not in the easiest situation in my life, but I haven’t shared the details with anyone. I got chills when Irene suddenly said she sympathized with me and mentioned that my mom was diagnosed with something. We’ve never been close, and that really scared me.',
                    'Haha... Seems like you can’t hide everything, right? I had a nervous breakdown, and Victor was just comforting me. We’re old friends but we don’t publicly share that. You see, he made some serious mistakes in the past by getting involved with the wrong people. He’s not into that anymore, but it would be impossible for him to get a decent job, so I decided to help him out. Please don’t tell him I told you this. Nobody else knows but the two of us. He’s a dependable guy and he’s changed for the better.',
                    'I was heading to the hospital to see my mom. Luckily, the medical staff understands the situation and allows visits later than usually permitted.',
                    'Did you find my resignation letter? Well, I’m seriously looking for a new job. They’ve been delaying my paycheck for months, and I can’t wait anymore. I’m really exhausted and I desperately need money to save my mom.',
                    'I think it was a day or two before the incident. I saw Sam and Irene together by the painting. Instead of shouting back like he usually does, he just stood there listening to her. I was far away and didn’t hear what they were talking about. After he walked away, Irene suddenly turned to the painting, closed her eyes, and smiled. Then she even burst out laughing. I’m used to her quirks, but Sam’s behavior at that moment really unsettled me. He looked pale as a ghost.'
                ]
            },
            {
                avatar: "character2", name: 'Victor', dialog: 'What do you need?',
                questions: [
                    'What can you say about your colleagues?',
                    'You were seen on the street at 9:10 PM. Where were you rushing off to?',
                    'Did you notice anything suspicious on the day the painting went missing?',
                    'Eyewitnesses say you had a fight with Michael at the museum entrance a few days\nbefore the painting disappeared. What happened?',
                    'You were convicted in the past for dealing in stolen goods. That was art, wasn’t it?'
                ],
                answers: [
                    'Do you really want to hear this? Because there won’t be anything nice to say.',
                    'I was running to a tailor. My pants ripped right at work. I had a meeting with my almost-ex-wife, and I was running late.',
                    'I saw a satisfied smirk from my dear still-wife after closing deal with that damned divorce lawyer. She clearly decided to screw me over in the asset division.',
                    'Late one night, there was this sketchy guy wandering around the museum with a camera, peeking into windows. What the hell was I supposed to think? Yeah, I shouldn’t have jumped on him right away since it turned out to be our new guy with his digital girlfriend. God knows what’s going through Michael’s head. He claimed he was just taking pictures. But what? Old window frames? You really believe that nonsense?',
                    'What the hell… I want a lawyer, and I’m not saying another word without him.'
                ]
            },
            {
                avatar: "character4", name: 'Michael', dialog: 'Good evening. How can I help you?',
                questions: [
                    'What can you say about your colleagues?',
                    'We found your laptop with a list of various missing exhibits. You’ve also been seen in\nother museums, and people find you suspicious. Explain yourself.',
                    'Is Irene helping you with your investigations? You’re often seen together.',
                    'On the night the painting disappeared, you were seen leaving the museum with Irene at\n8:55 PM. Where did you go next, and what were you doing?',
                    'What have you discovered so far?'
                ],
                answers: [
                    'I like my colleagues. Each of them has their quirks, but overall, I think they’re good people.',
                    'It’s all unfortunate misunderstandings... I was just taking photos and studying the exhibits for my work. I guess there’s no point in hiding it from you; I’m a private investigator. I was hired by the museum director to conduct an independent investigation into the disappearance of an ancient statue a month ago. I’m currently working undercover. We expected another theft would happen, just like in other museums, and that’s exactly what occurred.',
                    'Oh no. No one knows I’m working undercover. Sometimes she says she wants to "help" me and that she "knows exactly what I need," and it makes me uneasy. She’s always been a bit too emotional; I think that’s just how she is. I’ve managed to gather a lot of useful information through her, but lately, she’s gotten too pushy and fixated on me, violating all kinds of personal boundaries. It’s interfering with the investigation, and it’s just not my style. The night of the theft, I was about to bring this up with her.',
                    'We took a walk, then it got pretty chilly and Irene asked me to wait for her in the park while she ran to grab some coffee. There’s a café just around the corner from the museum that’s open late. But they didn’t have her favorite coffee, so we decided to go out for dinner instead. She seemed especially excited; I think she was hoping for something more, but I wanted to wrap things up that day. Anyway, the evening was disrupted by calls from the museum director; he was beside himself with rage.',
                    'I have every reason to believe that Victor is involved in illegal trading of archaeological finds and works of art, and that he’s responsible for the disappearance of that ancient statue a month ago. I\'ve gathered some circumstantial evidence, but it’s not enough to press charges yet. But I’ll get to the bottom of this.'
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

            const questionText = this.add.text(xS + 15, yS + i * yD + 10, '', { font: '16px Arial', fill: '#87878C' });
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
