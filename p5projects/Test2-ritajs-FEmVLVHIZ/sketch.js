let cyb;
let words;
let pho; 
let rePlace
let conc;
let mkb;
let keys = [];
let args = {
 ignoreCase: false,
// ignoreStopWords: true
};

function preload(){
  cyb  = loadStrings("cyborg.txt")
   mkb  = loadStrings("mkb.txt")
}

function setup() {
  //createCanvas(900, 400);
  noCanvas()
  noLoop()
  words = RiTa.untokenize(mkb)
 //print(words)
  rs = new RiString(words);
  //pho = rs.get("phonemes");
  
 // rePlace = RiTa.splitSentences(rs);
 // rePlace = rs.replaceWord(2, "Woman");
 // print(rePlace[1])
}

function draw() {
  background(220);

   fill(255)
   //createP(rePlace[0])
   
  conc = RiTa.concordance(words, args);
    
    //createP if(conc 
  key2 = Object.keys(conc);
  val = Object.values(conc);
  
  print(keys, val)
  // print(conc)
    //createP(conc[i])
  function compare(a,b){
    return a - b;
  }
  
  createP(key2 + " " + val)
}