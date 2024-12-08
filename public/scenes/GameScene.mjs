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
        this.typingTimer = null;
        this.currentCharacterIndex = 0;
        this.characters = [
            {
                avatar: "character5", name: 'Айрин', dialog: 'Что вы хотите знать?',
                questions: [
                    'Что можете сказать о коллегах?',
                    'Видели ли вы что-нибудь подозрительное в последнее время?',
                    'О каком прошлом Виктора вы говорите? Откуда вам известна эта информация?',
                    'Что вы делали вечером в день пропажи картины?',
                    'Кому могла понадобиться кража картины?'
                ],
                answers: [
                    'Ворчливый охранник, старый реставратор, прекрасный фотограф и тихоня-экскурсовод. Жаль её, у нее больна мать, а лечение стоит очень немалых денег. Разумеется, тут не обходится без помощи Виктора... Но я прекрасно понимаю её – я тоже готова на всё, чтобы помочь любимому человеку.',
                    'Как раз два дня назад видела как Анна сильно плакала, а Виктор успокаивал её. Он сказал, что достанет ей деньги. Неудивительно, что он решил помочь ей, ведь если бы не Анна, он бы вообще не получил эту работу, не с его характером и жутким прошлым. Можете спросить Сэма — они поругались на глазах у всех накануне пропажи картины. Ну и зрелище было, ха-ха-ха! Он и с Майклом успел поссориться: напал на него на улице, представляете? Разве не следует арестовать его за это? ',
                    'О криминальном прошлом, разумеется. Я просто любопытна по своей натуре, вот и всё. Немного наблюдательности – это не сложно. Удивлена, что вы всё ещё ничего об этом не знаете.',
                    'Сначала это был прекрасный вечер! Мы с Майком гуляли, нам было так чудесно вместе! А потом пошли ужинать ко мне. Я так переживала, ведь готовила ему сюрприз в тот вечер — идеальный подарок для наших идеальных отношений!\nИ всё должно было быть прекрасно, всё шло по плану! Но пошло в итоге псу под хвост! Директор музея начал обрывать нам телефоны, а потом и полиция подключилась. Агх! И вот мы здесь.',
                    'Тем, кому нужны деньги, очевидно. Вы видели её? От прекрасного в этой картине только её стоимость.'
                ]
            },
            {
                avatar: "character3", name: 'Сэм', dialog: 'Что такое?',
                questions: [
                    'Что можете сказать о коллегах?',
                    'Вас видели ругающимся с Виктором. Что произошло?',
                    'Когда это произошло и что именно у вас пропало?',
                    'Видели ли вы что-нибудь подозрительное в день пропажи картины?',
                    'Кому могла понадобиться кража картины?'
                ],
                answers: [
                    'Никто, никто не выполняет нормально свои обязанности! Если бы каждый работал как следует, ничего подобного не случилось бы! ',
                    'Этому молодому человеку следует оставлять личную жизнь за порогом, приходя на работу! У всех есть трудности в жизни, но это не значит, что ты можешь позволить себе пренебрегать обязанностями! Неужели так сложно сидеть и смотреть на камеры?! Мои… Э-э-э… Инструменты пропали, а он даже не следил за происходящим! Это возмутительно! Вот почему я решил преподать мальчишке пару уроков!',
                    'Мои инструменты, как я уже сказал…\nЭто было за день до кражи картины. Или в день кражи. Нет, за день. Точно, это было за день до неё. Старость — не радость! Я даже забыл, где оставил свои таблетки!',
                    'Ничего такого не знаю! Помню только, что Виктор не мог найти связку ключей за два дня до пропажи шедевра, но потом всё-таки обнаружил их на своем столе. Мальчишка утверждает, что ключи пропали, но как тогда они потом сами появились на его столе? Говорю вам, это халатность, ужасная халатность!',
                    'Кто бы ни украл картину, он невежественный дилетант, который ничего не понимает в искусстве! Я готов мириться с тем, что мой многолетний труд не оценили по достоинству, что зарплату стабильно задерживают уже который месяц, но допустить такое! Это же настоящая трагедия! Эта картина намного больше, чем просто холст и масло! Она бесценна! Но никто этого не понимает!'
                ]
            },
            {
                avatar: "character1", name: 'Анна', dialog: 'Здравствуйте! О чем вы хотели поговорить со мной?',
                questions: [
                    'Что можете сказать о своих коллегах?',
                    'Вас видели плачущей у стола охраны. О чем вы говорили с Виктором?',
                    'В день кражи вас видели спешащей на улице в 21:05. Куда вы направлялись?',
                    'Вы планируете уволиться из музея?',
                    'Видели ли вы что-нибудь подозрительное в день пропажи картины?'
                ],
                answers: [
                    'Ну… Майкл с нами недавно, я не знаю его достаточно хорошо. Интересуется искусством, много времени проводит в музее. Сэм уже много лет с нами, он очень впечатлительный и с ним не всегда легко, но всё же он предан своей работе. С Айрин мы давно знакомы, но мне по прежнему бывает неловко рядом с ней. У меня не самая легкая ситуация в жизни, но я никому не рассказывала подробностей. У меня мурашки по коже пошли, когда Айрин внезапно начала говорить, что сочувствует, что маме поставили такой диагноз. Мы никогда не были близки и это здорово напугало меня.',
                    'Хааа… Похоже, невозможно скрыть всё, верно? У меня был нервный срыв, Виктор лишь утешал меня. Мы давние друзья, но не афишируем этого. Видите ли, в прошлом он совершил серьёзные ошибки, связавшись не с теми людьми. Он больше не занимается подобным, но ему было бы невозможно попасть на нормальную работу и я решила помочь. Пожалуйста, не говорите ему, что я рассказала вам об этом. Никто кроме нас двоих этого не знает. Он надежный человек и он давно исправился.',
                    'В больницу к матери. К счастью, мед. персонал вошел в положение и позволяет приходить позднее, чем обычно разрешено.',
                    'Вы и заявление моё нашли? Что ж, я действительно ищу новую работу. Зарплату задерживают уже который месяц, а я не могу ждать. Я очень устала и мне позарез нужны деньги, чтобы спасти маму.',
                    'Кажется, это было за день или два до происшествия. Я видела Сэма с Айрин вместе у картины. Но вместо того, чтобы кричать в ответ как обычно он стоял стоял и выслушивал что-то от неё. Я была далеко и не слышала, о чем именно они говорили. После того, как он зашагал прочь, Айрин внезапно повернулась к картине, закрыла глаза и улыбнулась. А потом и вовсе рассмеялась от души. Я привыкла к её странностям, но именно поведение Сэма тогда напрягло меня. Он был бледный, как мел.'
                ]
            },
            {
                avatar: "character2", name: 'Виктор', dialog: 'Что вам нужно?',
                questions: [
                    'Что можете сказать о своих коллегах?',
                    'Вас видели на улице в 21:10. Куда вы спешили?',
                    'Видели ли вы что-нибудь подозрительное в день пропажи картины?',
                    'Очевидцы говорят, вы ругались с Майклом у входа в музей за несколько дней до\nпропажи картины. Что произошло?',
                    'В прошлом вы были осуждены за сбыт краденных вещей. Это были предметы\nискусства, не так ли?'
                ],
                answers: [
                    'Вы правда хотите это услышать? Потому что приличных слов там не будет.',
                    'Бежал в ателье. Мои брюки порвались прямо на работе. А у меня была встреча с почти-уже-бывшей-женой, я опаздывал.',
                    'Довольную ухмылку моей дорогой пока-ещё-жены, после успешного заключения проклятого договора с проклятым юристом по бракоразводным процессам. Она явно решила подложить мне свинью при разделе имущества.',
                    'Поздно вечером по территории музея носится подозрительный тип с камерой и заглядывает в окна. Что я, черт побери, должен был ещё подумать? Да, не стоило сразу нападать на него, ведь оказалось, что это наш новичок со своей цифровой подружкой. Бог знает, что творится в голове у Майкла. Он сказал, что просто фотографировал. Но что? Старые оконные рамы? Вы правда поверите в эту чушь?',
                    'Что за… Я требую адвоката и ни слова больше не скажу без его присутствия.'
                ]
            },
            {
                avatar: "character4", name: 'Майкл', dialog: 'Добрый вечер. Чем могу помочь?',
                questions: [
                    'Что можете сказать о своих коллегах?',
                    'Мы обнаружили ваш ноутбук со списком различных пропавших экспонатов. Также\nвас замечали в других музеях, называя подозрительным. Объяснитесь.',
                    'Айрин помогает вам в расследованиях? Вас часто видят вместе.',
                    'В день исчезновения картины вас видели выходящим из музея вместе с Айрин в\n20:55. Куда вы направились дальше и чем занимались?',
                    'Что вам уже удалось обнаружить?'
                ],
                answers: [
                    'Мне нравятся мои коллеги. У каждого свои особенности, но в целом все они хорошие люди на мой взгляд.',
                    'Это досадные недоразумения... Я просто делал фото и изучал экспонаты для своей работы. Полагаю, нет смысла скрывать от вас, но я частный детектив. Был нанят директором музея для независимого расследования пропажи одной из древних статуэток месяц назад. В настоящее время работаю под прикрытием. Мы ожидали, что кража произойдет снова, как это было в других музеях. Так и случилось.',
                    'О, нет. Никто не знает, что я работаю под прикрытием. Иногда она заявляет, что хочет “помочь” мне и что “точно знает, что мне нужно” и я напрягаюсь. Она всегда была слишком эмоциональна, думаю, это просто она такая. Мне действительно удалось выяснить много полезной информации через нее, но она стала слишком навязчива и зациклена на мне, в последнее время нарушает все возможные личные границы. Это мешает расследованию и в целом не по мне. В вечер кражи я как раз хотел поговорить с ней об этом.',
                    'Мы прогулялись, потом стало довольно прохладно и Айрин попросила подождать её в парке, пока она сбегает за кофе. За поворотом у музея как раз есть кофейня, работает допоздна. Но любимого кофе Айрин не оказалось, поэтому мы решили пойти поужинать. Она была особенно возбуждена, видимо, надеялась на что-то большее, но я хотел все закончить в этот день. В любом случае вечер был сорван звонками директора музея: он был вне себя от ярости.',
                    'У меня есть все основания полагать, что Виктор занимается незаконной торговлей археологических находок и произведений искусства, и что он виновен в пропаже древней статуэтки месяц назад. Я уже добыл косвенные улики, но пока их недостаточно, чтобы предъявить обвинения. Но я докопаюсь до истины.'
                ]
            },
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
