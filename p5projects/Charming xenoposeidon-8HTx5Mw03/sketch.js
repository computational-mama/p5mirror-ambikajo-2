let mic, fft;

function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
  noFill();
	colorMode(HSB)
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT(0.8,16);
  fft.setInput(mic);
}

function draw() {
  background(20,100,100,0.4);

  let spectrum = fft.analyze();
  stroke(0,0,50,0.4)
  strokeWeight(0.2)
  rotateY(radians(frameCount*0.2))
  fill(spectrum[0],100,100)
  //noStroke()
  
  torus(100,50,16,3)

}