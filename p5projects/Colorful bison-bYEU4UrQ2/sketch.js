let cnv
let img 
function preload(){
  img = loadImage("bird.jpg")
}
function setup() {
  createCanvas(400, 400, WEBGL);
  cnv = createGraphics(1024, 1024)
  textureWrap(CLAMP)
}

function draw() {

  background(20, 190, 190)
  cnv.noStroke()
  for (a = 0; a < width; a += 30) {
    for (b = 0; b < height; b += 30) {
      cnv.fill(a, b, 190)
      cnv.rect(a + frameCount / 10, b, 40, 5)

    }
  }

  push()
  texture(img)
  noStroke()
  // rotateX(PI / 2 + frameCount / 100)
  rotateY(100 * sin(PI / 8))
  box(128,300,100)
  pop()

}