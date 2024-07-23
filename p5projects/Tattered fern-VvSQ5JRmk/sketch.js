function setup() {
  createCanvas(400, 400);
  var foo = new p5.Speech(); // speech synthesis object

foo.speak('hi there'); // say something
}

function draw() {
  background(220);
}

function doList()
	{
		foo.listVoices(); // debug printer for voice options
	}

