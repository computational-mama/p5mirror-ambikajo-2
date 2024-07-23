function setup() {
  createCanvas(400, 400);
  textFont('Modak')
}

function draw() {
  background(254);
  textSize(70)
  let c = textWidth()
  console.log(c)
  text("क्या",c/2,height/2)
}