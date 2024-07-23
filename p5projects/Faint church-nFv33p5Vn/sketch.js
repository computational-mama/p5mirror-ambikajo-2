let wordArray = ["School", "Bus","Market", "Beach","Roadside", "Funeral", "Park", "Mosque", "School Bus", "Church", "Van", "Imambargah", "Hospital", "Gas Station", "University", "Shrine", "Train Station", "Hotel","Checkpost", "Court"];

let numArr = [24,19,5]

let txt = "Airplane";
let listCSV;

function preload(){
  listCSV = loadStrings('list.csv')
}

function setup() {
  createCanvas(400, 400);
  textSize(15)
  textFont("Space Mono")
  // textAlign(CENTER)
   // console.log(wordArray.length)
  // console.log(listCSV)
  // console.log(numArr)
  noLoop()
}

function draw() {
  background(220);
  
 for(i=0;i<listCSV.length;i++){
   let newArr = shuffle(listCSV);
   text(newArr[i],10,25*i)
 }
  
  
  console.log(newArr)
}