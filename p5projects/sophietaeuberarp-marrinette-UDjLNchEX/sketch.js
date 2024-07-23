//Sophie Taeuber-Arp, marrionette, 1918
//https://www.kposehn.com/sophie-taeuber-arp/
function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  orbitControl();
  background(220);
   for (j = 0; j < 5; j++) {
  head();
     
   }
}

function head() {
    // translate(0,0,0);
 
    // rotateZ(PI/6)
    for (i = 0; i < 3; i++) {
      translate(0, 30, 0);
      cone(30, 60, 10);
    }
    push();
    translate(0, -70, 0);
    cylinder(5, 100, 4);
    pop();
  
}
