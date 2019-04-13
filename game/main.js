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
  width: 800, // default: 800
  height: 600, // default: 600
  antialias: true, // default: false
  transparent: false, // default: false
  resolution: 1 // default: 1
});
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.backgroundColor = 0x22A7F0;
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight)
PIXI.SCALE_MODES.DEFAULT = PIXI.SCALE_MODES.NEAREST;
// Creates canvas element, pushes to DOM
document.body.appendChild(app.view);

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
var gameOver = false;
var gameLoopID = undefined;
var state = play;



PIXI.loader.add([
  "assets/imgs/playersprite/spritesheet.json",
  "assets/imgs/playersprite/spritesheet.png",
  "assets/imgs/shrek.png"
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

}

function gameLoop() {
  delta = app.ticker.deltaTime;
  tink.update();
  state(delta);
  enemy.update();
  
  // Get mouse pos
  mousePos = app.renderer.plugins.interaction.mouse.global;

  // Call next animation frame
  requestAnimationFrame(gameLoop);

}
function play(delta) {
  player.update(delta);
}


