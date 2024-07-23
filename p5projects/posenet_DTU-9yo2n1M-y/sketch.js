//posenet example for experimenting with computer vision and body tracking 

let video;
let poseNet;
let poses = [];
let gameScore = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.size(width, height);

  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on('pose', function(results) {
    poses = results;
    // console.log(poses)
  });
  // Hide the video element, and just show the canvas
  video.hide();
}

function modelReady() {
  select('#status').html('Model Loaded');
}

function draw() {
  image(video, 0, 0, windowWidth, windowHeight);


  // We can call both functions to draw all keypoints and the skeletons
  drawKeypoints();
  
}

// A function to draw ellipses over the detected keypoints
function drawKeypoints()  {
  // Loop through all the poses detected
  for (let i = 0; i < poses.length; i++) {
    // For each pose detected, loop through all the keypoints
    let pose = poses[i].pose;
    let noseX = pose.nose.x
    let noseY = pose.nose.y
    let noseConf = pose.nose.confidence
    let poseScore = pose.score
    // console.log(poseScore)
    
    noFill()
    
    if(poseScore > 0.25){
      if(noseX)
      ellipse(noseX, noseY,100)
    }
  }
}

