function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(255);
	noStroke();
	fill(231, 0, 0);
	fill(255, 140, 0);

	for (let x = 30; x < 210; x += 30) {
		ellipse(x, 30, 20, 20);
	}
	//r=cos(k*angle)
	beginShape(POINTS)
	for (let a = 0; a < TWO_PI*4; a += 0.01) {
		let r = cos(58 * a);
		let x = r*cos(a) * 200;
		let y = r*sin(a) * 200;
		vertex(x,y);
	endShape();
		
	}