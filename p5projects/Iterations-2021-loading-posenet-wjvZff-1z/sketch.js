let camera
let poseNet
let poses = []
function setup() {
  createCanvas(400, 400);
  camera = createCapture(VIDEO)
  camera.hide()
  poseNet = ml5.poseNet(camera, modelLoaded);
  
  poseNet.on('pose', (results) => {
  poses = results;
});
}
function modelLoaded() {
  console.log('Model Loaded!');
}

function draw() {
  background(220);
  image(camera,0,0,camera.width,camera.height)
  // Listen to new 'pose' events

drawKeypoints();
}

function drawKeypoints() {
  // Loop through all the poses detected
  for (let i = 0; i < poses.length; i += 1) {
    // For each pose detected, loop through all the keypoints
    const pose = poses[i].pose;
    for (let j = 0; j < pose.keypoints.length; j += 1) {
      // A keypoint is an object describing a body part (like rightArm or leftShoulder)
      const keypoint = pose.keypoints[j];
      // Only draw an ellipse is the pose probability is bigger than 0.2
      if (keypoint.score > 0.2) {
        fill(255, 0, 0);
        noStroke();
        ellipse(keypoint.position.x, keypoint.position.y, 20, 20);
      }
    }
  }
}

