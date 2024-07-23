let cnv;
let cnvimg;
let circleimg;
let righteye;
let lefteye;
let mouth;
let nose;
let video;
let poseNet;
let poses = [];
let index= [];

function preload(){
  righteye = loadImage('right.jpg')
  lefteye = loadImage('left.jpg')
   nose = loadImage('nose.jpeg')
   mouth = loadImage('mouth.jpg')
  circleimg = loadImage('circle.png')
  }
function setup() {
  createCanvas(400, 400);
  cnv = createGraphics(100,100)
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
  background(220);
   drawKeypoints();
  righteye.mask(circleimg)
  image(righteye,20,20)
  lefteye.mask(circleimg)
  image(lefteye,100,20)
  nose.mask(circleimg)
  image(nose,200,20)
 mouth.mask(circleimg)
 image(mouth,150,150)
 
}

function drawKeypoints()  {
  // Loop through all the poses detected
  for (let i = 0; i < poses.length; i++) {
    // For each pose detected, loop through all the keypoints
    let pose = poses[i].pose;
    for (let j = 0; j < pose.keypoints.length; j++) {
      // A keypoint is an object describing a body part (like rightArm or leftShoulder)
      let keypoint = pose.keypoints[0];
      // Only draw an ellipse is the pose probability is bigger than 0.2
      if (keypoint.score > 0.2) {
        fill(255, 0, 0);
        noStroke();
        nose.mask(circleimg)
        image(nose,keypoint.position.x, keypoint.position.y)
       // ellipse(, 10, 10);
      }
    }
  }
}