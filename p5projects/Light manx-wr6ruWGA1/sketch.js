function setup() {
  createCanvas(400, 400);
  alert(navigator.platform)
  // alert(window.screen.orientation)
  screen.orientation.onchange = function (){
    // logs 'portrait' or 'landscape'
    alert(screen.orientation.type.match(/\w+/)[0]);
    
};
}

function draw() {
  background(220);
}