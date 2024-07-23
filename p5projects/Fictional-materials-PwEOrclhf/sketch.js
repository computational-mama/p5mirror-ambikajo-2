let an_font;
let isms;
let fictm;

function preload(){
  isms = loadJSON("https://raw.githubusercontent.com/dariusk/corpora/master/data/art/isms.json")
  fictm = loadJSON("fictm.json")
  an_font = loadFont("fonts/Ancho-Regular.ttf")
  an_font_thin = loadFont("fonts/Ancho-Thin.ttf")
}
function setup() {
  createCanvas(400, 400);
  noLoop()
  textFont(an_font)
  textAlign(CENTER)
  textSize(25)
  createP("Click or use the 'up arrow' for more")
  // createP("Click for more")
}

function draw() {
  background(177,156,217);
  // createP("Click for more")
  rand_bg()
  let i = round(random(0,isms.isms.length-1))
  let arr_ism = isms.isms[i]
  
  let j = fictm.fictionalmaterials
  let q = round(random(0,j.length-1))
  let arr_fictm = j[q]
  
  textFont(an_font_thin)
  text("They used ", 200, 120)
  textFont(an_font)
  text(arr_fictm,200,160)
  textFont(an_font_thin)
  text("to make", 200,200)
  textFont(an_font)
  text(arr_ism + ".",200,240)
  

}

function rand_bg(){
  
  noStroke()
  for(i=0;i<8;i++){
  let r = random(0,width)
  ellipse(r,100*i,r/2,r/2)
  }
}

function mousePressed(){

  redraw()
  
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    redraw()
  }
} 