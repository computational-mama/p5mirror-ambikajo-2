let angle=0;

function setup() {
  createCanvas(600, 400);
   noLoop()
}

function draw() {
  let xoff=0
  let yoff=0
  background(220);
  let offsetY=0
  for(x=0;x<width;x=x+2){
    a=angle+offsetY;
    x1=x*5;
    y=map(cos(a),1,-1,50,250);
    fill(153,76,0);
   circle(x1,y,10);    
     y=map(sin(a),-1,1,175,300);
    fill(175,80,0);
    x1=x*4;
    circle(x1,y,9); 
     y=map(cos(a),-1,1,100,250);
    fill(225,90,0);
    x1=x*5;
   circle(x1,y,8);
     y=map(sin(a),-1,1,125,300);
     fill(175,80,0);
   x1=x*6;
    circle(x1,y,9);
     y=map(cos(a),1,-1,150,250);
    fill(153,76,0);
   x1=x*7;
   circle(x1,y,6);
    y=map(cos(a),1,-1,200,300);
      fill(225,90,0);
   x1=x*9;
   circle(x1,y,5);
    
    offsetY+=0.2;
  }
  angle+=0.01
  

}