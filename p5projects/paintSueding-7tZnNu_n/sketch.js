let emoarr = ["😀", "😇", "🍉", "🧄", "📺", "💎", "📀"]
let index = 0;
let brushSize = 0;
let slider;

function setup() {
  createCanvas(400, 400);
  background(230, 50, 140)
  slider = createSlider(15, 100, 35, 1)
}

function draw() {
  //background(220);
  let brushSize = slider.value()
  textSize(brushSize)
  text(emoarr[index], mouseX, mouseY);
  //print(emoarr.length)
  //text(emoarr[index], 50, 50);

  //console.log(brushSize)
}

function keyPressed() {
  
  if(keyCode === "UP_ARROW"){
    clear();
    background(230, 50, 140)
    print("canvas cleared")
  }
  // && keyCode === RIGHT_ARROW
  if (index <= emoarr.length && keyCode === RIGHT_ARROW) {
    index++
    if (index > emoarr.length-1) {
      index = 0
    } 
  } else if (index >= 1 && keyCode === LEFT_ARROW) {
    index--
  
  } 
  
  
  print(index)
  //return false;
}

function mousePressed() {
  save('myCanvas.jpg');
  clear();
  background(230, 50, 140)
}