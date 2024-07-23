let txtfrm
let btn
let foo
let wrt 
function setup() {
  createCanvas(100, 100);
  foo = new p5.Speech(); // speech synthesis object
  txtfrm = createInput('type here')
  btn = createButton("go")

  btn.mousePressed(workplease)
  // console.log(workplease)
}
function workplease() {
  wrt = txtfrm.value()
  foo.speak(wrt)
  createP(wrt)
}
function draw() {
  background(220);
  text(wrt, 10,10)
}

