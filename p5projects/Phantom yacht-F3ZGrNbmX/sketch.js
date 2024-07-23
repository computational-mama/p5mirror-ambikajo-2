let constraints
let webcam
function setup() {
  // createCanvas(400, 400);
  noCanvas()
  
  constraints = {
    video: {
      // width: displayWidth,
      height: displayHeight,
      facingMode: {
        exact: "environment"
      }
    },
    audio: false
  };
  
  webcam = createCapture(constraints)
webcam.position(0,0)

}

function draw() {
  background(220);
  
}