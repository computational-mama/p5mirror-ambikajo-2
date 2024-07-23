let emo;
let i=0;
let button;
let cnv;
function preload(){
emo = loadTable("emojis - Sheet1.csv",'csv','header')
}

function setup() {
cnv = createCanvas(400,400);
textSize(250)
  textAlign(CENTER)
 
  // cnv.mouseReleased(changeEmo)
// print(emo.getColumn('emo'));
}

function draw() {
background(220);
  // if(i=0;i<getRowCount;i++)
   if(i<emo.getRowCount()){
    i++;
text(emo.getString(i,0),width/2,height/2);
saveCanvas('myCanvas', 'jpg');
}
}

