let table;
let part1;
let part2;
let p = 0;
//var bpm = 240;
let blink = false;
let counter = 0;
let counter2 = 0;
let prevTime;
let prevTime2;
let interval = 1200
let interval2 = 1400

function preload() {
  table = loadTable("talking.csv", "csv", "header");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("IBM Plex Mono");
  prevTime = millis()
  prevTime2 = millis()
}

function draw() {
  background(0);
  textSize(300);
  select("canvas").elt.style.letterSpacing = "-20px";
  fill(255);
  textAlign(LEFT, BOTTOM);
  textLeading(10);

  if (millis() > prevTime + interval){
    // blink = !blink
    prevTime = millis()
     counter++
  }
  
    if (millis() > prevTime2 + interval2){
    // blink = !blink
      prevTime2 = millis()
     counter2++
  }

  if(counter < table.getRowCount()){
   appearOnScreen(counter,0,height/2 - 50)
  }
  
  if(counter2 < table.getRowCount()) {
    appearOnScreen(counter2,1,height - 50)
  }
}

function appearOnScreen(row,col,y) { 
  tex = table.getString(row, col);
  text(tex, 10, y);
}