
let permissionGranted = false;
let cx, cy;
let angles = [45,45,45,45,45,45,45,45];
let colors = ['#fbd206','#feaf8a','#fd7a8c','#cc89d6','#bfcff0','#9ce7c9','#4dc656','#a6aab2'];
let arrowDrop

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  cx = width/2;
  cy = height/2;
  
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

function draw() {
  if (!permissionGranted) return;
  
  background(255);


  let radius = 350;

  // Draw the wheel
  pieChart(radius, angles);

  // Draw the arrow
  push();
  translate(width / 2, height / 2);
  rotate(rotationZ);

  fill(0);
  let arrowSize = radius * 0.6;
  let pointerHeight = arrowSize * 0.2;
  let pointerWidth = arrowSize * 0.3;
  let bodyHeight = arrowSize * 0.8;
  let bodyWidth = arrowSize * 0.1;
  
  // Draw arrow body
  rectMode(CENTER);
  rect(0, 0, bodyWidth, bodyHeight);
  
  // Draw arrow pointer
  triangle(-bodyWidth / 2, bodyHeight / 2, bodyWidth / 2, bodyHeight / 2, 0, bodyHeight / 2 + pointerHeight);
  
//     if (rotationZ > 0 && rotationZ < 45) {
      
//     } else if (rotationZ > 46 && rotationZ < 90) {
      
//     } else if (rotationZ > 91 && rotationZ < 135) {
      
//     } else if (rotationZ > 136 && rotationZ < 180) {
      
//     } else if (rotationZ > 181 && rotationZ < 225) {
      
//     } else if (rotationZ > 226 && rotationZ < 270) {
      
//     } else if (rotationZ > 271 && rotationZ < 315) {
      
//     } else {
      
//     }

  pop();
}

function pieChart(diameter, data) {
  let lastAngle = 0;
  for (let i = 0; i < data.length; i++) {
    let wheelcolors = colors[i];
    fill(wheelcolors);
    arc(
      width / 2,
      height / 2,
      diameter,
      diameter,
      lastAngle,
      lastAngle + radians(angles[i])
    );
    lastAngle += radians(angles[i]);
  }
}