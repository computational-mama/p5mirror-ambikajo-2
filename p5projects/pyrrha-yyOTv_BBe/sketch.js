let myfont;
let imgbg;

function preload(){
	myfont = loadFont("Rajdhani-light.ttf")
	imgbg = loadImage("introbg.png")
}

function setup() {
	createCanvas(1280, 800,WEBGL);
	textFont(myfont)
	textSize(90)
	angleMode(RADIANS)
colorMode(HSB)
}

function draw() {
	background(250,10)
	// translate(-100,-400)
	image(imgbg,-width/2,-height/2)
	text("pyrrha",-70,-80)
	// let t = textWidth()
	// console.log(t)
	noStroke()
	pend(-115)
	pend(205)
	//chalkboard 
// console.log(deltaTime/50)

	fill(3,100,90)
}

function pend(x){

	
	
	push()
	this.x = x
	translate(x,0,0)
	rotateY(frameCount/50)
	ellipse(0, -100,30)
	pop()
}