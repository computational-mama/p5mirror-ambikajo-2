let permissionGranted = false;
let cx, cy;
let angle = 0;
let speed = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSL);
  angleMode(DEGREES);

  // DeviceOrientationEvent, DeviceMotionEvent
  if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
    // ios 13 device

    DeviceOrientationEvent.requestPermission()
      .catch(() => {
        // show permission dialog only the first time
        let button = createButton('click to allow access to sensors');
        button.style('font-size', '24px');
        button.center();
        button.mousePressed(requestAccess);
        throw error;
      })
      .then(() => {
        // on any subsequent visits
        permissionGranted = true;
      });
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

function draw() {
  if (!permissionGranted) return;

  background(255);
  noStroke();
  
  // get the rotationZ value from the accelerometer
  let newSpeed = accelerationX*10;
  
  // smooth out the speed change
  speed += (newSpeed - speed) * 0.1;
  
  // update the angle based on the speed
  angle += speed * 0.4;
  
  // limit the angle to 360 degrees
  angle %= 360;
  
  let segments = 12;
  let radius = 200;
  let segmentAngle = 360 / segments;
  for (let i = 0; i < segments; i++) {
    push();
    translate(width / 2, height / 2);
    rotate(segmentAngle * i + angle);
    fill((i * segmentAngle) % 360, 100, 50);
    arc(0, 0, radius * 2, radius * 2, 0, segmentAngle, PIE);
    pop();
  }
}

// disable the default scrolling behavior on mobile devices
document.ontouchmove = function (event) {
  event.preventDefault();
};
