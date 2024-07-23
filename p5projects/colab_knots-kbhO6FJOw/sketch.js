// Classifier Variable
let classifier;
// Model URL
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/9apYE0438/';

// Video
let video;
let flippedVideo;
// To store the classification
let label = "";
let conf;
// to add the words
let k1 = "labour"
let k2 = "kinship"
let k3 = "challenges"
let k4 = "visibility"
let k5 = "mirror"

//array for snapshots
let snapshots = []
// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}
let clk

function setup() {
  createCanvas(displayWidth, displayHeight);
  // Create the video
  // clk = createGraphics(displayWidth, displayHeight);
  video = createCapture(VIDEO);
  video.size(displayWidth, displayHeight);
  video.hide();
  textFont('Rajdhani')
  // flippedVideo = ml5.flipImage(video);
  // Start classifying
  classifyVideo();
}

function draw() {
  background(200);
  // Draw the video
  image(video, 0, 0);

  // Draw the label
fill(255);
  textSize(60);
  textAlign(CENTER);

  addFrm()
  // image(clk, 0, 0)
}

// Get a prediction for the current video frame
function classifyVideo() {
  // flippedVideo = ml5.flipImage(video)
  classifier.classify(video, gotResult);
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

function addFrm() {
  if (conf > 0.7) {
    if (label == "Knot 1") {
      text(k1, width / 2, height / 2 - 10);
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
