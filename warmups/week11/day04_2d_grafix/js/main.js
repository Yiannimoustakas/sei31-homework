const controls = {
  velocityScale: 0.5,
  gravity: 0.0,
  lifetime: 0
};

let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  background(0);
  // stroke(255);
  noStroke();
  fill(255, 0, 0);
  strokeWeight(2);

  colorMode(HSB, 255);

  const gui = new dat.GUI();
  gui.add(controls, 'velocityScale', -1, 1);
  gui.add(controls, 'gravity', -1, 1);
  gui.add(controls, 'lifetime', 0, 0.01);
  // gui.closed = true;

  // ellipse(300, 300, 200, 200);
  // //   start x,y   end x,y
  // line(100, 100, 500, 500);

  // Change fill in color
  // fill(0, 255, 0);
  // rect(400, 100, 200, 200);
  //
  // fill(0, 0, 255);
  //
  // triangle(250, 300, 100, 500, 400, 500);
  //
  // point(500, 50);
}


// this function runs approx 60 times per second
// ie every screen refresh
function draw() {
  background(0); //clear the screen each redraw

  // const x = random(windowWidth);
  // const y = random(windowHeight);
  const x = mouseX;
  const y = mouseY;
  // const size = 50;

  const vx = mouseX - pwinMouseX + 4;
  const vy = mouseY - pwinMouseY + 4;
  // console.log(vx);

  // get a percentage (' normalised value ')
  // for the mouse X position in the window
  // const xPercent = mouseX / windowWidth
  // Multiply it by the target range maximum
  // const hue = xPercent * 255;

  // const mappedSize = map(mouseY, 0, windowHeight, 5, 150);
  const size = Math.abs(vx) + 100;

  const hue = frameCount % 255;

  // fill(hue, 255, 255);

  if (keyIsDown(SHIFT)) {
    // draw a circle
    // ellipse(x, y, mappedSize, mappedSize);

    particles.push({x, y, vx, vy, hue, size, life: 1.0})
  }

  updateParticles();

};

function updateParticles() {
  const outputParticles = [];

  // loop over our array of particles, drawing each of them
  for ( let i = 0; i < particles.length; i++ ) {
    const p = particles[ i ];

    // change the position of the cirlce based on the velocity of th emouse when it was created
    p.x += p.vx * controls.velocityScale;
    p.y += p.vy * controls.velocityScale;

    p.vy += controls.gravity;

    if (p.x >= windowWidth || p.x <= 0) {
      p.vx = -p.vx;
    };

    if (p.y >= windowHeight || p.y <= 0) {
      p.vy = -p.vy
    };

    p.life -= controls.lifetime // decrease the life (which will draw the particle as more transparent)

    if (p.life > 0) {
      outputParticles.push( p );
    };

    fill( p.hue, 255, 255, p.life*255 );
    ellipse( p.x, p.y, p.size, p.size);
  } //for

  particles = outputParticles
} //updateParticles
