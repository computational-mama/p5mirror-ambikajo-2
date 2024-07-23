// let mus
// function preload(){
//   mus = createAudio
// }

function setup() {
  createCanvas(800, 800);


  textAlign(CENTER)
  textSize(56)
  rectMode(CENTER)

}

function draw() {
  background(255);
  if (second() % 2 == 0) {
    fill(200, 10, 10, 20)
    push()
    noFill()

    strokeWeight(8)
    strokeCap(ROUND);
    strokeJoin(ROUND);
    stroke(10, 190, 200)
    rect(width / 2, height / 2 + 40, 700, 180)
    stroke(10, 190, 200, 40)
    rect(width / 2+5, height / 2 + 50, 700, 180)

    pop()
  } else {
    fill(200, 10, 10)
    push()
    fill(200)
    textFont('Noto Sans HK')
    text("同朋友編程", width / 2 + 2, 440)
    textFont('Space Mono')
    text("CODING WITH FRIENDS", width / 2 + 2, 510)
    pop()

    push()
    noFill()
    stroke(10, 190, 200, 10)
    strokeWeight(8)
    strokeCap(ROUND);
    strokeJoin(ROUND);
    rect(width / 2, height / 2 + 40, 700, 180)
    pop()
  }
  textFont('Noto Sans HK')
  text("同朋友編程", width / 2, 430)
  textFont('Space Mono')
  text("CODING WITH FRIENDS", width / 2, 500)
}

function mousePressed() {
  ele = createAudio('codingchinese.ogg');
  ele.loop()
  ele.volume(0.3)

  ele2 = createAudio('codingeng.ogg');
  ele2.loop()
  ele2.volume(0.1)
}