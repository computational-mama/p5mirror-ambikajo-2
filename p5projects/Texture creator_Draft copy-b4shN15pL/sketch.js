let angle = 0 
let w = 12
let ma 
let maxD
let sel;
let detailX;
let detailX1;
let detailX2;
let detailX3;
let detailX4;
let detailX5;
let detailX6;
let detailX7;

function preload() {
  inconsolata = loadFont('OpenSans-Bold.ttf');
}

function setup() {
  createCanvas(400, 400, WEBGL);
  
  colorMode(RGB)
  
  ma=atan(8/sqrt(2))
  maxD = dist(150,10,200,10)
  
  fill(255)
  
  //Rotate
  name1 = createP('RotateX')
  name1.position(10, height+10 );
  detailX = createSlider(3,30,15,0);
  detailX.position(10, height+50 );
  detailX.style('width', '100px');
  
  name2 = createP('RotateY')
  name2.position(150, height+10 );
  detailX1 = createSlider(3,30,20,0);
  detailX1.position(150, height+50 );
  detailX1.style('width', '100px');
  
  name3 = createP('RotateZ')
  name3.position(300, height+10 );
  detailX2 = createSlider(3,30,12,0);
  detailX2.position(300, height+50 );
  detailX2.style('width', '100px');
  
  //Color
  name4R = createP('Color R')
  name4R.position(10, height+60 );
  detailX3R = createSlider(0,255,115.0);
  detailX3R.position(10, height+100 );
  detailX3R.style('width', '100px');
  
  name4G = createP('Color G')
  name4G.position(150, height+60 );
  detailX3G = createSlider(0,25,15,0);
  detailX3G.position(150, height+100 );
  detailX3G.style('width', '100px');
  
  name4B = createP('Color B')
  name4B.position(300, height+60 );
  detailX3B = createSlider(0,255,160,0);
  detailX3B.position(300, height+100 );
  detailX3B.style('width', '100px');
  
  
  //Opacity
  name4 = createP('Opacity')
  name4.position(450, height+60 );
  detailX4 = createSlider(0,255,100,0);
  detailX4.position(450, height+100 );
  detailX4.style('width', '100px');
  
  //Size
  name4 = createP('Size')
  name4.position(450, height+10 );
  detailX5 = createSlider(0,10,2,0);
  detailX5.position(450, height+50 );
  detailX5.style('width', '100px');
  
  //Light
  name4 = createP('Light')
  name4.position(150, height+120 );
  detailX6 = createSlider(0,255,100,0);
  detailX6.position(150, height+160 );
  detailX6.style('width', '100px');
  
    //Ortho
  name4 = createP('Ortho')
  name4.position(10, height+120 );
  detailX7 = createSlider(0,255,100,0);
  detailX7.position(10, height+160 );
  detailX7.style('width', '100px');
  
}

function draw() {
 background(255)
  
    //   rotateX (-QUARTER_PI)
   // rotateZ (PI/2)
   // rotateZ (ma)
   //rotateZ (95)

    ortho(-250,20,-100,1+detailX7.value(),1+detailX7.value(),1900)
   pointLight(255,255,255,1+detailX6.value(),20+detailX6.value(),10+detailX6.value())
  

  //ambientMaterial(70, 130, 230)
  
    for( let z =0; z <height; z+=w){
    for( let x =0; x <width; x+=w){


    push()
      
     rotateX (detailX.value())
     rotateY (detailX1.value())
     // rotateZ (detailX2.value())
     rotateZ (PI/2)
      
      
    let d = dist(x,z, width/2, height/2)
    offset = map(d, 0, maxD, -PI/2, PI/4)
 
    let a = angle + offset 
    let h = map(sin(a),-1,10,0,800)
    let r = random(-10,10)
   
    translate(x-width/2,150,z-height/2)
      
  // noFill()
  // stroke(80+h,1+a, 20+h,200)
  // strokeWeight(detailX.value())
     noStroke() 
     fill (30+h+detailX3R.value(),50+detailX3G.value(), 50+h+detailX3B.value(),200+detailX4.value())
   
  // cylinder(1+detailX5.value(),50+h+detailX5.value())
     ellipse(1+detailX5.value(),50+h+detailX5.value(),20,20,40)
// box(10+detailX3.value(),1+h+detailX3.value(),detailX3.value())  
//cone(3,20+detailX.value()+h, detailX.value()+-10, detailX.value(),30)

    pop()
    
  }
    offset += 1
  }
    angle += .09
    
}

