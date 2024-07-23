function setup() {
  createCanvas(500, 500);
  mic = new p5.AudioIn(); 
  mic.start(); 
}

function draw() {
  background(0);
  var vol = mic.getLevel(); 
  console.log(vol)
  ellipse(100,100, vol * 200, vol * 200);

}