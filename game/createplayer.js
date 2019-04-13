class Player {
  constructor() {
    let sheet = PIXI.loader.resources["assets/imgs/playersprite/spritesheet.json"].spritesheet;
    console.log(sheet.animations);
    player = new PIXI.extras.AnimatedSprite(sheet.animations["walking"], true);
    player.play()
    player.animationSpeed = .2;
    player.anchor.x = 0.5;
    player.anchor.y = 0.5;
    player.x = app.renderer.width / 5;
    player.targetY = app.renderer.height - (app.renderer.height * 0.1);
    player.y = app.renderer.height - (app.renderer.height * 0.1);
    player.scale.set(5, 5);
    entities.addChild(player);
    console.log(player)
  }
  update() {

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