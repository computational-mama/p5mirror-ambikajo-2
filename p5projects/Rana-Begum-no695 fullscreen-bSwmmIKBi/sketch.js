let colArrLeft = ['#ff6800','#aeff00','#ff0000','#ff6800']
let colArrRight = ['#0027ff','#000000','#007525','#0027ff']
function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
    cam = createCamera();
  // give it an orthographic projection
   cam.setPosition(0,-180, 300);
    cam.tilt(0.3);
    cam.pan(0.3);

}

function draw() {
  background(0);
  ortho()
  orbitControl()
  noStroke()
        rotateY(PI/6)

  // pointLight(255,255,255,0,mouseX,mouseY/10)
  for(i=0;i<4;i++){
    for(j=0;j<4;j++){
      push()
      col = color(colArrLeft[i])
      col.setAlpha(160)
      fill(col) 
      translate(80*i-150,0,80*j)
      triangle(0,0,0,-50,80,0)
      pop()
      push()
      col = color(colArrRight[i])
      col.setAlpha(160)
      fill(col) 
      translate(80*i-150,0,80*j-40)
      triangle(80,0,80,-50,0,0)
      pop()
    }
  }
  push()
    rotateX(PI/2)
    translate(0,100,0)
    fill(140)
    plane(400)
  pop()
}