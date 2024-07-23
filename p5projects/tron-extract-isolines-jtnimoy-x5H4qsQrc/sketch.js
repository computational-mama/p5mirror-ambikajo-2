// https://medium.com/@jtnimoy/how-to-extract-isolines-in-p5-js-e268b2b046a0

let voxels = [];
let VOXEL_RESOLUTION = 16;
let DISPLAY_SCALE = 50;
let FORESHORTENING = 0.05;
let halfRes = VOXEL_RESOLUTION * 0.5;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  //construct 3D array
  voxels = [];
  for (let z = 0; z < VOXEL_RESOLUTION; z++) {
    let thisSlice = [];
    for (let y = 0; y < VOXEL_RESOLUTION; y++) {
      let thisRow = [];
      for (let x = 0; x < VOXEL_RESOLUTION; x++) {
        thisRow.push(0);
      }
      thisSlice.push(thisRow);
    }
    voxels.push(thisSlice);
  }
}

function draw() {
  background(255);
  //update just the first 2D slice
  for (let z = 0; z < VOXEL_RESOLUTION; z++) {
    for (let y = 0; y < VOXEL_RESOLUTION; y++) {
      for (let x = 0; x < VOXEL_RESOLUTION; x++) {
        let d = dist(
          x,
          y,
          z,
          VOXEL_RESOLUTION / 2,
          VOXEL_RESOLUTION / 2,
          VOXEL_RESOLUTION / 2
        );

        if (d > VOXEL_RESOLUTION / 2) {
          //cut it out
          voxels[z][y][x] = 0;
        } else {
          //it's inside the circle
          voxels[z][y][x] = noise(
            x * 0.2 + frameCount * 0.008,
            y * 0.2,
            z * 0.5
          );
         
        }
      }
    }
  }
  push();
  translate(
    -(VOXEL_RESOLUTION * DISPLAY_SCALE) / 2,
    -(VOXEL_RESOLUTION * DISPLAY_SCALE) / 2
  );
  push();
  scale(DISPLAY_SCALE);
  //let z = 0;
  //draw just the first 2D slice
  
  pop();
  strokeWeight(1);
  let sc = DISPLAY_SCALE; //scale
  for (let z = 0; z < VOXEL_RESOLUTION; z++) {
    let ret = marchingSquares(voxels[z], 0.65); //run the marching squares
    ret.map(function (i) {
      // noFill();

      let x1 = i[0];
      let y1 = i[1];
      let x2 = i[2];
      let y2 = i[3];
      let z1 = z - halfRes;
      let z2 = z - halfRes;
      //translate to origin for pivoting
      x1 -= halfRes;
      y1 -= halfRes;
      x2 -= halfRes;
      y2 -= halfRes;
      //convert to polar
      let radius1 = dist(x1, z1, 0, 0);
      let radius2 = dist(x2, z2, 0, 0);
      let theta1 = atan2(x1, z1);
      let theta2 = atan2(x2, z2);
      //rotate
      theta1 += frameCount * 0.01;
      theta2 += frameCount * 0.01;
      //convert back to cartesian
      x1 = radius1 * sin(theta1);
      x2 = radius2 * sin(theta2);
      z1 = radius1 * cos(theta1);
      z2 = radius2 * cos(theta2);

      //convert to onion skin
      let x1n = (x1 / float(VOXEL_RESOLUTION)) * Math.PI;
      let x2n = (x2 / float(VOXEL_RESOLUTION)) * Math.PI;
      let y1n = (y1 / float(VOXEL_RESOLUTION)) * Math.PI * 2;
      let y2n = (y2 / float(VOXEL_RESOLUTION)) * Math.PI * 2;
      x1p = z1 * sin(x1n) * cos(y1n);
      y1p = z1 * sin(x1n) * sin(y1n);
      z1p = z1 * cos(x1n);
      x2p = z2 * sin(x2n) * cos(y2n);
      y2p = z2 * sin(x2n) * sin(y2n);
      z2p = z2 * cos(x2n);
      x1 = x1p;
      x2 = x2p;
      y1 = y1p;
      y2 = y2p;
      z1 = z1p;
      z2 = z2p;
      //translate back from origin into center framing
      x1 += halfRes;
      y1 += halfRes;
      x2 += halfRes;
      y2 += halfRes;

      stroke((z1 + halfRes) * 16);
    
  beginShape(TRIANGLE_STRIP);
      vertex(x1 * sc, y1 * sc);
      vertex(x2 * sc, y2 * sc);
      endShape();
    });
  }
  pop();
}
