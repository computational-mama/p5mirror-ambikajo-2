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


let vid1;
let vid2;
let vid3;

function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}

function setup() {
  createCanvas(400, 400);
  vid1 = createVideo()
  vid1.hide()
  vid2 = createVideo()
  vid2.hide()
  flippedVideo = ml5.flipImage(video);
}

function draw() {
  background(220);
  exp()
  
}


// Get a prediction for the current video frame
function classifyVideo() {
  flippedVideo = ml5.flipImage(video)
  classifier.classify(flippedVideo, gotResult);
  flippedVideo.remove();

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
  console.log(results[0]);
  // Classify again!
  classifyVideo();
}

function exp(){
  if (conf > 0.7) {
    if (label == "Knot 1") {

    }
    if (label == "Knot 2") {
   
    }
    if (label == "Knot 3") {
      
      image(vid3,320,0)
    }
    if (label == "Knot 4") {
      // clk.ellipse(100, 100, 10, 10)
     
      image(vid4,320,0)
    }
    if (label == "neutral") {
       //small note
    }
}
}