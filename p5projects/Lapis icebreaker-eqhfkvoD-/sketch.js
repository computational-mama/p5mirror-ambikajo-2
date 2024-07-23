let audio1;
let audio2;
let audio3;
let value = 0;

function setup() {
  createCanvas(400, 400);
  audio1 = createAudio('Song for Niyamgiri _ Kalahandi, Odisha.m4a');
  audio2 = createAudio('Grindmill Songs Project _ The farmer and rain.m4a');
  // audio2 = createAudio('Grindmill Songs Project _ The farmer and rain.m4a');
}

function draw() {
  background(220);
   fill(value);
  rect(25, 25, 50, 50);
}

function keyPressed(){
  if (key === 's') {
     audio1.play();
  } else if (key === 'a') {
    audio2.play()
  } else if (key === 'd'){
    ///more files here
  } else if (key === 'f'){
    ///more files here
  }
}