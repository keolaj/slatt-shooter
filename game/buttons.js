class playButton {
    constructor() {
        const pics = [
            resources["assets/imgs/pause.png"].texture,
            resources["assets/imgs/right.png"].texture
        ]

        this.sprite = new PIXI.extras.AnimatedSprite(pics);
        this.sprite.buttonMode = true;
        this.sprite.interactive = true;
        this.sprite.anchor.x = .5;
        this.sprite.anchor.y = .5;
        this.sprite.x = 100;
        this.sprite.y = 100;
        this.sprite.isOver = false;
        this.sprite.on('pointerdown', this.onButtonDown);
        this.sprite.on('pointerup', this.onButtonUp);
        this.sprite.on('pointerupoutside', this.onButtonUp);
        this.sprite.on('pointerover', this.onButtonOver);
        this.sprite.on('pointerout', this.onButtonOut);
    

        gui.addChild(this.sprite);
    }


    onButtonDown() {
        this.isdown = true;
        var aud = document.getElementById("audio")
        if (this.isOver) {
            pause = !pause;
            if (pause) {
                buttonP.sprite.texture = resources["assets/imgs/right.png"].texture;
                aud.pause(); 

                
            } else {
                buttonP.sprite.texture = resources["assets/imgs/pause.png"].texture;
                if (!mBool) {
                    aud.play();
                }

            }


        }
    }

    onButtonUp() {
        this.isdown = false;
    }

    onButtonOver() {
        this.isOver = true;
    }

    onButtonOut() {
        this.isOver = false;
    }

    update() {

    }
}


class musicButton {
    constructor() {
        const pics = [
            resources["assets/imgs/musicOn.png"].texture,
            resources["assets/imgs/musicOff.png"].texture
        ]

        this.sprite = new PIXI.extras.AnimatedSprite(pics);
        this.sprite.buttonMode = true;
        this.sprite.interactive = true;
        this.sprite.anchor.x = .5;
        this.sprite.anchor.y = .5;
        this.sprite.x = window.innerWidth - 25;
        this.sprite.y = 100;
        this.sprite.isOver = false;
        this.sprite.on('pointerdown', this.onButtonDown);
        this.sprite.on('pointerup', this.onButtonUp);
        this.sprite.on('pointerupoutside', this.onButtonUp);
        this.sprite.on('pointerover', this.onButtonOver);
        this.sprite.on('pointerout', this.onButtonOut);
    

        gui.addChild(this.sprite);
    }


    onButtonDown() {
        this.isdown = true;
        var aud = document.getElementById("audio")
        if (this.isOver) {
            mBool = !mBool
            if (mBool) {
                buttonM.sprite.texture = resources["assets/imgs/musicOff.png"].texture;
                aud.pause();
                
            } else {
                buttonM.sprite.texture = resources["assets/imgs/musicOn.png"].texture;
                if (!pause) {
                    aud.play();
                }
            }


        }
    }

    onButtonUp() {
        this.isdown = false;
    }

    onButtonOver() {
        this.isOver = true;
    }

    onButtonOut() {
        this.isOver = false;
    }

    update() {

    }
}