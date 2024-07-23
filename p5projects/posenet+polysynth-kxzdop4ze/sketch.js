let polySynth;
let button;
let button_state = false;
// pose settings
let video;
let poseNet;
let poses = [];

//velocity
let vel;

function setup() {
 createCanvas(640, 480);
        
    // set up the video
    video = createCapture(VIDEO);
    video.size(width, height);

    // Create a new poseNet method with a single human detection
    poseNet = ml5.poseNet(video, type='single', modelReady);
    // This sets up an event that fills the global variable "poses"
    // with an array every time new poses are detected
    poseNet.on('pose', function(results) {
        poses = results;
    });
    
    // Hide the video element, and just show the canvas
    video.hide();
  
  button = createButton("poly play");
  button.mousePressed(polyToggle);
  background(220);
  text("click to play", 20, 20);

  // the rest of this code helps get around Chrome's 
    // requirement that sound activation is initiated by the user
    var myDiv = createDiv('click to start audio');
    myDiv.position(0, 0);

    // Start the audio context on a click/touch event
    userStartAudio().then(function() {
        myDiv.remove();
    });
  
  polySynth = new p5.PolySynth();
}

// this is what heppens once the model is loaded
function modelReady() {
    select('#status').html('Model Loaded!');
    button.show()
}

function polyToggle() {
  
    userStartAudio();
    // playSynth(0.2)
   
}

// this function gets called repeatedly by p5.js
function draw() {
    image(video, 0, 0, width, height);

    // We can call both functions to draw all keypoints and the skeletons
    drawKeypoints();
    
    // And this interprets the right-wrist position into a note!
    wristToNote();
}



// turns a the right-wrist position into a note
function wristToNote() {
    
    // return if no poses yet
    if (!poses || poses.length < 1) {
        return;
    } 
    
    // map the position of right wrist onto the set of notes
    let right_wrist_y = 
    let right_wrist_confidence = poses[0].pose.rightWrist.confidence
    
    // check the rightwrist keypoint score [10] to see if it's in view
    if (poses[0].pose.keypoints[10].score > 0.7) {
        
     if(right_wrist_y < height/2)
      playMajC()
      else {
        
      }
      
         
   
  
   if (poses[0].pose.keypoints[11].score > 0.7) {
        
      // vel = map(right_wrist_y,0,height,0.0,0.7)
      
      
      
         
    } else {
        polySynth.noteRelease();

    }
}



function playMajC() {
  // note duration (in seconds)
  let dur = 1.5;

  // time from now (in seconds)
  let time = 0;

  // velocity (volume, from 0 to 1)
  let vel = 0.2;

  // notes can overlap with each other
  polySynth.noteAttack('C4', vel, 0);
  polySynth.noteAttack('E4', vel, 0);
  polySynth.noteAttack('G3', vel, 0);

  
}

function playdimB() {
  // note duration (in seconds)
  let dur = 2.5;

  // time from now (in seconds)
  let time = 0;

  // velocity (volume, from 0 to 1)
  let vel = 0.2;

  // notes can overlap with each other
  polySynth.noteAttack('B4', vel)
  polySynth.noteAttack('D5', vel)
  polySynth.noteAttack('F5', vel)
  
}
