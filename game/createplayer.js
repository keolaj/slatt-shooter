// animation variables
const idle = "idle";
const walking = "walking";
const shoot = "shoot";
const die = "die";
let ani = idle;
let aniLoop = true;

//amount of bullets
var fireBullets = 10;
var jumpVar = 3;


class Player {
  constructor() {
    var sheet = PIXI.loader.resources["assets/imgs/playersprite/spritesheet.json"].spritesheet;
    this.sprite = new PIXI.extras.AnimatedSprite(sheet.animations[idle], true);
    this.sprite.idleAnim = new PIXI.extras.AnimatedSprite(sheet.animations[idle], true);
    this.sprite.shootAnim = new PIXI.extras.AnimatedSprite(sheet.animations[shoot], true);
    this.sprite.walkAnim = new PIXI.extras.AnimatedSprite(sheet.animations[walking], true);
    this.sprite.currentAnimation = this.sprite.idleAnim;
    this.sprite.play();
    this.sprite.animationSpeed = .15;
    this.sprite.loop = true;
    this.sprite.anchor.x = 0.5;
    this.sprite.anchor.y = 0.5;
    this.sprite.x = 150;
    this.sprite.targetY = app.renderer.height - (app.renderer.height * 0.1);
    this.sprite.y = 675;
    this.sprite.scale.set(5, 5);
    this.sprite.smoothness = 5;

    window.addEventListener('keydown', this.onKeyDown.bind(this));
    window.addEventListener('keyup', this.onKeyUp.bind(this));

    //variables for moving player
    this.directionX = 0;
    this.directionY = 0;
    this.speed = 8;
    this.yVelocity = 0;
    this.jumpAmt = -20;
    this.jumping = false;
    this.groundY = 675;

    // Y velocity - When you jump, jump() is called one time, triggering:
    // this.velocitY += jumpAmt;
    // update: if (yVelocity >= 0) { yVelocity --; } else { yVelocity = 0; }
    // if (!jumping && player.Y <= groundY) { playerY = groundY }
    

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
  }
  update() {

    this.changeAnimation();

    this.updateFire();
    
    this.updateMovement();

  }

  updateMovement() {
    this.sprite.y += this.yVelocity;
    if (this.sprite.y < this.groundY) {
      this.yVelocity += 1.2;
    } else if (this.jumping) {
      this.yVelocity = 0;
      this.jumping = false;
      this.sprite.y = this.groundY
      jumpVar = 3;
    }
  }

  updateFire() {
    if (this.fireCooldown < this.fireSpeed)
      this.fireCooldown++;

    if (this.keyState[32] && this.fireCooldown >= this.fireSpeed && fireBullets >= 1) {
      let laser = new Laser(this.sprite.position.x, this.sprite.position.y);
      this.fireCooldown = 0;
      fireBullets --;
    }
  }
  onKeyDown(key) {
    this.keyState[key.keyCode] = true;
    if (this.keyState[38] == true) {
      if (jumpVar > 0) {
        this.yVelocity = 0;
        this.jump()
        jumpVar --;
      }
    }
  }
  onKeyUp(key) {
    this.keyState[key.keyCode] = false;
  }
  changeAnimation() {
    let newAnim = undefined;
    if (this.keyState[32] && fireBullets > 0) {
      newAnim = this.sprite.shootAnim;
      this.sprite.animationSpeed = .5;
    } 
    else if (this.keyState[39]) {
      newAnim = this.sprite.walkAnim;
      this.sprite.animationSpeed = .25;
    }
    else {
      newAnim = this.sprite.idleAnim;
      this.sprite.animationSpeed = .15;
    }
    
    if (newAnim !== this.sprite.currentAnimation) {
      this.sprite.currentAnimation = newAnim; 
      this.sprite.textures = this.sprite.currentAnimation.textures;  
      this.sprite.gotoAndStop(0);
      this.sprite.gotoAndPlay(0);
    }
  }
  jump() {
    this.jumping = true;
    this.yVelocity += this.jumpAmt
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