let snapshot;
let imageButton;
function setup() {
  createCanvas(800, 400);
  video = createCapture(VIDEO)
  video.hide()
  imageButton = createButton("Click me")
  imageButton.mousePressed(snapShot)
}

function draw() {
  background(220);
  image(video,0,0)
}

function snapShot(){
  snapshot = video.get()
  // image(snapshot, video.width,200)
  console.log(snapshot)
  clear()
}