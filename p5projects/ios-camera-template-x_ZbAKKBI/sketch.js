let video

function setup() {
  // createCanvas(displayWidth, displayHeight);
  noCanvas()
  options = {
    video: {
      facingMode: {
        exact: "environment"
      }
    },
    audio: false,
  }
  
if(navigator.platform == "iPhone" || navigator.platform == "Linux armv8l"){
      video = createCapture(VIDEO, options)
  } else {
      video = createCapture(VIDEO)
  }
  
  video.position(0,0,displayWidth, displayHeight)
}

function draw() {

  
}