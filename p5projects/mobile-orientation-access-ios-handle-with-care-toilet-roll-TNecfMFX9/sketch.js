let permissionGranted = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  textSize(50)
  textAlign(CENTER)
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
  
  background(255)
  

  noStroke()
  if(floor(rotationX)<0){
    push()
    fill(255, 195, 0)
    rect(0,0,width,height/2)
    pop()
    fill(255)
    text("see",width/2,80)
  } else {
    push()
    fill(218, 247, 166)
    rect(0,height/2,width,height/2)
    pop()
    fill(255)
    text("saw",width/2,height-80)
  }

  // text(floor(rotationX),width/2,250)
  
}