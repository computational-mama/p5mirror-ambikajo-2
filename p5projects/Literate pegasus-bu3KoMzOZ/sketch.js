let arr = ["school","bus","market","beach","roadside","park","mosque","school bus","church","van","hospital","gas station","university", "shrine"]

let arrN = [25,65,265,204,177,199,123,140]
let x = 0
function setup() {
  createCanvas(800, 400);
  // console.log(arr.length)
// frameRate(5)
}

function draw() {
  background(220);

  for(i=0;i<arr.length;i++){
    
  text("It happened at the "+ arr[i],100,x+10)
  }
 
  for(j=0;j<arrN.length;j++){
    noFill()
    circle(j*100,arrN[j],50)
  }
  x++
}