let a = 0
let m

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
      a++
  if (a < 100) {

    m = a % 5
    console.log("up", a)
  } else {
    a--
    console.log("down", a)
  } 

  // console.log(m)


}