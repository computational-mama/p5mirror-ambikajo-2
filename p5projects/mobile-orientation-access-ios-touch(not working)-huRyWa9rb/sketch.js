
let permissionGranted = false;
let cx, cy;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //colorMode(HSL)
   //angleMode(DEGREES)
  
  // DeviceOrientationEvent, DeviceMotionEvent
  if (typeof(DeviceOrientationEvent) !== 'undefined' && typeof(DeviceOrientationEvent.requestPermission) === 'function') {
    // ios 13 device
    
    DeviceOrientationEvent.requestPermission()
      .catch(() => {
        // show permission dialog only the first time
        let button = createButton("click to allow access to sensors");
        button.style("font-size", "24px");
        button.center();
        button.mousePressed( requestAccess );
        throw error;
      })
      .then(() => {
        // on any subsequent visits
        permissionGranted = true;
      })
  } else {
    // non ios 13 device
    textSize(48);
    // text("non ios 13 device", 100, 100);
    permissionGranted = true;
  }
}

function requestAccess() {
  DeviceOrientationEvent.requestPermission()
    .then(response => {
      if (response == 'granted') {
        permissionGranted = true;
      } else {
        permissionGranted = false;
      }
    })
  .catch(console.error);
  
  this.remove();
}
let value = 0;
function draw() {
  if (!permissionGranted) return;
  
  background(125);
  fill(value);
  rect(25, 25, 50, 50);
}


function touchEnded() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}
