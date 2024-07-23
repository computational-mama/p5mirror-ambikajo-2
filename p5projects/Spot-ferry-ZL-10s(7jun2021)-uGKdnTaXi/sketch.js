let a =0;
let r;
let RES = 200;

function setup(){
  createCanvas(400,400)
  // noLoop()
}

function draw(){
    background(142, 124, 197);

  for (x = 0; x < RES; x +=3 ) {
    r = sin(x / 100+a);

    n = noise(r,a)
    r2 = map(n, 0.4, 1, 100, 20)
    fill(255)
    // strokeWeight(r2/20)
    // noFill()
    
    noStroke()
    ellipse(width/2, x+100, r2, r2 * 0.6)

  }
  a += 0.006;
  
//      //construct a 2d numeric array of pixel brightnesses, row by row
//     let pixels = [];
//     for(let y=0;y<RES;y++){
// 	let xRow = [];
// 	for(let x=0;x<RES;x++){
// 	    xRow.push( brightness(get(x,y)) );
// 	}
// 	pixels.push(xRow);
//     }
    
    
// // //     //call and draw marching vectors
//     stroke(0,0,255);
//     strokeWeight(3)
//     noFill();
//     let lines = marchingSquares(pixels,1.1);
//     lines.map(function(a){
// 	line(a[0],a[1],a[2],a[3]);
//     });
  
}