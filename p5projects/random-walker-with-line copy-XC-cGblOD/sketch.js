let x = 50;
let y = 50;
let a = 0;
let x1;
let y1;
let x2;
let y2;

function setup() {
  createCanvas(800, 400);
  background(61);
}

function draw() {
  translate(width / 2, height / 2)
  walk();
  show();
}

function walk() {

 // x++
  //let xmod = x % 40
  let r = 50
  
  

     x1 = (r * cos(a))
    y1 = abs(r * sin(a))
    x2 = (10 * cos(a))
    y2 = abs(10 * sin(a)) 
  
  a += PI/36
  console.log(x1)
  x = constrain(x, -width, width - 1);
  y = constrain(y, 0, height - 1);

}

function show() {

  point(x1,y1)
  line(x1, y1, x2, y2)
  // line(x,y,x,y+30)
  noFill()
}