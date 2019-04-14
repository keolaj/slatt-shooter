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
            this.sprite.position.set(app.renderer.width * 1.05, app.renderer.height - 500 * Math.random() - (app.renderer.height * .1));
            this.sprite.scale.set(0.4, 0.4)

            if (!document[hidden] && !pause) {
                Enemy.list.push(this.sprite);
                entities.addChildAt(this.sprite, 0);
            }

        }.bind(this), 700);
    }



    update() {
        Enemy.list.forEach(function (element, index, array) {
            element.position.x -= 6;

            if (element.position.x < -app.renderer.width * 0.1) {
                element.destroy();
                array.splice(0, 1);
            }
        });
    }
}
var hidden, visibilityChange; 
if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support 
  hidden = "hidden";
  visibilityChange = "visibilitychange";
} else if (typeof document.msHidden !== "undefined") {
  hidden = "msHidden";
  visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
  hidden = "webkitHidden";
  visibilityChange = "webkitvisibilitychange";
}
function handleVisibilityChange() {
    if (document[hidden]) {
      onPage = false;
    } else {
      onpage = true;
    }
}

document.addEventListener(visibilityChange, handleVisibilityChange, false);

var onPage = true;