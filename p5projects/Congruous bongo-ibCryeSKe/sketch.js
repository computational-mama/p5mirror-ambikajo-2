// video source: https://vimeo.com/90312869
let img;
let vid;
let theta = 0;

function setup() {
  createCanvas(710, 400, WEBGL);

  //img = loadImage('assets/cat.jpg');
  vid = createCapture(VIDEO);
  vid.size(256,120)
  vid.elt.muted = true;
  vid.loop();
  vid.hide();
  textureWrap(REPEAT);
}

function draw() {
  background(250);
  translate(-500, -400, 0);
  push();
  // rotateZ(theta * mouseX * 0.001);
  // rotateX(theta * mouseX * 0.001);
  //rotateY(theta * mouseX * 0.001);
  //pass image as texture
  texture(vid);
  noStroke()
  rect(150,200,710,150);
  //rect(350,200,210,150);
  pop();

 
}
