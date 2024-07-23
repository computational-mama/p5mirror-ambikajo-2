let array =["School","Bus","Market","Beach","Roadside","Funeral", "Park","Mosque","School Bus","Church","Van","Imambargah","Hospital","Gas Station","University","Shrine","Train Station","Train Station", "Hotel", "Hotel","Checkpost","11609"]



function setup() {
   createCanvas(400, 400);
}

function draw() {
  background(220);
  textAlign(CENTER)

 
    for(i=30;i<width-30;i=i+30){
       line(0,i,i,0)    
      line(i-30,height,width,i)   
  }
 
  push()
 rotate(-PI/4)
  for(j=0;j<array.length-1;j++){
    text(array[j],0,j*10)
  }  
  pop()
  
  push()
  translate(width/2,height/2)
  rotate(-PI/4)
  text(array[array.length-1],0,0)
  pop()
}