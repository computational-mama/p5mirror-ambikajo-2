let myfont

function preload() {
  myfont = loadFont("fonts/SpaceMono-Bold.ttf")
}

function setup() {
  createCanvas(1920, 1080);
  angleMode(DEGREES)
  // frameRate(8)
  textFont(myfont)
  textSize(50)
  //textAlign(CENTER)
}

function draw() {
  
      
  fill(0)
  
  text("CODING WITH FRIENDS * CODING WITH FRIENDS", 0, 30)
  
}