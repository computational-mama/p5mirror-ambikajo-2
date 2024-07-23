let vid;
let poseNet;
let moves = [];
let poses = [];

function setup() {
  createCanvas(600, 400)
  vid = createCapture(VIDEO)
  vid.hide()
  vid.size(width, height);

  poseNet = ml5.poseNet(vid, modelLoaded)
  poseNet.on('pose', (results) => {

    poses = results
    // console.log(moves.length)
  });
}

function modelLoaded() {
  console.log('Model Loaded!');
}


function draw() {
  background(220);
  image(vid, 0, 0, width, height)
  // drawKeypoints()
  drawNose()
}

function drawNose() {
  if (poses.length > 0) {
    // for(i=0;i<poses.length;i++){

    person = poses[0].pose
    nX = person.nose.x
    nY = person.nose.y
  noStroke()
    circle( nX, nY,40)


    // }
  }
}

function drawKeypoints() {
  // Loop through all the poses 
  for (let i = 0; i < poses.length; i++) {

    let pose = poses[i].pose;
    for (let j = 0; j < pose.keypoints.length; j++) {

      let keypoint = pose.keypoints[j];

      if (keypoint.score > 0.8) {
        fill(255, 0, 0);
        noStroke();
        ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
      }
    }
  }
}