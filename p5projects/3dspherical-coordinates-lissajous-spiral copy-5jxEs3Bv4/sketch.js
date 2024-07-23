// let theta = 30;
// let phi = 30;

r = 300;
function setup() {
  createCanvas(800 , 800, WEBGL);
  angleMode(DEGREES);
  colorMode(HSB)
}

  let angleA = 0
function draw() {
  orbitControl();
  background(0,0,100);
  strokeWeight(4)
  // fill(255,0,0,100)
  rotateY(frameCount/10)
  noFill()
  twist = 100*sin(angleA)
  stroke(twist*30, 100,100)
  // for (phi = 0; phi < 180; phi += 10) {
    beginShape();
  for (theta = 0; theta < 360; theta+=0.1) {
   
    y = r * cos(theta*twist/6) 
    z = r * sin(theta*twist/6) * sin(theta*twist);
    x = r * sin(theta*twist/6) * cos(theta*twist);
    vertex(x,y,z)
  // }
  }
  angleA+=0.2
    endShape();

}
