let audio1;
let audio2;
let audio3;
let value = 0;

function setup() {
  createCanvas(400, 400);
  audio1 = createAudio('piano_middle_C.mp3');
  audio2 = createAudio('piano_D.mp3');
  audio3 = createAudio('piano_E.mp3');
}

function draw() {
  background(220);
}

function keyPressed(){
  if (key === 'a') {
     audio1.play();
  } else if (key === 's') {
    audio2.play()
  } else if (key === 'd'){
    ///more files here
  } else if (key === 'f'){
    ///more files here
  }

  console.log(`${key}`)
  text(`${key}`,200,200)
}