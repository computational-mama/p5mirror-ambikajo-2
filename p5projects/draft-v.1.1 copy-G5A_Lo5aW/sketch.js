let collab = 100;
let experiment = 100;
let code = "poetry";
let poetry = "code";
let monospace;

function preload() {
  monospace = loadFont('IBMPlexMono-Regular.ttf')
}

function setup() {
  createCanvas(400, 400);
  frameRate(3)
  textFont(monospace)
}

function draw() {
  background(250);
  draFT()
  textSize(30)
  text("all " + code + " is " + poetry, 40, height / 2);
}

function draFT() {
  collab++;
  experiment++;
  [code, poetry] = [poetry, code];
  console.log(collab, experiment, code, poetry)

}