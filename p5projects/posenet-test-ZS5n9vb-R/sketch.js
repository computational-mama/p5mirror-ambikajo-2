let vid;
let poses = [];
let poseNet;

function setup() {
  createCanvas(800, 800);
  vid = createCapture(VIDEO);
  vid.hide();
  poseNet = ml5.poseNet(vid, modelLoaded);
  poseNet.on('pose', function(results) {
    poses = results;
  });
}
// When the model is loaded
function modelLoaded() {
  console.log('Model Loaded!');
}

function draw() {
  image(vid, 0, 0);
  drawKeypoints();
}

function drawKeypoints() {
  for (let i = 0; i < poses.length; i++) {
   
      let px = poses[i].pose.keypoints[0];
    //  let py = poses[i].pose.keypoints;
      console.log(poses);
      if (poses[i].pose.score > 0.20) {
        ellipse(px.position.x, px.position.y, 10);
      }
  }
}