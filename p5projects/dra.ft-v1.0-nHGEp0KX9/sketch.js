let collab = 100;
let experiment = 100;
let code = "poetry";
let poetry = "code";
let monospace;
// let i = -100;
function preload(){
  monospace = loadFont('IBMPlexMono-Italic.ttf')  
}
let  txt= "dra.ft explores emergent ideas of text and it's future."

function setup(){
  // createCanvas(820,360);
  createCanvas(500,500);
  // frameRate(3);
  noLoop()
  textFont(monospace);
  // print(txt.length)
}

function draw(){
  background(255);
  //  for(a=0;a<width;a+=30){
  // fill(0,0,238,100)
  //    noStroke()
  //    rect(random(10,width-10), random(10,height-10), random(50, 100), random(50,100))
  //  }
  textSize(45);
  fill(9,9,238)
  // draFT();
  // text("all "+code+" is " +poetry, 40, height/2)
  // text("dra.ft explores emergent ideas of text and it's future.", -350+i, i)
  
  text(txt, 50, 130,width-60,500-20)
 // i+=20;
//   for(j=0;j<width;j+=25){
//   print(j%3)
//     if(j%3==0){
//       x = 20
//       fill(255)
      
//     } else if(j%3==1) {
     
//       x=-15
      
//       fill(150)
//     } else {
//       x=25
//       fill(100)
//     }
//   text("dra.ft explores emergent ideas of text and it's future.", x, 10+j)
  // text("dra.ft explores emergent ideas of text and it's future.", 0, 10+j)
    
  // }
}

function draFT(){
  collab++;
  experiment++;
  [code, poetry] = [poetry, code];
  // console.log(collab, experiment, code, poetry)
}