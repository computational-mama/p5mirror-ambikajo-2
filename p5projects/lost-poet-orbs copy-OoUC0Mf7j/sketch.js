let butter
let vidArr = ["blue.mp4","2smoke.mp4"]
let vid = []

function preload() {
  butter = loadImage("blue-smoke.png")
    // butterVid = createVideo(butterfly)
  for(i=0;i<2;i++){
    vid[i]  = createVideo(vidArr[i])
  // console.log(vid[i])
  }
}

function setup() {
  createCanvas(800, 400, WEBGL);
  // scale(2)
  // vid.hide()
  // textureWrap(CLAMP);
 for(i=0;i<2;i++){
    vid[i].hide()
  // console.log(vid[i])
  }

}

function draw() {
  background(220);
  
  noStroke()
  // push()
  orbitControl()
  // texture(butter)
  translate(-width/2,0,0)
  for (j = 0; j < 5; j++) {
  for(i=0;i<2;i++){
    texture(vid[i]) 
  // console.log(vid[i])
  }
    translate(j + 120, 0, 0)
    push()
    rotateX(frameCount / 100)
    rotateY(frameCount / 100)
    sphere(50)
    pop()
  }
}

function mousePressed() {
  // vid.loop()
   for(i=0;i<2;i++){
    vid[i].loop()
  // console.log(vid[i])
  }
}