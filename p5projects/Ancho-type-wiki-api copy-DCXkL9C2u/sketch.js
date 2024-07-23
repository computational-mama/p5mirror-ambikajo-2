let an_font;
let isms;
let fict_mat;

function preload(){
  isms = loadJSON("https://raw.githubusercontent.com/dariusk/corpora/master/data/art/isms.json")
  fict_mat = loadJSON("fictm.json")
  an_font = loadFont("fonts/Ancho-Regular.ttf")
}
function setup() {
  createCanvas(400, 400);
  noLoop()
  textFont(an_font)
  textAlign(CENTER)
  textSize(15)
}

function draw() {
  background(177,156,217);
  let i = round(random(0,isms.isms.length-1))
  let arr_ism = isms.isms[i]
  let j = fict_mat.fictionalmaterials
  console.log(j.length)
  // let pho = RiTa.getPhonemes(arr)
  print(arr_ism)
  // vtxt = 
  text(arr_ism,200,200)
  // createP() 
  points = an_font.textToPoints(
    "Hello there", 0, 0, 72,
    {sampleFactor: 0.9}
	);
  console.log(points);
}

function mousePressed(){
  redraw() 
}