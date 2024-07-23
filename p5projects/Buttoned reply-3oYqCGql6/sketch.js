let colArray = ["GamingCareers_Palmer.png","GamingCareers_Swanson.png"]

let imgArr = []

function preload(){
  for(i=0;i<colArray.length;i++){
    imgArr[i] = loadImage(colArray[i])
  }
  // img = loadImage("Ga")
}
function setup() {
  createCanvas(400, 400);
  // frameRate(4)
  imageMode(CENTER)
}

function draw() {
  background(220,100);
  textSize(100)
  textAlign(CENTER)
   
  push()
  fill(255)
  translate(width/2,0)
  // rotate(-PI/2*frameCount)
  text("below TEXT",width/2,height/4)
  pop()
  
  image(imgArr[0],width/2,height/2,100,100)
  
  
  fill(0)
  translate(width/2,0)
  rotate(PI/2)
  text("BIG TEXT",width/2,mouseY)
  
}