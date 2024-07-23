let pap;
let cam1;
let grd; 
function preload() {
  pap = loadImage("paper.png")
}

function setup() {
  createCanvas(400, 400, WEBGL);
  // ortho()
  // let eyeZ = ((height/2.0) / tan(60.0/360.0));
  // perspective(PI, width/height,120,300) //where eyeZ is equal to ((height/2.0) / tan(PI60.0/360.0))
  cam1 = createCamera()
  // background(220)
  grd = createGraphics(40,30)
  grd.pixelDensity(10)
  
}

function draw() {

  background(0);
  grd.background(255)
  loc = 2*noise(2)
  for(x=0;x<grd.width-2;x+=4){
    grd.strokeWeight(0.1*loc)
      grd.line(x,0,x,grd.height) 
      grd.line(0,x,grd.width,x) 
  
  }
  
  
  
  // cam1.lookAt(0, 0, 0);
  // cam1.setPosition( 100, sin(frameCount / 60) * 200, sin(frameCount / 60) * 200);
  ambientLight(255)
  // pointLight(255,255,255,40,30,100)
  orbitControl()
  noStroke()
  texture(grd)

  for (i = 0; i < 3; i++) {
    translate(random(65,70),0, 0)
    box(60)

    // rect(0,random(2), 80, 60)
  }
}