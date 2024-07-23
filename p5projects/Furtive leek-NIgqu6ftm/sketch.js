let colArr = ['#0000ff','#ff0000'];

function setup() {
  createCanvas(400, 400);
  console.log(colArr)
}

function draw() {
  background(220);
  noStroke()
  // for(i=0;i<colArr.length; i++){
  //   fill(colArr[i])
  //   circle(40+i*40,100,20)
  // } 
  
  for(i=100;i>=10; i--){
    if(i%2==0){
      fill(255,0,0)
    } else {
      fill(0,0,255)
    }
    circle(100,100,20*i)
  }
}