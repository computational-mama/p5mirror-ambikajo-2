var foo = new p5.Speech('Google US English'); // speech synthesis object
// foo.speak('hi there'); // say something

let dict
let btn
let btnList
function preload(){
  dict = loadJSON("dict.json")
}
function setup() {
  createCanvas(400, 400);

  foo.setRate(0.87)
  foo.interrupt = true;

 textAlign(CENTER)
  btn = createButton('click')
  btn.mousePressed(synths)  
  // btnList = createButton('List')
  // btnList.mousePressed(voicesList)
}

function draw() {
  background(220);
  text("click to get a response",width/2,height/2)
}

function synths(){

  foo.speak("Sound a word or a sound. Listen for a surprise. Say a word as a sound")
}

function voicesList(){
  makeL = foo.listVoices()
  createP(makeL)
}