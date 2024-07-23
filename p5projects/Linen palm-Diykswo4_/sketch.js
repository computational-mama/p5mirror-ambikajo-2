let textfield;
let output;
let submit;

function setup() {
  // createCanvas(400, 400);
  noCanvas()
  // textfield = createInput()
  textfield = select('#textbox')
  output = select('#outputpost')
  submit = select('#submit')
  submit.mousePressed(newText)
}

function newTyping(){
  // createP(textfield.value())
  output.html(textfield.value())
}
function newText(){
 createP(textfield.value()).addClass('output-style')
}