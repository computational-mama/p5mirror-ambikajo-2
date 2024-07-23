let inputForm;
let submitButton;
let txtArray;
let splitString = [];
let c;

function setup() {
  createCanvas(400, 400);
  // background(255)
  inputForm = createInput("")
  submitButton = createButton("submit")
  submitButton.mousePressed(inputVal)
  textFont("IBM Plex Mono")
  textAlign(CENTER)
  textSize(40)
  frameRate(4)
   c = color('#0000ff')
  fill(c)
}

function draw() {
  background(255);
  let w = 30;
  let h = 30; 
  let offset = 60
if(inputForm.value() !== null){
  for(i=0;i<splitString.length;i++){
    // stroke(color('#0000ff'))

    let index = (i+(frameCount)) % splitString.length
    text(splitString[index],10+w,10+h)
    // text(splitString[i],10+w,10+h)
    stroke(c)
    // line(i*40,0,i*40,height)
    // line(0,i*40,width,i*40)
    w+=offset
    if(w>width){
      w = 0;
      h += offset
    }
  }
}
}

function inputVal(){
  txt = inputForm.value()
  if(inputForm.value()!=null){
  splitString = split(txt,"")
  console.log(splitString, splitString.length)
  }
//   
}

//1,@,#,$,%,^,&,*,(,),:,;,{,},[,],dra.ft,