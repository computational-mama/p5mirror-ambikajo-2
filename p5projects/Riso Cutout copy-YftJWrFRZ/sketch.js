// convert a color image into a cyan and magenta print
let img;

function preload() {
  img = loadImage('cat.jpg')
}

function setup(){
  createCanvas(500, 500);

  let blue = new Riso("blue");
  let red = new Riso("red");

  let justCyan = extractCMYKChannel(img, "cyan"); //extract cyan from img
  let justMagenta = extractCMYKChannel(img, "magenta"); //extract magenta from img

  blue.image(justCyan, 0, 0); //draw justCyan to blue layer
  red.image(justMagenta, 0, 0); //draw justMagenta to red layer

  drawRiso();
}