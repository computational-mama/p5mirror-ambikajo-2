let words;
let words2;
let data;
let rs;
let deetsph

let datam = "This chapter is an effort to build an ironic political myth faithful to feminism, socialism, and materialism. Perhaps more faithful as blasphemy is faithful, than as reverent worship and identification."

function preload() {
  //data = loadStrings('test.txt');
}

function setup() {

  createCanvas(500, 500);
  noLoop()
  //  print(words)
  background(50);
  textSize(20);
  words = RiTa.tokenize(datam);
  
  //words2 =  RiTa.tokenize(data);
 // print(words2)
  //print(words)
  for (i = 0, j = words.length; i<j;i++){
  rs = new RiString(words[i]);
  let deets = rs.analyze();
  deetsph = deets._features.phonemes
   print(deets)
  
  }
  
}

function draw() {
  background(220);
  x=0
  y = 20
   for (i = 0, j = words.length; i<j;i++){
     text(words[i], 20+x, y+y*i);
     if (y > height){
       i= 0;
       x = 100;
       
     }
     text(words[i], 20+x, y+y*i);
    // text(deetsph,150, 20+20*i);
   //  print(deetsph)
   } 
  
 
}