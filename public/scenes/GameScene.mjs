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
            { avatar: "character1", name: 'Анна', dialog: 'Добрый день. Какой вопрос вы хотели бы мне задать?', questions: ['Почему вас видели грустной на улице в 21:15?', 'Как прошел ваш рабочий день в музее?', 'Есть ли у вас проблемы, которые могут повлиять на вашу работу?', 'Вы заметили что-то необычное в музее в тот вечер?', 'Где вы были, когда произошла кража?'], answers: ['Да, я была немного расстроена. В последнее время у меня были личные проблемы, которые меня очень тревожат.', 'День был тяжелый, много посетителей, много работы. Я очень устала. Кажется я на работе оставила свою сумку и очки.', 'У меня возникли финансовые трудности из-за болезни матери. Но я стараюсь не приносить свои проблемы на работу.', 'В музее было довольно тихо, ничего подозрительного я не заметила.', 'Я уже уходила с работы и была на улице, когда произошла кража.'] },
            { avatar: "character2", name: 'Виктор', dialog: 'Добрый день. Какой вопрос вы хотели бы мне задать?', questions: ['Где вы были вечером, когда произошла кража?', 'Почему вас видели на улице в 21:10, куда вы спешили?', 'Вы видели что-то подозрительное в музее перед выходом?', 'Какие у вас были планы на вечер?', 'Почему вы не сообщили о порванных штанах своему начальству?'], answers: ['Я был на улице, бежал в ателье зашить штаны. Они порвались прямо на работе, и я хотел привести себя в порядок перед встречей.', 'Я спешил в ателье, чтобы зашить штаны. У меня была важная встреча с бывшей женой, и я не хотел выглядеть неопрятно.', 'Нет, ничего особенного не заметил. Все было как обычно, пока я был на смене.', 'У меня была встреча с бывшей женой, с которой я в разводе уже два года. Хотел обсудить кое-что важное.', 'Это было поздно вечером, и я не хотел беспокоить начальство из-за мелочи. Просто хотел быстро решить проблему.'] },
            { avatar: "character3", name: 'Сэм', dialog: 'Добрый день. Какой вопрос вы хотели бы мне задать?', questions: ['Почему вас видели в 21:25 в белом халате с чехлом от гитары?', 'Что вы делали в музее вечером?', 'У вас есть какие-то особые планы на будущее, связанные с вашей работой?', 'Почему вы общаетесь с людьми с криминальным прошлым?', 'Как вы относитесь к своей работе в музее?'], answers: ['Я возвращался в свою мастерскую после небольшого перерыва. Чехол от гитары использую для хранения некоторых инструментов.', 'Я задержался в музее, чтобы завершить работу над одним из проектов. Иногда работа требует дополнительного времени.', 'Я всегда стремлюсь совершенствоваться и мечтаю о больших проектах. Надеюсь, мои труды будут по достоинству оценены.', 'Это просто старые знакомства. Никакой связи с моим текущим положением и работой в музее.', 'Я очень предан своей работе, но, как и все, иногда чувствую, что мои усилия не всегда ценятся должным образом.'] },
            { avatar: "character4", name: 'Майкл', dialog: 'Добрый день. Какой вопрос вы хотели бы мне задать?', questions: ['Зачем вы встретились с Ирен в музее?', 'Почему вас видели с рюкзаком в 21:45 на улице?', 'Вы оставили свой фотоаппарат в музее? Почему?', 'Вы мечтаете о кругосветном путешествии с Ирен, как вы планируете его оплатить?', 'Что вы делали в других музеях, где вас замечали в подозрительных действиях?'], answers: ['Мы решили провести вечер в музее, чтобы насладиться искусством и провести время вместе. Мы давно планировали это свидание.', 'Я всегда ношу с собой рюкзак, в нем мои вещи. Ничего особенного в этом нет.', 'Видимо, оставил случайно. Мы были в спешке, когда уходили.', 'Мы давно мечтаем о путешествии, и сейчас просто откладываем деньги на эту мечту.', 'О, это были недоразумения. Я просто делал зарисовки и изучал экспонаты для своих проектов.'] },
            { avatar: "character5", name: 'Ирен', dialog: 'Добрый день. Какой вопрос вы хотели бы мне задать?', questions: ['Что вы делали в музее вечером?', 'Почему ваш кулон был найден в музее?', 'Куда вы направлялись после музея в 21:45?', 'Зачем вам нужно было встречаться с Майклом в музее?', 'Почему ваш фотоаппарат был найден в музее?'], answers: ['Мы с Майклом решили встретиться в музее, чтобы провести время вдали от лишних глаз. Мы давно планировали это.', 'Я даже не заметила, что потеряла кулон. Возможно, он упал, когда я снимала пальто.', 'Мы просто решили прогуляться после музея. Встретились на улице, чтобы обсудить планы на будущее.', 'Мы оба любим искусство, и музей был отличным местом для встречи. Это было просто свидание.', 'О, это фотоаппарат Майкла. Он, наверное, случайно оставил его в спешке.'] }
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

        this.add.image(40, 50, 'logo');

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
            this.scene.start(CST.SCENE.MENU); // Например, переход на сцену меню
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
