collision = function() {
    Enemy.list.forEach(function (element, index, array) {
        if (element.containsPoint(player.sprite.position)) {
            gameOn = false
        }
    })    
    if (Laser.list[0] !== undefined) {
        Enemy.list.forEach(function (element, index, array) {
            for (x in Laser.list) {
                if (b.hit(element, Laser.list[x].sprite, true)) {
                    element.destroy();
                    array.splice(index, 1);
                    Laser.list[x].sprite.destroy();
                    Laser .list.splice(x, 1);
                    fireBullets += 2;
                }
            }
        });
    }
}
gravity = function() {
    
}
class makeButton {
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
        if (this.isOver) {
            pause = !pause;
            console.log(buttonP.sprite.texture);
            if (pause) {
                buttonP.sprite.texture = resources["assets/imgs/right.png"].texture;
            } else {
                buttonP.sprite.texture = resources["assets/imgs/pause.png"].texture;
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