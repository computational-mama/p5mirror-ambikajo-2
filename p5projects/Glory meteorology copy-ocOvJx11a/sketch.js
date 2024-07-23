let vid;
// let x = 0;
// let y = 0;

function setup() {
  createCanvas(600, 420);
  vid = createVideo("potus.mp4")
  // vid.hide()
  pixelDensity(1)

  vid.volume(0)
  vid.mousePressed(takeSnap)
  vid.loop()
  // background(220);
}

function draw() {
  let w = 100
  let h = 70
  // let x = 0
  // let y = 0
  noStroke()
  background(50,30,90);
  fill(255);
  vid.loadPixels();
  for (var y = 0; y < height; y += 10) {
    for (var x = 0; x < width; x += 5) {
      var offset = ((y * width) + x) * 4;
      rect(x, y, 10 * (vid.pixels[offset + 1] / 255),
        10 * (vid.pixels[offset + 1] / 255));
      // console.log(vid.pixels[offset + 1] / 255)
    }
  }
}

function takeSnap() {
  vArr.push(vid.get())
  // console.log(vArr)

}