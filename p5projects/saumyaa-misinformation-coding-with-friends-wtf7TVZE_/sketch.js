let table;
let small;
let medium;
let large;

function preload() {
  table = loadTable("saumyaa-pew.csv", "csv", "header");
  small = loadImage("small.jpg")
}

function setup() {
  createCanvas(600, 600);

}

function draw() {
  background(220);
    for (let r = 0; r < table.getRowCount(); r++){
          text(table.get(r, 0),10,r*40);
          image(small,10,r*40,table.get(r, 1)*2,table.get(r, 1));
  }
  
}
