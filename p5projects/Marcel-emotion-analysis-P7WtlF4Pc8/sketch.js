let vidArr = []
let w = ["applause", "awwwww","oooooh", "quiet please"]
let vid;
let a;

function preload() {
  for (i = 0; i < 4; i++) {
    vidArr[i] = createVideo("video" + i + ".mp4", vidLoad)

  }
}

function setup() {
  noCanvas()
  // vid=createDiv()
  a = createDiv("")

}

function draw() {}

function vidLoad() {
  for (i = 0; i < vidArr.length; i++) {
    vidArr[i].hide()
  }
  playVid()
}

function keyPressed() {
  //a
  for (i = 0; i < vidArr.length; i++) {
    vidArr[i].hide()

    if (keyCode === 65) {
      // vidArr[1].hide()
      vidArr[0].show()
      vidArr[0].loop()
      // vidArr[0].size(400,400)
      a.html(w[0])
      console.log("a types")
    }
    if (keyCode === 83) {
      vidArr[0].hide()
      vidArr[1].show()
      vidArr[1].loop()
      // vidArr[1].size(400,400)
      a.html(w[1])
      console.log("s types")
    }
    if (keyCode === 68) {
      vidArr[2].show()
      vidArr[2].loop()
      // vidArr[2].size(100,100)
      a.html(w[2])
      console.log("d types")
    }
    if (keyCode === 70) {
      vidArr[3].show()
      vidArr[3].loop()
      a.html(w[3])
      console.log("f types")
    }
  }
  return false; // prevent default
}
