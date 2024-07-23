let a = 0;
let r;
let voxels = [];
let VOXEL_RESOLUTION = 8;
let DISPLAY_SCALE = 32;

function setup() {
  createCanvas(400, 400, WEBGL);
  // noLoop()
}

function draw() {
  background(255);
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
  //populate array
  let z = 0;
  for (let y = 0; y < VOXEL_RESOLUTION; y++) {
    for (let x = 0; x < VOXEL_RESOLUTION; x++) {
      voxels[z][y][x] = noise(x * 0.2 + frameCount * 0.003, y * 0.3);
    }
  }
  push();
    translate(width/2 - (VOXEL_RESOLUTION * DISPLAY_SCALE) / 2,
              height/2 - (VOXEL_RESOLUTION * DISPLAY_SCALE) / 2);

 push();
    scale(DISPLAY_SCALE);
     z = 0;
  
  push();
  rotateZ(frameCount * 0.007);
  rotateY(frameCount * 0.005);
  rotateX(frameCount * 0.003);
  scale(32);
  translate(
    -VOXEL_RESOLUTION / 2,
    -VOXEL_RESOLUTION / 2,
    -VOXEL_RESOLUTION / 2
  );
  noFill();
 push();
    scale(DISPLAY_SCALE);
     z = 0;
    //draw just the first 2D slice
    for(let y=0;y<VOXEL_RESOLUTION;y++){
        for(let x=0;x<VOXEL_RESOLUTION;x++){
            push();
            translate(x,y);
            fill(0,255,255);
            noStroke();
            if(voxels[z][y][x] >=  0.5 )rect(0,0,1,1);
            pop();
        }
    }
    pop();
  pop();
}
