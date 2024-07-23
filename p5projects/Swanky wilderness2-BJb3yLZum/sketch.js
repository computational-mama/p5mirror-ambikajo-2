let a;

function setup() {
  createCanvas(400, 400);
  background(255);
  a = 0;
}

function draw() {
  //background(220);
  //fill(240, 200, 190);
  //rect(10, 10, width - 40);
  translate(width / 2, height / 2);
  let r = 200;
  //added noise to simple sin and cos for circle
  let x = r * cos(a + noise(a));
  let y = r * sin(a);
  //print(y);
  strokeWeight(0.3);
  
  //noFill();
  //fill(240, 200, 190);
  let sz = map(y, -200, 200, 10, 100);
  stroke(190);
  ellipse(x, y, sz);
  ellipse(y, x*noise(a), sz/2);
  ellipse(y*noise(a), x, x/2);
  //fill(100, 100+x,10);
  //ellipse(x*noise(x), y+noise(a), 10);
  a = a + 0.01;

}