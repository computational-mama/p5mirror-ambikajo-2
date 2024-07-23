let mic, fft
let x = 0;
let pg;
let pg2;
let pg3;
let pg4;


function setup() {
	createCanvas(windowWidth, windowHeight,WEBGL)
	pg = createGraphics(50,50)
		pg2 = createGraphics(50,50)
pg3 = createGraphics(50,50)
pg4 = createGraphics(50,50)

 mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT(0.8, 16);
  fft.setInput(mic);
  pg.colorMode(HSB)
pg2.colorMode(HSB)
pg3.colorMode(HSB)
pg4.colorMode(HSB)
}

function draw() {
	let spectrum = fft.analyze();
	
  background(200,100,100)
	pg.fill(spectrum[15],100,100)
	pg.noStroke()
	pg.rect(x,0,10,height)
	
	pg2.fill(spectrum[7],100,100)
	pg2.noStroke()
	pg2.rect(x,0,10,height)
	
	pg3.fill(spectrum[4],100,100)
	pg3.noStroke()
	pg3.rect(x,0,10,height)
	
	pg4.fill(spectrum[0],100,100)
	pg4.noStroke()
	pg4.rect(x,0,10,height)
	
	if(x<pg.width){
	x++
	} else {
		x=0
	}
	
	push()
	texture(pg)
	translate(-120,-90,0)
	rotateY(radians(frameCount))
	box(80)
	pop()
	
	push()
	texture(pg2)
	translate(120,-90,0)
	rotateY(radians(-frameCount))
	sphere(60)
	pop()
	
	push()
	texture(pg3)
	translate(-120,90,0)
	rotateY(radians(-frameCount))
	torus(50,22,16,3)
	pop()
	
	push()
	texture(pg4)
	translate(120,90,0)
	rotateZ(radians(frameCount))
	cone(50,82,4,8)
	pop()
}