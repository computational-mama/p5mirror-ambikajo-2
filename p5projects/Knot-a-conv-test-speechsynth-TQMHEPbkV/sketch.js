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
   console.log(dict.knotalist[0].answer[0])
   console.log(dict.knotalist[0].question)
  let question1 = dict.knotalist[0].question
  createP(question1)
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
  let answers1 = dict.knotalist[0]
  let rand_num = round(random(0,answers1.answer.length-1))
  createP(answers1.answer[rand_num])
  foo.speak("WORD SOUND Sound a word or a sound. Listen for a surprise. Say a word as a sound. Say a sound as a word. Say a sound until it is a word. Sound a word until it is a sound. Speak a sentence of sounds. Sing a phrase ofwords. Cross overs")
}

function voicesList(){
  makeL = foo.listVoices()
  createP(makeL)
}