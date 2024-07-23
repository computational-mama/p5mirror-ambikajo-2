let cw = 800
let cy = 800
let div = cw/100
function setup() {
  createCanvas(cw, cy,WEBGL);
  pg = createGraphics(cw/div,cy/div)
  pg.pixelDensity(4)
}

function draw() {
  background(220);
  pg.noStroke()
  noStroke()
  strip =12*div
  gap = width/strip
  for(i=0;i<strip;i++){
    if(i%2 ==0){
      pg.fill(0)
    } else {
    pg.fill(255)
    }
    pg.rect(i*gap,0,gap,height)
  }
  rotateY(frameCount/100)
  rotateX(frameCount/100)
texture(pg)
  torus(200,60)
}