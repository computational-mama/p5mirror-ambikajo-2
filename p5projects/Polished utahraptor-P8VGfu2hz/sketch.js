let txt = "We wish to write this name. We wish to speak it, but we dare not speak it above a whisper. For men are forbidden to take notice of women, and women are forbidden to take notice of men. But we think of one among women, they whose name is Liberty 5-3000, and we think of no others. The women who have been assigned to work the soil live in the Homes of the Peasants beyond the City. Where the City ends there is a great road winding off to the north, and  we Street Sweepers must keep this road clean to the first milepost. There is a hedge along the road, and beyond the hedge lie the fields. The fields are black and ploughed, and they lie like a great fan before us, with their furrows gathered in some hand beyond the sky, spreading forth from that hand, opening wideapart as they come toward us, like black pleats that sparkle with thin, green spangles. Women work in the fields, and their white tunics in the wind are like the wings of sea-gulls beating over the black soil."

let wrd
let splitString
let r
let cWidth
let nArr = []
let tW = []

function setup() {
  createCanvas(400, 400);
  // console.log(txt.length)
  textSize(12)
  splitString = split(txt, ' ');
  // console.log(splitString.length)
}

function draw() {
  background(220);
  if (r != null) {
    for (i = 0; i < nArr.length; i++) {
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      pWidth = tW.reduce(reducer)+5;
      // console.log(pWidth)

      cWidth = textWidth(nArr[i]) + 5;
      text(nArr[i], cWidth, 100)
      // console.log(nArr[i])
    }
  }
}

function mousePressed() {
  r = round(random(0, splitString.length - 1))
  wrd = splitString[r]

  // console.log(wrd, cWidth)
  nArr.push(wrd)
  tW.push(textWidth(wrd))
console.log(nArr)
}