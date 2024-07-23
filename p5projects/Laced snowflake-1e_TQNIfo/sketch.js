// Classifier Variable
let classifier;
// Model URL
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/9apYE0438/';

//details for hte classifier
let label = "";
let conf;

//keywords for the different knots
let k1 = "labour"
let k2 = "kinship"
let k3 = "challenges"
let k4 = "visibility"
let k5 = "mirror"

//basic requirements
let button;
let constraints;
let vid

function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}

function setup() {
  createCanvas(200, 200);
  background(200)
  // noCanvas()
  constraints = {
    video: {
      mandatory: {
        minWidth: displayWidth,
        minHeight: displayHeight
      },
      optional: {
        facingMode: {
          exact: "user"
        }
      }
    },
    audio: false
  };
  textFont('Rajdhani')
  button = createButton("test")
  button.size(50, 50)
  button.mousePressed(startStream)
  
}

function startStream() {
  vid = createCapture(constraints, function(stream) {
    console.log(stream);
  });
// vid = createCapture(VIDEO)
  // vid.hide()
  vid.position(0,0)
  button.remove()
  text("test",10,10)
  classifyVideo()
  
}
// Get a prediction for the current video frame
function classifyVideo() {
  // flippedVideo = ml5.flipImage(video)
  classifier.classify(startStream, gotResult);
  // flippedVideo.remove();
  
}

// When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.

  label = results[0].label;
  conf = results[0].confidence
  // console.log(conf)
  // console.log(label);
  // Classify again!
  classifyVideo();
}
function draw() {
  // image(startStream,0,0)  
  fill(0);
  textSize(20);
  textAlign(CENTER);
  
  addFrm()
  
}

function addFrm() {
  if (conf > 0.7) {
    if (label == "Knot 1") {
      createP(k1, width / 2, height / 2 - 10);
    }
    if (label == "Knot 2") {
      text(k2, width / 2, height / 2 - 10);
    }
    if (label == "Knot 3") {
      text(k3, width / 2, height / 2 - 10);
    }
    if (label == "Knot 4") {
      // clk.ellipse(100, 100, 10, 10)
      text(k4, width / 2, height / 2 - 10);
    }
    if (label == "Knot 5") {
      text(k5, width / 2, height / 2 - 10);
    }
  }
  
}