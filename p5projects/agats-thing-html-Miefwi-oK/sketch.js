let table;
let interval;
let row1;
let row2;
let timer
function preload() {
  table = loadTable("data.csv", "csv", "header");
}
function setup() {
  // createCanvas(400, 400);
  noCanvas()
  row1 = createDiv(table.getString(0, 0));
  row1.id("row1")
  row2 =  createDiv(table.getString(0, 1));
  row2.id("row2")
  // timer = createP('timer')
  callRows(row1,1000,0)
  callRows(row2,1200,1)
}

function draw() {
  // noCanvas()
}

function callRows(elt,wait,col) {
  let row = 0;
  setInterval(timeIt, wait);
  function timeIt() {
      // timer.html(row)
    if(row<table.getRowCount()){
      
      elt.html(table.getString(0, col))
    }
      row++;
  }
}
