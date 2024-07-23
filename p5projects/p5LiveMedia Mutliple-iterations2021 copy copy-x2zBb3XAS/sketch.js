// This is a test of the p5LiveMedia webrtc library and associated service.
// Open this sketch up 9 times to send video back and forth

let myVideo;
let allVideos = [];
let vidWidth = 480;
let vidHeight = 360;
let cnv
let poseNet, poses
let feedImage
let poseImage

function setup() {
  // console.log('ml5 version:', ml5.version);
  cnv = createCanvas(480, 360);
  poseImage = createGraphics(width, height)

  myVideo = createCapture(VIDEO, gotMineConnectOthers);
  myVideo.size(vidWidth, vidHeight);
  myVideo.hide();
  allVideos.push({id: 'mine', video: myVideo});
   
  poseNet = ml5.poseNet(modelLoaded);
   // Listen to new 'pose' events
  poseNet.on('pose', (results) => {
    poses = results;
  });

}

// When the model is loaded
function modelLoaded() {
  console.log('Model Loaded!');
  if(feedImage != null) {
    poseNet.multiPose(feedImage);
  }
}


function gotMineConnectOthers(myStream) {
  let p5l = new p5LiveMedia(this, "CAPTURE", myStream, "arbitraryRoomName");
  p5l.on('stream', gotOtherStream);
  p5l.on('disconnect', (id) => {
    allVideos = allVideos.filter(v => v.id !== id) 
  })
}

function draw() {
  background(220);
  stroke(255);

//   let row = 0; //for making a grid
//   let col = 0;
//   for (var i = 0; i < allVideos.length; i++) {
//     image(allVideos[i].video, col * vidWidth, row * vidHeight, vidWidth, vidHeight);
//     col++;
//     if (col >= width / vidWidth) {
//       col = 0;
//       row++;
//     }

//   }
  
  allVideos.forEach((v, index) => {
    tint(255, 125);
    // console.log(v)
    image(v.video, 0, 0, width, height)
  })
  
  if(frameCount % 10 === 0) {
    feedImage = get()
    poseNet.multiPose(feedImage);
    // if(poses != null) {
    //   console.log('len: ', poses.length)
    // }
  }
  
  if(poses != null) {
    drawPoses(poses, ['nose', 'leftWrist'], poseImage)
  }
}

function drawPoses(poses, partsToDraw, pg) {
  pg.background(255, 2)
  if(poses.length > 0) {
    partsToDraw.forEach(part => {
      let bodyPart = poses[0].pose[part] ? poses[0].pose[part] : {}
      pg.fill(0)
      pg.circle(bodyPart.x, bodyPart.y, 3)
    })
  }
  image(pg, 0, 0, width, height)
}

// We got a new stream!
function gotOtherStream(stream, id) {
  console.log(allVideos.length)
  stream.size(vidWidth, vidHeight);
  allVideos.push({id: id, video: stream});
  stream.hide();
}