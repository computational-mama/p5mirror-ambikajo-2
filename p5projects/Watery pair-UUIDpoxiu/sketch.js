let arr = []
let d
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  // for (x= 0;x<arr.length;x++){
  //   circle(arr[x],200,50)
  // }
  
  circle(200,100,100)
}

function mousePressed(){
  d = mouseX
  // console.log(d)
  arr.push(random(1,2))
 
 
}

function keyPressed(){
   console.log("array length is " + arr.length)
   console.log(arr)
}