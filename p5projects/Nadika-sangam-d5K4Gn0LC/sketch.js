let data;
let url = 'https://source.unsplash.com/1600x900/?';
let img;
let img2;

function preload(){
  data = loadTable('nadika-sangam - Sheet1.csv','csv')
  img = loadImage(url)

}

// function searchloaded(){
//  if (data.loaded == true){
//    return true
//  }
// }


function setup() {
  createCanvas(900, 700);
  noLoop()


}

function draw() {
  background(220);
//     if(url != ""){
      
      image(img, 600,300,160,90)
//     }
    for (let r = 0; r < data.getRowCount(); r++)
    for (let c = 0; c < data.getColumnCount(); c++) {
      // console.log(data.getString(r, c));
      noStroke()
      rect(c*100,r*30+60, 80,20)
      text(data.getString(r, c),c*100,r*30+60, 100,70)
      
    }
      text(url+data.get(2,4),100,670)
     // image(img2,100,670,160,90)

}