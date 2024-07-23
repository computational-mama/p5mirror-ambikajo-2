// This is a test of the p5LiveMedia webrtc library and associated service.
// Open this sketch up 2 times to send video back and forth

let myVideo;
let otherVideo;
let poseNet1;
let poses1 = [];
let poseNet2;
let poses2 = [];
let pg;
let pj;
let wrist1_x;
let wrist2_x;
let wrist1_y;
let wrist2_y;

function setup() {
  createCanvas(innerWidth, 480);
  pg = createGraphics(640, 480)
  pj = createGraphics(640, 480)
  myVideo = createCapture(VIDEO,
    function(stream) {
      let p5l = new p5LiveMedia(this, "CAPTURE", stream, "jZQ64AMJc_TESTTEST");
      p5l.on('stream', gotStream);
    }
  );
  myVideo.muted = true;
  myVideo.hide();
  poseNet1 = ml5.poseNet(myVideo, modelLoaded);
  poseNet1.on('pose', (results) => {
    poses1 = results;
    // console.log(poses)
  });
}

function modelLoaded() {
  console.log('Model Loaded!');
}

function draw() {
  background(220);
  stroke(255);
  if (myVideo != null) {
    image(myVideo, 0, 0, myVideo.width, myVideo.height);
    text("You", 10, 10);
  }
  // ellipse(mouseX, mouseY, 100, 100);

  if (otherVideo != null) {
    image(otherVideo, myVideo.width, 0, otherVideo.width, otherVideo.height);
    text("friend", myVideo.width, 10);
      // together()
  }

  drawNose1()
  drawNose2()
  // console.log(wrist1.wX, wrist1.wY)
}

// We got a new stream!
function gotStream(stream, id) {
  // This is just like a video/stream from createCapture(VIDEO)
  otherVideo = stream;
  //otherVideo.id and id are the same and unique identifiers
  otherVideo.hide();
  poseNet2 = ml5.poseNet(otherVideo, modelLoaded);
  poseNet2.on('pose', (results) => {
    poses2 = results;
    // console.log(poses)
  });
}

function drawNose1() {
  fill(255)
  if (poses1.length > 0) {


    person = poses1[0].pose
    nX = person.nose.x
    nY = person.nose.y
    wrist1_x = person.leftWrist.x
    wrist1_y = person.leftWrist.y

    pj.noStroke()
    pj.ellipse(nX, nY, 15)
    image(pj, 0, 0)

  }
}

function drawNose2() {

  if (poses2.length > 0) {


    person = poses2[0].pose
    nX = person.nose.x
    nY = person.nose.y
    wrist2_x = person.leftWrist.x
    wrist2_y = person.leftWrist.y
    pg.noStroke()
    pg.fill(255, 100, 100)
    pg.ellipse(nX, nY, 15)
    image(pg, myVideo.width, 0)
    
  }

}

// function together() {
//   stroke(3)
//   line(wrist1_x,wrist1_y,wrist2_x,wrist2_y)

// }