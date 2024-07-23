let an_font;
let isms;
let fictm;
let verb;
let govt_type;
let pronoun_Arr = ["They", "I", "We"];
let i = 0;
let j = 0;
let k = 0;
let counter = 0;

function preload() {
  verb = loadJSON(
    "https://raw.githubusercontent.com/dariusk/corpora/master/data/words/verbs.json"
  );
  govt_type = loadJSON(
    "https://raw.githubusercontent.com/dariusk/corpora/master/data/governments/governmentForms.json"
  );

  an_font = loadFont("fonts/Ancho-Regular.ttf");
  an_font_thin = loadFont("fonts/Ancho-Thin.ttf");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  // noLoop();
  textFont(an_font);
  textAlign(CENTER);
  textSize(40);
  // createP(
  //   "Click for full refresh or use the '1','2','3' for the sentence to change"
  // );
  // createP("Click for more")
}

function draw() {
  background(177, 156, 217);
  // rand_bg();
  textFont(an_font_thin)
    text(pronoun_Arr[i], width / 2, height / 2 - 50);
    textFont(an_font)

    text(verb.verbs[j].present, width / 2, height / 2);
    textFont(an_font_thin)

    text(govt_type.governmentForms[k], width / 2, height / 2 + 50);
  
}

function rand_bg() {
  noStroke();
  for (i = 0; i < 8; i++) {
    let r = random(0, width);
    ellipse(r, 100 * i, r / 2, r / 2);
  }
}

function mousePressed() {
  redraw();
}

function keyPressed() {
  counter++;
  if (key === "1") {
    i++
    if(i>pronoun_Arr.length-1){
      i=0
    }
    console.log(pronoun_Arr[i]);
  }

  if (key === "2") {
    j = round(random(0, verb.verbs.length - 1));
    console.log(verb.verbs[j].present);
  }

  if (key === "3") {
    k = round(random(0, govt_type.governmentForms.length - 1));
    console.log(govt_type.governmentForms[k]);
  }
}
