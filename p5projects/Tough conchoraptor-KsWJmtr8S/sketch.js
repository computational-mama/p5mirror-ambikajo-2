let img;
let y = 200;

function setup() {
  createCanvas(400, 400, WEBGL);
  img = createCapture(VIDEO)
  img.hide()
  background(0);

}

function draw() {
  noStroke()
  // rotateZ(frameCount * 0.01);
  // rotateX(frameCount * 0.1);
  // rotateY(frameCount * 0.1);
  //pass image as texture
  texture(img);
  ellipse(0, 0, y, y);
  y-=2
  console.log(y)
  if(y<-200){
    y+=2
  }
}