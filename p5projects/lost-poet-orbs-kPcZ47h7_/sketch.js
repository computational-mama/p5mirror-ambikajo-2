let butter
let vidArr = ["blue.mp4","2smoke.mp4"]
let vid = []

function preload() {
  butter = loadImage("blue-smoke.png")
    butterVid = createVideo("2smoke.mp4")
    // butterVid2 = createVideo("blue.mp4")
 
}

function setup() {
  createCanvas(800, 400, WEBGL);
   butterVid.hide()

}

function draw() {
  background(220);
  
  noStroke()
  // push()
  orbitControl()
  // texture(butter)
  push()
  pointLight(250,250,250,0,0,100)
  noFill()
  stroke(100)
  translate(0,-200,-1000)
  box(1600,1400,1400)
  pop()
  translate(-width/2,0,0)
  for (j = 0; j < 5; j++) {
 
    translate(j + 120, sin(PI+noise(j))*-100, -300+noise(j)*30)
    push()
    texture(butterVid) 
    // rotateX(frameCount / 100)
    // rotateY(frameCount / 100)
    sphere(50)
    pop()
  }
}

function mousePressed() {
  butterVid.loop()

}