//frakenstein, simmel, lefrevbe prod of space, anna something 
let cyb;
let nature;
let words;
let words_len;
let sent;
let sent2;
let btn;
let cybbtn;
let natbtn;
let instruct1;
let startbtn;
// let cyb =["cyborg.txt", "mkb.txt"]

//load cyborg manifesto
function loadFile1() {
 cyb =  loadStrings("cyborg.txt", fileLoaded);
 // cyb2 =  loadStrings(cyb[1], fileLoaded);
  console.log("ONE")
}

function loadFile2() {
 cyb =  loadStrings("mkb.txt", fileLoaded);
 // cyb2 =  loadStrings(cyb[1], fileLoaded);
  console.log("TWO")
}

function fileLoaded(){
  wordArr = RiTa.untokenize(cyb);
  rs = new RiString(wordArr)
  sent = RiTa.splitSentences(rs)
  console.log(sent)
  console.log("file loaded")
  // print(sent)
  instruct1.show()
  startbtn.show()
}

// //load handbook of nature
// function loadFile2() {
//  nature =  loadStrings("mkb.txt", fileLoaded2);
// }

// function fileLoaded2(nature){
//   wordArr2 = RiTa.untokenize(nature);
//   rs2 = new RiString(wordArr2)
//   sent2 = RiTa.splitSentences(rs2)
//   print(sent)
//   console.log("file 2 loaded")
//   instruct1.show()
//   startbtn.show()
// }


function setup() {
  // createCanvas(400, 400);
  noCanvas();
  noLoop();
  cybbtn = select("#cybutton")
  cybbtn.mousePressed(loadFile1)
  natbtn = select("#natbutton")
  natbtn.mousePressed(loadFile2)

  instruct1 = select("#instruct")
  instruct1.hide()
startbtn = select("#startbtn")
  startbtn.hide()
  // wordArr = RiTa.untokenize(cyb);
  // rs = new RiString(wordArr)
  // sent = RiTa.splitSentences(rs)
   btn = createButton("Refresh")
  btn.hide()
}

function draw() {
  sentence_cyb()
  
  startbtn.mousePressed(refreshPoem)
  // sentenc
 
  btn.mousePressed(refreshPoem);
  
}

function sentence_cyb() {
  // body.clear()
  for (i = 0; i < 6; i++) {
    para = random(sent) //+ " " + random(sent).length)
    r_string = new RiString(para)
    if (r_string.length() <= 100) {
      createP(r_string._text).addClass('RiTa_Styles')
    }
  }
}




function allClear() {
  var p_elements = document.getElementsByClassName("RiTa_Styles")
  while (p_elements.length > 0) {
    p_elements[0].parentNode.removeChild(p_elements[0]);
  }
  // Remove button tags
  btn.remove();
  // startbtn.remove();
}

function refreshPoem() {
  // createP.remove()
  // redraw()
  allClear()
  redraw()
  // print("clicked")
  // createDiv('this is some text');
}