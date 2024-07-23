let textarea;
let submit;
let img;
let uploadImg;

function setup() {
  // createCanvas(400, 400);
  noCanvas();
  noLoop();
  textarea = select('#textarea');
  submit = select('#submit');
  submit.mousePressed(newText);
  // createP('dra.ft').addClass('logo');
  //createP('what is written will happen.').addClass('content');
  uploadImg = createFileInput(handleFile)

}

function draw() {
  // background(220);
}

function newText() {
  allClear()
  createDiv(textarea.value()).addClass('content');
  var node = document.getElementsByClassName("content")[0];
  // console.log(node)
  document.getElementById("contentpost").appendChild(node);
  console.log(node)

  // var contentpost = document.getElementById("contentpost")
  // contentpost.appendChild(para);
  // document.getElementById("contentpost").appendChild(para);
  // // console.log(q_elements.parentNode)
}


function allClear() {
  var p_elements = document.getElementsByClassName('content');
  while (p_elements.length > 0) {
    p_elements[0].parentNode.removeChild(p_elements[0]);
  }

}

function handleFile(file) {
  // print(file);
  if (file.type === 'image') {
    img = createImg(file.data, '');
    // img.hide();
    var node = document.getElementsByTagName("img")[0];
    // console.log(node)
    document.getElementById("contentpost").appendChild(node);
    
  } else {
    img = null;
  }
}