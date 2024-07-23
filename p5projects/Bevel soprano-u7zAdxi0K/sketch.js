let voxels = [];
let VOXEL_RESOLUTION = 32;

function setup() {
  createCanvas(400, 400,WEBGL);
}


function draw() {
//update just the first 2D slice
    let z = 0 ;
        for(let y=0;y<VOXEL_RESOLUTION;y++){
            for(let x=0;x<VOXEL_RESOLUTION;x++){
                voxels[z][y][x] = 
                    noise(x*0.2 + frameCount * 0.003 , y*0.3 );
        }
    }
    push();
    translate(width/2 - (VOXEL_RESOLUTION * DISPLAY_SCALE) / 2,
              height/2 - (VOXEL_RESOLUTION * DISPLAY_SCALE) / 2);
    push();
    scale(DISPLAY_SCALE);
     // z = 0;
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
    strokeWeight(1);
    let sc = DISPLAY_SCALE;//scale
    //draw the marching sqUare output
    //run the marching squares
    let ret = marchingSquares(voxels[z] , 0.5 );
    ret.map( function(i) {
        noFill();
        stroke(0,0,0);
        line(i[0] * sc , i[1] * sc , i[2] * sc, i[3] * sc);
        fill(255,0,0);
        noStroke();
        rect( i[0] * sc-2 , i[1] * sc-2 , 4,4  );
    });
    pop();
}