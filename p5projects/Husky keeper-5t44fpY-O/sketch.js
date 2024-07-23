let rhym 

function setup() {
  createCanvas(400, 400);
  textSize(30)
  rhym = RiTa.rhymes("code")
  rhym_random = random(rhym)
}

function draw() {
  background(220);
  text("Waiting on the code",10,100)
  text("Onwards to our "+rhym_random,10,150)
  
}