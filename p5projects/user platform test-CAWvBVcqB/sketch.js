let vid;

function setup() {
  createCanvas(displayWidth, displayHeight);
  background(200)
  strokeWeight(10);
  stroke(0);
  constraints = {
    video: {

        facingMode: {
          exact: "user"
        }

    },
    audio: false
  };
  vid = createCapture(VIDEO,constraints)
  vid.size(50,50)
  vid.hide()
  alert(navigator.platform)

}

function touchMoved() {
  image(vid, mouseX, mouseY);
  return false;
}