var foo = new p5.SpeechRec(); // speech recognition object (will prompt for mic access)
foo.continuous = true; // do continuous recognition
	foo.interimResults = true; // allow partial recognition (faster, less accurate)
foo.onResult = showResult; // bind callback function to trigger when speech is recognized
foo.start(); // start listening
let myfont; 

function preload() {
  myfont = ("Space Mono")
}
function showResult() {
  console.log(foo.resultString); // log the result
}
function setup(){
  createCanvas(windowWidth,windowHeight)
  // noCanvas()
  frameRate(10)
  // noLoop()
  textSize(20)
  textFont(myfont)
  fill(100)
}

function draw(){
    background(217,180,19,10)

  if(foo.resultString != null){
  // text(foo.resultString, random (50,300),random(50,350))
  text(foo.resultString, mouseX,mouseY)
  }
  
  
}