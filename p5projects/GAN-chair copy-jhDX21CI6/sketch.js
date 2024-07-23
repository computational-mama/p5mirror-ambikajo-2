let chair;
let myfont;


function preload() {
  chair = loadModel('shape.obj', true)
  chair2 = loadModel('shape2.obj', true)
  myfont = loadFont('SpaceMono-Bold.ttf')

}

function setup() {
  createCanvas(400, 400, WEBGL);
    //shaderTexture = createGraphics(100, 100, WEBGL);

  // turn off the createGraphics layers stroke
  //shaderTexture.noStroke();

  textFont(myfont)
  textSize(42)
  textAlign(CENTER)
}

function draw() {
  background(255);
   //shaderTexture.shader(texture1);
    //texture1.setUniform("resolution", [width, height]);
  //texture1.setUniform("time", millis() / 1000.0);
  // texture1.setUniform("mouse", [mouseX, map(mouseY, 0, height, height, 0)]);
  //haderTexture.rect(0,0,width,height);
  orbitControl()
  push()
  translate(0, 0, -20)
  // scale(10)
  // ambientLight(250)
  noStroke()
 // ambientMaterial(70, 130, 230)
normalMaterial()
  //texture(shaderTexture);
  //rotateX(PI/2)
  //rotateY(PI/2)
  //rotateZ(PI/2)
    translate(0,0,0)
  model(chair)
  translate(0,-100,100)
  model(chair2)
  pop()
  push()
  fill(0)
   translate(0, 0, 40)
  text("CODING WITH FRIENDS", -50, -80, 120, 400)
  pop()
}