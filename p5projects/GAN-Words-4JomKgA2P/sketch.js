let symp;
let counter = 0

function preload() {
  symp = loadJSON("symptoms.json")
}

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER)
  textWidth(200)
  textSize(32)
//   for (i = 0; i < symp.symptoms.length; i++) {
  
//     print(symp.symptoms[0].length)
//   }
}

function draw() {
  background(255);
  text(symp.symptoms[counter], width / 2, height / 2)
}

function mousePressed() {
  counter++

  
  
  // saveCanvas(symp.symptoms[counter], 'jpg');
// }
}

function touchEnded() {

}