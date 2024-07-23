let emo;
let i=0;
let button;
let cnv;
function preload(){
emo = loadTable("emojis - Sheet1.csv",'csv','header')
}

function setup() {
cnv = createCanvas(4961,7016);
textSize(250)
  textAlign(CENTER)
  
  // cnv.mouseReleased(changeEmo)
// print(emo.getColumn('emo'));
}

function draw() {
background(220);
    if(i<emo.getRowCount('name')){
    i++  
      saveCanvas('myCanvas', 'jpg');
  } else {
    i=0
  }
  text(emo.getString(i,0),width/2,height/2)
}

// function changeEmo() {
//   i++
//   console.log(i)
//   
// }

