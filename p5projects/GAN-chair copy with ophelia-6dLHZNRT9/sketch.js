let chair
let myfont
let texture1
let img;
let sh;

function preload() {
  chair = loadModel('lowres-chair.obj', true)
  chair2 = loadModel('shape2.obj', true)
  myfont = loadFont('SpaceMono-Bold.ttf')
  texture1 = loadShader('texcoord.vert', 'texcoord.frag');
}

function setup() {
  createCanvas(800, 800, WEBGL);
  sh = createGraphics(800, 800, WEBGL);

  // turn off the createGraphics layers stroke
  sh.noStroke();

  sh.textFont(myfont)
  sh.textSize(52)
  sh.textAlign(CENTER)
  sh.push()
  sh.background(0);
  sh.fill(255)
    // sh.rotate(PI/2+frameCount/100)
  sh.translate(0, 0, 40)
  sh.text("CODING WITH FRIENDS", -50, -80, 120, 400)
  sh.pop()
  img = sh.get();

  sh = createGraphics(800, 800, WEBGL);
}

function draw() {
  background(255);
  image(sh, -width / 2, -height / 2);

  texture1.setUniform("tex", img);
  texture1.setUniform("u_resolution", [width, height]);
  texture1.setUniform("u_time", millis() / 6000.0);
  texture1.setUniform("u_mouse", [mouseX, mouseY]);
  sh.shader(texture1);
  sh.rect(0, 0, width, height);
  sh.ellipse(0, 0, width / 2, height / 2)
  normalMaterial()
rotateX(PI/2*frameCount/100)
rotateZ(PI/2*frameCount/100)
model(chair)
  rotateX(-PI/2*frameCount/100)
rotateZ(-PI/2*frameCount/100)
  model(chair2)

}