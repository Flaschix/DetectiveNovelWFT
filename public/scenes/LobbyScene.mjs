import { CST } from "../CST.mjs";

export class LobbyScene extends Phaser.Scene {
    constructor() {
        super({ key: CST.SCENE.LOBBYSCENE });
    }

    preload() {

        // Создание спрайта и запуск анимации
        this.loadingSprite = this.add.sprite(1280 / 2, 720 / 2, 'loading'); // Центрирование спрайта
        this.loadingSprite.setScale(0.3, 0.3);
        this.loadingSprite.play('loadingAnimation');

        // this.load.image('background', 'assets/back/background.png');
        // this.load.image('playButton', 'assets/button/play.png');
        this.load.image('gameBackground', 'assets/back/game-background.png');

        this.load.image('character1', 'assets/character/character1.png');
        this.load.image('character2', 'assets/character/character2.png');
        this.load.image('character3', 'assets/character/character3.png');
        this.load.image('character4', 'assets/character/character4.png');
        this.load.image('character5', 'assets/character/character5.png');

        this.load.image('nextButton', 'assets/button/next.png');
        this.load.image('backButton', 'assets/button/back.png');
        this.load.image('leaveSpace', 'assets/button/leave-space.png');
        this.load.image('close', 'assets/button/cancel-exit.png');

        this.load.image('logo', 'assets/icon/logo.png');
        this.load.image('exit', 'assets/icon/exit.png');
    }

    create() {
        this.loadingSprite.stop();
        this.loadingSprite.destroy();

        // this.add.image(640, 360, 'background');
        // const playButton = this.add.image(640, 360, 'playButton').setInteractive();

        this.scene.start('GameScene');

        // playButton.on('pointerdown', () => {

        // });
    }
}
