let arr = ["meilin", "ambika", "oshin", "saumya", "agat", "yugen"]
let w = 0;

function setup() {
  createCanvas(400, 400);


}

function draw() {
  background(220);
  text(arr[w], 100, 100)

}

function keyPressed() {
  if (w < arr.length - 1) {
    w++
  } else {
    w = 0
  }
}