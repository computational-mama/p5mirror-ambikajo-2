let mic, fft;

function setup() {
  createCanvas(710, 400);
  noFill();

  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT(0.8, 16);
  fft.setInput(mic);
}

function draw() {
  background(200);

  let spectrum = fft.analyze();

  beginShape();
  for (i = 0; i < spectrum.length; i++) {
    vertex(i*40, map(spectrum[i], 0, 255, height, 0));
  }
  endShape();
}