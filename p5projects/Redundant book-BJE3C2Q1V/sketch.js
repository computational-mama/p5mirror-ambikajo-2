let font;
let points;

function preload() {
	font = loadFont("Sniglet Regular.otf")
}
function setup() {
  createCanvas(400, 400);
  points = font.textToPoints(
    "Hello there", 0, 0, 72,
    {sampleFactor: 0.9}
	);
  console.log(points);
  
}

function draw() {
  background(220);
}