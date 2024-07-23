let txtfrm
let btn
let foo
let wrt

foo = new p5.SpeechRec(); // speech recognition object (will prompt for mic access)
foo.continuous = true; // do continuous recognition
// foo.interimResults = true; // allow partial recognition (faster, less accurate)
foo.onResult = showResult; // bind callback function to trigger when speech is recognized
foo.start(); // start listening

function showResult() {
  console.log(foo.resultString); // log the result
  // console.log()
}

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
}

// function workplease() {

// }

function draw() {
  background(220);
  // txt = foo.resultString
  // ret = foo.resultString.length
  if (foo.resultString != null) {
    //   text(foo.resultString, 10, 10)
    // }
    translate(width / 2, height / 2)
    for (i = 0; i < 200; i++) {
      rotate(i)
      text(foo.resultString, 0, 0)
    }
  }
}