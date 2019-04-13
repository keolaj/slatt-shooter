let _enemyList = new Array();

class Enemy {
    static get list() {
        return _enemyList;
    }
    static set list(value) {
        _enemyList = value;
    }
    constructor() {
        window.setInterval(function () {
            this.sprite = new PIXI.Sprite(PIXI.loader.resources["assets/imgs/shrek.png"].texture);
            this.sprite.anchor.set(0.5, 0.5)
            this.sprite.position.set(app.renderer.width * 1.3, app.renderer.height - (app.renderer.height * 0.1));
            this.sprite.scale.set(0.4, 0.4)

            Enemy.list.push(this.sprite);
            entities.addChildAt(this.sprite, 0);

        }.bind(this), 3000);
    }



    update() {
        Enemy.list.forEach(function (element, index, array) {
            element.position.x -= 4;

            if (element.position.x < -app.renderer.width * 0.1) {
                element.destroy();
                array.splice(0, 1);
            }

        });
    }
}
