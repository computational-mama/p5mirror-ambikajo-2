let img;

function preload(){
  img = loadImage("bottom.png")
}

function setup() {
  createCanvas(400, 400);
    // console.log(img)

}

function draw() {
  background(220);
  
  for(i=0;i<width;i++){
    for(j=0;j<height;j++){
     
      image(img,i*62.8,j*47.2,62.8,47.2)    
    }
  }

  // 
}