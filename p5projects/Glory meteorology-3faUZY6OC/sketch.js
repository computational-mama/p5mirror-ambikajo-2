let vid;
let x = 0;
let y = 0;
let vArr = [];

function setup() {
  createCanvas(600, 420);
  vid = createVideo("potus.mp4")
  // vid.hide()

  vid.volume(0)
  vid.mousePressed(takeSnap)
  vid.loop()
  background(220);
}

function draw() {
  let w = 100
  let h = 70
  let x = 0
  let y = 0
  for (i = 0; i < vArr.length; i++) {
    index = (i + frameCount) % vArr.length
      image(vArr[index], x, y, w, h)
    x += w
    if (x > width - w) {
      x = 0
      y += h
    } else if (y > height - h) {
      y = 0
    }
  }
}

function takeSnap() {
  vArr.push(vid.get())
  // console.log(vArr)

}