let track

function preload(){
  track = loadSound("beta.mp3")
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

function mousePressed(){
  if (track.isPlaying()) {
    // .isPlaying() returns a boolean
    track.stop();
    background(255, 0, 0);
  } else {
    track.play();
    background(0, 255, 0);
  }
}