let _rocketList = new Array();

class Laser {
    static get list() {
        return _rocketList;
    }
    static set list(value) {
        _rocketList = value;
    }
    constructor(x, y) {
        this.sprite = new PIXI.Sprite(PIXI.loader.resources["assets/imgs/laser.png"].texture);
        this.sprite.anchor.set(.5, .5);
        this.sprite.position.set(x + 100, y - 25);
        this.speed = 20;
        this.sprite.scale.set(.2, .2);


        Laser.list.push(this);
        entities.addChild(this.sprite);
    }
    update() {
        this.sprite.position.x += this.speed;

        if (this.sprite.position.x > app.renderer.width * 1.1) {
            this.sprite.destroy();
            Laser.list.splice(Laser.list.indexOf(this), 1);
        }
    }
}