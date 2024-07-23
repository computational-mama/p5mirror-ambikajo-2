let butter
let butterVid 

function preload() {
  // butter = loadImage("blue-smoke.png")
  butterVid = createVideo("blue.mp4")
}

function setup() {
  createCanvas(800, 400, WEBGL);
  butterVid.hide()
  // perspective
}

function draw() {
  background(220);
  camera(0,0,400,0, 0, 0, 0, 1, 0)
  orbitControl()
  noStroke()
  pointLight(250,250,250,0,100,400)

  for (i = 0; i < 6; i++) {
  n = 100*noise(i)
    translate(-100*sin(frameCount/1000),0,i*10)
     texture(butterVid)
    rect(n, n, 100, 100)
  }
}

function mousePressed(){
  butterVid.loop()
}