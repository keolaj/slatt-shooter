imgs = {
PLAYER: "sprite.png"
}


//Aliases
let Application = PIXI.Application,
  Container = PIXI.Container,
  ParticleContainer = PIXI.particles.ParticleContainer,
  loader = PIXI.loader,
  resources = PIXI.loader.resources,
  TextureCache = PIXI.utils.TextureCache,
  Sprite = PIXI.Sprite,
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
forceCanvas: true,
  app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight)
PIXI.SCALE_MODES.DEFAULT = PIXI.SCALE_MODES.NEAREST;
// Creates canvas element, pushes to DOM
document.body.appendChild(app.view);

// Variables
var tink; //new Tink(PIXI, app.renderer.view);
var mousePos = app.renderer.plugins.interaction.mouse.global;
var player;
var bullets = [];
var enemies = [];
var lasers = [];
var updatable = [];
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
var highScore = 0;
var laserCreationCooldown = 50; //(Math.random() * 1000) + 100;
var powerUpCreationCooldown = 80;
var slowMoMaximumCooldown = 400;
var slowMoCooldown = slowMoMaximumCooldown;
var slowMo = false;

loader
  .add([imgs.PLAYER, imgs.ENEMY_0, imgs.BULLET,
    imgs.HEALTH_HEART, imgs.RAPID_POWERUP, imgs.RESTART_BUTTON,
    imgs.LASER_WARNING, imgs.ROCKET, imgs.EXPLOSION_0,
    imgs.EXPLOSION_1, imgs.EXPLOSION_2, imgs.EXPLOSION_3,
    imgs.SMOKE_PIECE, imgs.SLOWMO_POWERUP
  ])
  .on("progress", loadProgressHandler)
  .load(loadFinished);

function loadFinished() {
  init();
  gameLoop();
}
function init() {
  tink = new Tink(PIXI, app.renderer.view);
  tink.makePointer();
  createPlayer();
  
}

function gameLoop() {
  delta = app.ticker.deltaTime;
  tink.update();
  // Get mouse pos
  mousePos = app.renderer.plugins.interaction.mouse.global;
  
  // Call next animation frame
  requestAnimationFrame(gameLoop);
  
  state(delta);
}