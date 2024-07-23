let txt = "The answer is the thing that humans have made all along: things. A machine that only makes things isn’t a machine, it’s a factory. The first industrial revolution was about machines making things. And when you’re trying to figure out what a new technology"



function setup() {
  createCanvas(400, 400);
  console.log(txt.length)
  console.log(txt.charAt(txt.length-1))
  spl = txt.split(". ")
  console.log(spl.length)
  spl.pop()
  console.log(spl.length)
  fStop = ". "
  message = join(spl,fStop)
  console.log(message+fStop)
  // console.log(spl)
    // console.log(spl[0]+fStop+spl[1]+fStop+spl[2]+fStop)
}

function draw() {
  background(220);
  
}