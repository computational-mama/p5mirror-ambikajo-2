// Copyright (c) 2018 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
PoseNet example using p5.js
=== */

let video;
let poseNet;
let poses = [];

let cmaj
let dsharpmin;
let fsharpmaj
let emin
let gsharpmaj
let perc1;
let state =false;
let state2 =false;
let state3 =false;

function preload(){
    // soundFormats('mp3', 'ogg');

  cmaj = loadSound("0_Cmaj.mp3")
  // dsharpmin = loadSound("0_Em.mp3")
  //fsharpmaj = loadSound("")
 emin = loadSound("0_Em.mp3")
  perc1 = loadSound("0_perc2.mp3")
  //gsharpmaj = loadSound("")
}
function setup() {
  createCanvas(640, 480);
  
  video = createCapture(VIDEO);
  video.size(width, height);

  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on('pose', function(results) {
    poses = results;
  });
  // Hide the video element, and just show the canvas
  video.hide();
}

function modelReady() {
  select('#status').html('Model Loaded');
}

function draw() {
  image(video, 0, 0, width, height);

  // We can call both functions to draw all keypoints and the skeletons
  drawKeypoints();
}

// A function to draw ellipses over the detected keypoints
function drawKeypoints()  {
  // Loop through all the poses detected
  for (let i = 0; i < poses.length; i++) {
    // For each pose detected, loop through all the keypoints
    let pose = poses[i].pose;
    for (let j = 0; j < pose.keypoints.length; j++) {
      // A keypoint is an object describing a body part (like rightArm or leftShoulder)
      let keypointE = pose.keypoints[8];
     // wrist_conf = pose.keypoints[10];
      // Only draw an ellipse is the pose probability is bigger than 0.2
//       if (keypointE.score > 0.5  && state == false) {
//         state = true
//       console.log(keypointE)
        
//          cmaj.play();
      
//       }
//       let keypointK = pose.keypoints[13];
//          if (keypointK.score > 0.5  && state2 == false) {
//         state2 = true
//       console.log(keypointK)
        
//          emin.play();
      
//       }
      
      let keypointAnkle = pose.keypoints[15];
         if (keypointAnkle.score > 0.5  && state3 == false) {
        state3 = true
      console.log(keypointAnkle)
        
         perc1.play();
      
      }
      
      
      
        fill(255, 0, 0);
        noStroke();
        ellipse(keypointAnkle.position.x, keypointAnkle.position.y, 10, 10);
    }
  }
}

