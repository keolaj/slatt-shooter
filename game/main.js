//aliases
let Application = PIXI.Application,
Container = new PIXI.Container,
ParticleContainer = PIXI.particles.ParticleContainer,
loader = PIXI.loader,
resources = PIXI.loader.resources,
TextureCache = PIXI.utils.TextureCache,
texture =  PIXI.TextureCache,
Sprite = PIXI.Sprite,
Rectangle = PIXI.Rectangle,
Text = PIXI.Text,
TextStyle = PIXI.TextStyle;
const app = new PIXI.Application({ 
  width: 256,         // default: 800
  height: 256,        // default: 600
  antialias: true,    // default: false
  transparent: true, // default: false
  resolution: 1       // default: 1
}
);

app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight)
document.body.appendChild(app.view);
