let roff = 0.03;
let xoff = 0;
let rad;
let r;
let a = 0;
let theShader;
function preload(){
  // load the shader
  theShader = loadShader('texcoord.vert', 'texcoord.frag');
}

function setup() {
  createCanvas(400, 400, WEBGL);
 // noLoop()
  shaderTexture = createGraphics(400, 400, WEBGL);

  // turn off the createGraphics layers stroke
  shaderTexture.noStroke();

   x = -50;
   y = 0;
}

function draw() {
 
  // instead of just setting the active shader we are passing it to the createGraphics layer
  shaderTexture.shader(theShader);
shaderTexture.rect(0,0,width,height);
  
  
   background(255, 100, 180);
  //shaderTexture.background(255);
translate(-width/2,-height/2)
  texture(shaderTexture);


  for (x = height; x > 0; x -= 22) {
      
      r = sin(x/100+a+TWO_PI);
     
      n = noise(r,a)
   // console.log(n)
      r2 = map(n,0.4,1,40,290)
     // stroke(200,200)
     // fill(255,10)
     
      ellipse(200, x, r2, r2*0.6,100)
      ellipse(100,x+100, r2, r2*0.6,100)
      ellipse(300, x+60, r2, r2*0.6,100)
    }
  a += 0.03;
    //shader(theShader);
   // rect(0,0,width, height);
  //console.log(r)
}