let mic, fft;
let x = 0 
let pg;
let libs = ['https://cdn.jsdelivr.net/npm/opentype.js@latest/dist/opentype.min.js']
let myfont
let fontPath = 'includes/demos-data/fonts/RobotoMono-Regular.otf'

function preload(){
	myfont = loadFont(fontPath)
}
function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
  pg = createGraphics(200,200)
  noFill();
	colorMode(HSB)
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT(0.8,16);
  fft.setInput(mic);
  pg.angleMode(radians)
  font(myfont)
  textSize(80)
}

function draw() {
  background(20,100,100);
  let spectrum = fft.analyze();
  pg.noStroke()
  //stroke(0,0,50,0.4)
  //strokeWeight(0.2)
  //rotateY(radians(frameCount*0.2))
  pg.fill(spectrum[2],100,100)
  text(spectrum[2],0,0)
  pg.rect(x,0,10,400)
  if(x<width){
	x+=0.2
  } else 
  {
  	x=0
  }
  //noStroke()
  //let x = map(spectrum[0],0,255,6,23)
  texture(pg)
  //torus(100,50,9,16)
  box(400)

}

