let draftFont;
let myFont2;
let myFont3;
let button;
let evName;
let img;

function preload(){
  draftFont = loadFont('IBMPlexMono-BoldItalic.ttf')
  eventFont = loadFont('IBMPlexMono-Medium.ttf')
  myFont3 = loadFont('IBMPlexSans-Bold.ttf')
  img = loadImage('copojam-logo.png')
}

function setup() {
  //this canvas size is for hasgeek banner
  createCanvas(1200, 675);
  noLoop();
  // button = createButton('save');
  // button.mousePressed(saveImg);
}

function draw() {
  background(255);
 
  topBox()
  lyn1()
 eventLogoBox()
  draft()
  eventName()
  eventDate()
  dobeAG()
  push()
  noStroke()
  image(img, 50, -10, img.width/1.2, img.height/1.2)
  
  pop()
  
}
function lyn1(){
  stroke(0)
  strokeWeight(1.5)
  line(400, 0, 400, height)
  line(width-width/2, 0, width-width/2, height)
}

function eventLogoBox(){
  push()
  fill(0,0,255)
  noStroke()
  rect(0,0,400,400)
  pop()
}
function lyn2(){
  line()
}

function topBox(){
  push() 
  fill(0,0,255)
  noStroke()
  rect(0,0,1200,250)
  pop()
  

}
function draft(){
  push()
  textSize(70);
  noStroke()
  textH = textDescent()*5
  textFont(draftFont);
  let draft = "dra.ft";
  textW = textWidth(draft)
  fill(0)
  rect(width-width/2, 130, textW+100, textH*1.5)
  fill(255)
  text(draft,width-width/2+50,210);
  pop()
}

function eventName(){
  textSize(50)
  textFont(eventFont)
  push()
  noStroke()
  fill(0)
 evName = "mee.tup"
  fill(0)
  rect(0, 400, 400, 100)
  fill(255)
  textAlign(CENTER)
  text(evName, 200, 460)
  pop()
}

function eventDate(){
  noStroke()
  textSize(60)
  textFont(myFont3)
  fill(0)
  evDate = "23/05/20"
  evDateSp=split(evDate, '')
  // console.log(evDateSp)
  // evDateArr = ["2","3","/","0","5","/","2","0"]
  evTime = "6pm"
  evTimeSp=split(evTime, '')
  // console.log(evTimeSp)
  // select('canvas').elt.style.letterSpacing = "30px";
  for(i=0;i<evDateSp.length;i++){
  text(evDateSp[i], (width-width/2-4)+i*25, textH+210)   
  }
    for(j=0;j<evTimeSp.length;j++){
  text(evTimeSp[j], (width-width/2-4)+j*25, textH+270)   
  }
}

function dobeAG(){
  textSize(30)
  textFont(myFont3)
  dob = "dobedobedo.be"
  ag = "ajaibghar.com"
  fill(0,0,255)
  rect(width-width/2,500, textWidth(ag)+70,60)
  fill(255)
  text(ag, width-width/2+20, 540)
    fill(0,0,255)
  rect(width-width/2,570, textWidth(ag)+70,60)
  fill(255)
  text(dob, width-width/2+20, 610)
}

// function evLogo(){
//   image(logoimg, 100,100)
// }