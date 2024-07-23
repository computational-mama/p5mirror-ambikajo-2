let vid
let playing = false;
let button;
let x = 0;

function setup() {
  createCanvas(600, 400)

  vid = createVideo("potus.mp4")

  vid.hide()

}


function draw() {
  background(220);
  image(vid, x, 0, vid.width / 2, vid.height / 2)

}

function mousePressed() {

  vid.volume(0)

  if (playing) {
    vid.pause();
    // button.html("play")
  } else {
    vid.loop();
    // button.html("pause")

  }
  playing = !playing;
}