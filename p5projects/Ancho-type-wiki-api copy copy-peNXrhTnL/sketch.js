let an_font;


function preload(){

  an_font = loadFont("fonts/Ancho-Regular.ttf")
}
function setup() {
  createCanvas(400, 400);
  noLoop()
  textFont(an_font)
  textAlign(CENTER)
  textSize(15)
}

function draw() {
  background(177,156,217);
// text("late mama", 10,100)
  // createP() 
	// points = an_font.textToPoints(
	// "Hello there", 0, 0, 72,
	// {sampleFactor: 0.9}
	// );
	// console.log(points);
}
