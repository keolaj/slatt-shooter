class Laser {
    constructor() {
        this.sprite = new PIXI.loader.resources["assets/imgs/laser.png"]
        this.sprite.anchor.set(.5, .5);
        this.sprite.position.set(x + 40, y);
        this.speed = 20;


        lasers.push(this);
        entities.addChild(this);
    }
    update() {
        this.sprite.position.x += this.speed;

        if (this.sprite.position.x > renderer.width * 1.1) {
            this.sprite.destroy();
            lasers.splice(lasers.indexOf(this), 1);
            console.log("destroyed rocket")
    }
}