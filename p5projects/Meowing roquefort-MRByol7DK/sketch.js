let angles = [45,45,45,45,45,45,45,45];
let colors = ['#fbd206','#feaf8a','#fd7a8c','#cc89d6','#bfcff0','#9ce7c9','#4dc656','#a6aab2'];

function setup() {
  createCanvas(720, 400);
  noStroke();
  noLoop(); // Run once and stop
}

function draw() {
  background(100);
  pieChart(300, angles);
  for(i=0;i<360;i+=45){
    console.log(i)
  }
}

function pieChart(diameter, data) {
  let lastAngle = 0;
  for (let i = 0; i < data.length; i++) {
    let gray = colors[i];
    console.log(gray)
    fill(gray);
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
