//variables for resize
var size = [1334, 750];
var ratio = size[0] / size[1];
  
//Aliases
let Application = PIXI.Application,
  Container = PIXI.Container,
  ParticleContainer = PIXI.particles.ParticleContainer,
  loader = PIXI.loader,
  resources = PIXI.loader.resources,
  TextureCache = PIXI.utils.TextureCache,
  Sprite = PIXI.Sprite,
  maxFrame = 60,
  Rectangle = PIXI.Rectangle,
  Text = PIXI.Text,
  TextStyle = PIXI.TextStyle;
const app = new PIXI.Application({
  width: 1334, // default: 800
  height: 750, // default: 600
  antialias: true, // default: false
  transparent: false, // default: false
  resolution: 1 // default: 1
});
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.backgroundColor = 0x22A7F0;
app.renderer.autoResize = true;
PIXI.SCALE_MODES.DEFAULT = PIXI.SCALE_MODES.NEAREST;
// Creates canvas element, pushes to DOM
document.body.appendChild(app.view);

//resize
function resize() {
  if (window.innerWidth / window.innerHeight >= ratio) {
      var w = window.innerHeight * ratio;
      var h = window.innerHeight;
  } else {
      var w = window.innerWidth;
      var h = window.innerWidth / ratio;
  }
  app.view.style.width = w + 'px';
  app.view.style.height = h + 'px';
}
window.onresize = function(event) {
  resize();
};
resize();

// Variables
var tink; //new Tink(PIXI, app.renderer.view);
var mousePos = app.renderer.plugins.interaction.mouse.global;
var player;
var enemy;
var healthBar = new Container();
var entities = new Container();
var particles = new Container();
var gui = new Container();
var RIGHT_WALL_POSITION = app.renderer.width;
var LEFT_WALL_POSITION = 0;
var spriteScales = 3;
var score = 0;
var scoreText;
var vid = document.getElementsByTagName("audio")
var gameOver = false;
var gameLoopID = undefined;
var state = play;
var delta = app.ticker.deltaTime;
let b = new PIXI.extras.Bump();



PIXI.loader.add([
  "assets/imgs/playersprite/spritesheet.json",
  "assets/imgs/playersprite/spritesheet.png",
  "assets/imgs/shrek.png",
  "assets/imgs/laser.png"
]).load(loadFinished);

function loadFinished() {
  init();
  gameLoop();
}

function init() {
  tink = new Tink(PIXI, app.renderer.view);
  tink.makePointer();
  entities = new Container();
  gui = new Container();
  app.stage.addChild(entities);
  app.stage.addChild(gui);
  app.stage.addChild(particles);
  state = play;
  player = new Player();
  enemy = new Enemy();
  console.log("entities", entities.children);

}

function gameLoop() {
  tink.update();
   state(delta);
  enemy.update();
  Laser.list.map((element) =>
    {
        element.update();
    });
  // Get mouse pos
  mousePos = app.renderer.plugins.interaction.mouse.global;

  // Call next animation frame
  requestAnimationFrame(gameLoop);
  collision();
}
function play(delta) {
  player.update(delta);
}
