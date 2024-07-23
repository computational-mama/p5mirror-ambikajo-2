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
let vid
//array for snapshots
let snapshots = []
// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}
let clk

function setup() {
  createCanvas(600, 240);
  // Create the video
  clk = createGraphics(320, 240);
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();
  clk.textFont('Rajdhani')
  flippedVideo = ml5.flipImage(video);
  // Start classifying
  classifyVideo();
  //vid = createVideo("test.mp4")
  //vid.loop()
 // vid.size(100,100)
 // vid.volume(0)
}

function draw() {
  background(200);
  // Draw the video
  clk.image(flippedVideo, 0, 0);

  // Draw the label
  clk.fill(255);
  clk.textSize(60);
  clk.textAlign(CENTER);

  addFrm()
  image(clk, 0, 0)
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

function addFrm() {
  if (conf > 0.7) {
    if (label == "Knot 1") {
      clk.text(k1, clk.width / 2, clk.height / 2 - 10);
    }
    if (label == "Knot 2") {
      clk.text(k2, clk.width / 2, clk.height / 2 - 10);
    }
    if (label == "Knot 3") {
      clk.text(k3, clk.width / 2, clk.height / 2 - 10);
      image(vid3,320,0)
    }
    if (label == "Knot 4") {
       clk.ellipse(100, 100, 10, 10)
      clk.text(k4, clk.width / 2, clk.height / 2 - 10);
      //image(vid4,320,0)
    }
    if (label == "Knot 5") {
      clk.text(k5, clk.width / 2, clk.height / 2 - 10);
    }
  }
   if (conf > 0.95) {
     ellipse(10, height - 10, 10, 10)
    snapshots.push(clk.get())
     let w = 64;
    let h = 48;
     let x = 0;
    let y = 0;
     for (i = 0; i < snapshots.length; i++) {
       let index = (i+frameCount)%snapshots.length
       image(snapshots[index], 320+x,y,w, h)
      x = x+w
       if(x>width){
         x = 0;
        y = y+h
       }
     }
    // console.log(snap)

   }
}