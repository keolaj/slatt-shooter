// animation variables
const idle = "idle";
const walking = "walking";
const shoot = "shoot";
const die = "die";

//amount of bullets
var fireBullets = 10;

class Player {
  constructor() {
    let sheet = PIXI.loader.resources["assets/imgs/playersprite/spritesheet.json"].spritesheet;
    console.log(sheet.animations);
    this.sprite = new PIXI.extras.AnimatedSprite(sheet.animations[idle], true);
    this.sprite.play();
    this.sprite.animationSpeed = .2;
    this.sprite.anchor.x = 0.5;
    this.sprite.anchor.y = 0.5;
    this.sprite.x = app.renderer.width / 6;
    this.sprite.targetY = app.renderer.height - (app.renderer.height * 0.1);
    this.sprite.y = app.renderer.height - (app.renderer.height * 0.1);
    this.sprite.scale.set(5, 5);
    this.sprite.smoothness = 5;

    window.addEventListener('keydown', this.onKeyDown.bind(this));
    window.addEventListener('keyup', this.onKeyUp.bind(this));

    //variables for moving player
    this.directionX = 0;
    this.directionY = 0;
    this.speed = 8;

    //laser variables
    this.fireSpeed = 10;
    this.fireCooldown = 0;

    //objects for key input
    this.keyCodes = {
      37: -1,
      38: -1,
      39: 1,
      40: 1
    };
    this.keyState = {
      32: false,
      37: false,
      38: false,
      39: false,
      40: false
    };

    // add to container
    entities.addChild(this.sprite);
    console.log(this.sprite)
  }
  update() {


    this.updateFire();
  }

  updateFire() {
    if (this.fireCooldown < this.fireSpeed)
      this.fireCooldown++;

    if (this.keyState[32] && this.fireCooldown >= this.fireSpeed && fireBullets >= 1) {
      let rocket = new Laser(this.sprite.position.x, this.sprite.position.y);
      this.fireCooldown = 0;
      fireBullets --;
    }
  }
  onKeyDown(key) {
    this.keyState[key.keyCode] = true;
  }
  onKeyUp(key) {

  }
}



/*createPlayer = new function () {
  // Create PIXI.Sprite from Image
  let sheet = PIXI.loader.resources["assets/imgs/playersprite/spritesheet.json"].spritesheet;
  console.log(sheet)
  player = new PIXI.extras.AnimatedSprite(sheet.animations["tile"]);
  player.anchor.x = 0.5;
  player.anchor.y = 0.5;

  // Player update
  player.update = function (delta) {
    // Move towards mouse
    // Calculate xSpeed with distance from mouse position
    let xSpeed = (mousePos.x - this.x) / player.smoothness;

    // Bounce xSpeed on walls
    if (this.x > LEFT_WALL_POSITION && this.x < RIGHT_WALL_POSITION) {
      if (this.x + (this.width / 2) + xSpeed > RIGHT_WALL_POSITION) {
        // xSpeed = 0;//-xSpeed;
        xSpeed = (RIGHT_WALL_POSITION - (this.x + (this.width / 2)));
      } else if (this.x - (this.width / 2) + xSpeed < LEFT_WALL_POSITION) {
        xSpeed = (LEFT_WALL_POSITION - (this.x - (this.width / 2)));
      }
    }

    // Rotate player
    player.rotation = (xSpeed / 50);

    // Add xSpeed to position
    this.x += xSpeed;
  }
}
*/