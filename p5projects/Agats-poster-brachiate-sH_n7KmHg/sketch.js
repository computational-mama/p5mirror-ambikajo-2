let s1 = "Swinging On The Tree Of Life";
let s2 = "Forking The Narrative Arc";
let s3 = "Brachiate On The Phylogenetic Tree";
let iterations = 0;

function setup(){ 
  createCanvas(400,400); 
  //noLoop(); 
  frameRate(1)
} 

function draw(){ 
  background(50,50,50); 
  iterations++
  if (iterations < 2) {
    title1()
  } else if (iterations < 4) {
    title4()
  } else if (iterations < 6) {
    title2()
  } else if (iterations < 8) {
    title4()
  } else if (iterations < 10) {
    title3()
  } else if (iterations < 12) {
    title4()
  } else if (iterations < 14) {
    iterations = 0;
  }
  stroke(255)
  strokeCap(SQUARE)
  strokeWeight(7,10); 
  translate(width/2,height-20); 
  branch(3); 

} 

function title1(){
  stroke(0,0)
  fill(255)
  textFont('Roboto-Black')
  textSize(25)
  textWidth(350)
  text(s1,20,20,200,300)
}

function title2(){
  stroke(0,0)
  fill(255)
  textFont('Roboto-Black')
  textSize(25)
  textWidth(350)
  text(s2,20,20,200,300)
}

function title3(){
  stroke(0,0)
  fill(255,50)
  textFont('Roboto-Black')
  textSize(25)
  textWidth(350)
  text(s3,20,20,200,300)
}

function title4(){
  stroke(0,0)
  fill(255)
  textFont('Roboto-Black')
  textSize(25)
  textWidth(350)
  text("/",20,20,200,300)
}

function branch(depth){ 
  if (depth < 8) { 
    stroke(255)
    line(0,0,0,-height/10); // draw a line going up
    let n = noise(0,500)*100
    stroke(218, 191, 222)
    ellipse(n,n*4,random(2,7))
    { 
      translate(0,-height/10); // move the space upwards
      rotate(random(-0.05,0.05));  // random wiggle

      if (random(1.0) < 0.6){ // branching   
        rotate(0.2); // rotate to the right
        scale(0.8); // scale down
        
        push(); // now save the transform state
        branch(depth + 1); // start a new branch!
        pop(); // go back to saved state
        
        rotate(-0.6); // rotate back to the left 
        
        push(); // save state
        branch(depth + 1);   // start a second new branch 
        pop(); // back to saved state        
     } 
      else { // no branch - continue at the same depth  
        branch(depth);
      } 
    } 
  }
} 



