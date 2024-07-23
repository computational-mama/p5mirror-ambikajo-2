let mic

function setup() {
  createCanvas(400, 400,WEBGL);
    // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
  fft = new p5.FFT(1,16);
  fft.setInput(mic)
  fft.smooth(1)
  colorMode(HSB)
  angleMode(DEGREES)
}

function draw() {
  background(220,10);
  // let vol = mic.getLevel();
  // // console.log(vol)
  // let h = map(vol, 0, 1, 40, 500);
  // box(h)

    let waveform = fft.waveform();
  // console.log(waveform)
  noFill();
  stroke(20);
    let x = map( waveform[0], -1, 1, 10, width);
    let y = map( waveform[0], -1, 1, 10, height);
  // fill(x,100,100)
    rotateY(frameCount/10)
    box(y);
  
}