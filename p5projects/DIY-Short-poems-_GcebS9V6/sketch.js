let cyb;
let words;
let words_len;
let sent;
let btn;

function preload() {
  cyb = loadStrings("cyborg.txt");
}

function setup() {
  // createCanvas(400, 400);
  noCanvas();
  noLoop();
  let inp = createInput('Add new text here');
  inp.input(myInputEvent);
  wordArr = RiTa.untokenize(cyb);
  rs = new RiString(wordArr)
  sent = RiTa.splitSentences(rs)

}

function draw() {
  sentence_cyb()
  // sentenc
  btn = createButton("Refresh")
  btn.mousePressed(refreshPoem);
  // footnote.position(10, btn.postion.y + 10)
  // btn.mousePressed(sentence_cyb);
}

function sentence_cyb() {
  // body.clear()
  for (i = 0; i < 6; i++) {
    para = random(sent) //+ " " + random(sent).length)
    rs2 = new RiString(para)
    if (rs2.length() <= 100) {
      createP(rs2._text).addClass('RiTa_Styles')
    }
  }
  // let footnote = createP("Simple poem-ish generator with the sentences of A Cyborg Manifesto. Click refresh for new poem-ish texts").addClass('footnotes')
}

function allClear() {
  var p_elements = document.getElementsByClassName("RiTa_Styles")
  while (p_elements.length > 0) {
    p_elements[0].parentNode.removeChild(p_elements[0]);
  }
  // Remove button tags
  btn.remove();
}

function myInputEvent() {
  console.log('you are typing: ', this.value());
}

function refreshPoem() {
  // createP.remove()
  // redraw()
  allClear()
  redraw()
  // print("clicked")
  // createDiv('this is some text');
}