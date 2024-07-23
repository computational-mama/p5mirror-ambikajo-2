let video;

function setup() {
  createCanvas(400, 400);
  video = createCapture(VIDEO)
  video.hide()
  // video.size(100,100)
}

function draw() {
  background(220);
  image(video,0,0);
}