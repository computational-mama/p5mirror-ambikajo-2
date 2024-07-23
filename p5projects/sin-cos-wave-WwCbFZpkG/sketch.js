// refer the maths here https://www.mathsisfun.com/sine-cosine-tangent.html
//set a global variable called "angle"
let angle = 0;

//setup your canvas
function setup() {
  createCanvas(600, 400);
}


function draw() {
//set a gray backgroun  
  background(220);

//set a variable for offset on the y-axis
  let offsetY = 0;
  
//create a for loop for the x-axis so that there are a number of circles spaced at 24 pixel part
  
  for (x = 0; x < width; x += 24) {
    a = angle + offsetY;
//map the value of sin(a) which is -1,1 from 0 to height of canvas.
    console.log(sin(a))
    y = map(sin(a), -1, 1, 0, height);
    ellipse(x, y, 10, 10)
    offsetY += 0.2;
  }
  angle += 0.008;

}