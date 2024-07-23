function setup() {
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES)
  // ortho() 
}

function draw() {
  background(220);
  orbitControl()
  rotateY(35)
  stroke(200)
  strokeWeight(0.5)
  rotateZ(-40)
  for (i = 0; i < 5; i++) {
    // fill(i+frameCount*0.05,100)
    push()
    // fill(40)
    //box on Y axis
    translate(0, i * 40, 0)
    box(40)
    pop()
    
    push()
    //box on Z axis
    translate(0, 0, i * 40)

    box(40)

    pop()
    push()
    //box on X axis
    translate(i*40, 40*5,0)
    box(40)
    pop()
  }
}