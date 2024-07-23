let colArr = ['#0000ff','#ffff00','#aa00ff','#ff0033','#00ddff'];
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for(i=0;i<10;i++){
    if(i<colArr.length){
      
      fill(colArr[i])
    } else {
      fill(200)
    }
    circle(i*20,100,10)
  }
}