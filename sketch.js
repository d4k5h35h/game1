/*
  1 = loading screen
  2 = menu screen 
  3 = levels screen
  4 = game screen
*/
var Van;
var up, left, right, melee, range;
var gameState = 0;
var particles = [];
var cnv;

function setup(){
  cnv = createCanvas(windowWidth, windowHeight);
 }

function draw(){
  background(0);
  if (gameState === 0){
    fire(); 
  }

}


class Particle {
  constructor(x, y, vx, vy) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.alpha = 255;
    this.d = random(10, 30);
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 7.75;
  }
  finished() {
    return this.alpha < 0;
  }

  show() {
    noStroke();
    fill(random(180, 250), random(50, 200), 10, this.alpha);
    ellipse(this.x, this.y, this.d, this.d);
  }
}
function fire(){
  for (let i = 0; i < 5; i++) {
      let p = new Particle(width / 20, height / 2, random(5, 15), random(-5, 5));
      particles.push(p);
      let q = new Particle(width / 1.05, height / 2, random(-5, -15), random(5, -5));
      particles.push(q);
    }
    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].update();
      particles[i].show();
      if (particles[i].finished()) {
        particles.splice(i, 1);
      }
    }
  }