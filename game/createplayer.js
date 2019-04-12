imgs = {
    PLAYER: "assets/sprite.png"
    }
    

createPlayer = new function() {
        // Create PIXI.Sprite from Image
        player = new Sprite(resources[imgs.PLAYER].texture);
        player.anchor.x = 0.5;
        player.anchor.y = 0.5;
        player.x = app.renderer.width / 2;
        player.targetY = app.renderer.height - (app.renderer.height * 0.1);
        player.y = app.renderer.height - (app.renderer.height * 0.1);
        player.maximumShootCooldown = 10;
        player.shootCooldown = player.maximumShootCooldown;
        player.recoilAmount = -(app.renderer.height * 0.01);
        player.smoothness = 5;
        player.rapidFire;
        player.maxmimumRapidFireCooldown = 300;
        player.rapidFireCooldown = player.maximumRapidFireCooldown;
        player.rapidFireSpeed = 1;
        resizeSprite(player, player.width * spriteScales);
        
        // Player update
        player.update = function(delta) {
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
}}