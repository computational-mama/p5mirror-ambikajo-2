let ey;
let x = 10;

function setup() {
  createCanvas(600, 600, WEBGL);
  ey = createGraphics(600, 600)
  ey.pixelDensity(4)
  // frameRate(10)
  // ey.colorMode(HSB)
  // textureWrap(MIRROR)
}

function draw() {
  background(220);
  orbitControl()
  ey.background(200)
  ey.fill(100, 30, 100)
  ey.noStroke()
  for (i = 0; i < 30; i++) {
    for (j = 0; j < 30; j++) {
      ey.circle(i * 15, j * 15, x)


    //   if (x < 30) {
    //     x += 1
    //   } else {
    //     x = 2
    //   }
    }
  }
  // image(ey, 0, 0)
  // scale(width / 2);
  texture(ey)
  noStroke()
  rotateX(PI / 4)
  rotateY(PI / 4)
  rotateZ(frameCount / 100)
  sphere(100)
}