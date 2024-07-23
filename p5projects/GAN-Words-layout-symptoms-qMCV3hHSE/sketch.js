let symp;
let counter = 0;
let myFont;
let btn;

function preload() {
  symp = loadJSON("symptoms.json")
  myFont = loadFont("SpaceMono-Bold.ttf")
}

function setup() {
  createCanvas(400, 400);

  // pixelDensity(3.0);
  textAlign(CENTER)
  textWidth(200)
  textSize(32)
  btn = createButton('diagnose me')
  btn.mousePressed(dl)
  frameRate(5)
}

function draw() {
  background(150, 120, 190);
  fill(255)
  textFont(myFont)
  if (counter < symp.symptoms.length) {
    statement()
    counter++
  } else {
    counter = 0
  }
}

function statement() {
  let c = symp.symptoms[counter]
  let regexp = " "
  let res = splitTokens(c, regexp);
  for (i = 0; i < res.length; i++) {
    if (res.length >= 2) {
      // print(res)
      text(res[i], width / 2, (height/2-20)+i*40)

    } else {
      text(symp.symptoms[counter], width / 2, height / 2)
    }
  }
}

function dl() {
  // counter--
  saveCanvas('You are afflicted with', 'jpg');
}

