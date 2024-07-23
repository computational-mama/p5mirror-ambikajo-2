let myfont;
let a = 0;

function preload() {
  myfont = loadFont("RobotoMono-Bold.ttf")
}

function setup() {
  createCanvas(800, 600, WEBGL);
  angleMode(DEGREES)
  textFont(myfont)
}

function draw() {
  background(220);
  orbitControl()
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  ambientLight(100)
  pointLight(255, 255, 255, locX, -100, -10);
  // let s = 50*sin(a)
  noStroke()
  for (i = 0; i < 3; i++) {
    // push()
    let s = 5 * sin(a + frameCount * 0.5)

    translate(-100, 0, 20)
    text("test", 0, 0)
    rotateX(-30 * s)
    // rotateY(s )
    specularMaterial(250);

    shininess(255)
    fill(100, 170, 255)
    rect(100 * i, 0, 100, 100)
    rect(0, 100 , 100, 100)
    // pop()
  }
  // a +=0.3
}