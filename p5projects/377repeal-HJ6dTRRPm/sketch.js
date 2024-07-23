function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(220);
	noStroke();
	fill(231, 0, 0);
	fill(255, 140, 0);
	for (let x = 30; x < 210; x += 30) {
		ellipse(x, 30, 20, 20);
	}
}