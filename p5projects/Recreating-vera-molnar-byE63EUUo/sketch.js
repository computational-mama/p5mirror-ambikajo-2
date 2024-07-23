//Structure de Quadrilatères (Square Structures)
//Vera Molnar
//1987
//ink on paper
//11 3/4 x 16 1/2 inches

//http://www.seniorandshopmaker.com/vera-molnar-1/jcggsnl8k6uuzf5mmbik1gr6r4eed7

let lp = false;

function setup() {
  createCanvas(800, 600); 
  frameRate(5) 
 noLoop()
 createP("Click for more variations")
}

function draw() {
  background(250, 149, 120);
 
 stroke(255, 180);
  noFill();
//i loop for width
  for (i = 20; i < width-100; i += 35) {
     // let sW = map(i,-1,1,1,2)
     //  strokeWeight(sW)
//j loop for height
    for (j = 40; j < height-200; j += 35) {
      let n = random(-5, 5);
      let m = random(-8, 8);
      let a;
      let q = random(-5, 5);
      // quad(20 + i + m, 50 + j + n, //x1,y1
      //   50 + i + n, 50 + j + n, //x2,y2
      //   50 + i + m, 80 + j + m, //x3,y3
      //   20 + i + m, 80 + j + m); //x4,y4
      for (h = 10; h < 100; h += 0 + a) {

        if (i > 250 && i < 400) {
         //stroke(255,100)
          a = 8
          q = random(-a, a);
          quad(20 + i + m + q, 50 + j + n + q, //x1,y1
            50 + i + n + q, 50 + j + n + q, //x2,y2
            50 + i + m + q, 80 + j + m + q, //x3,y3
            20 + i + m + q, 80 + j + m + q); //x4,y4

        } else if (i > 90 && i < 510) {
        //  stroke(255,100,160)
          a = 25
          q = random(-a / 5, a / 5);
          quad(20 + i + m + q, 50 + j + n + q, //x1,y1
            50 + i + n + q, 50 + j + n + q, //x2,y2
            50 + i + m + q, 80 + j + m + q, //x3,y3
            20 + i + m + q, 80 + j + m + q); //x4,y4
        } else if (i > 50 && i < 645) {
          // stroke(0,100,160)
          a = 65
          q = random(-a / 15, a / 15);
          quad(20 + i + m + q, 50 + j + n + q, //x1,y1
            50 + i + n + q, 50 + j + n + q, //x2,y2
            50 + i + m + q, 80 + j + m + q, //x3,y3
            20 + i + m + q, 80 + j + m + q); //x4,y4

        } else {
          q = random(-5, 5);
          quad(20 + i + m + q, 50 + j + n + q, //x1,y1
            50 + i + n + q, 50 + j + n + q, //x2,y2
            50 + i + m + q, 80 + j + m + q, //x3,y3
            20 + i + m + q, 80 + j + m + q); //x4,y4
          
         
        }


      }


    }


  }
}

function mousePressed(){
  
 redraw()
  //noLoop() 
  //save("image.png")
}