
let sh;
let tex;
let pTex;
let time = 0.0;

function preload() {
  sh = loadShader("sh.vert", "sh.frag"); 
}

function setup() {
  createCanvas(400, 400, WEBGL);
  noStroke();
  pTex = createGraphics(400, 400, WEBGL);

  tex = createGraphics(400, 400);
  tex.background(0);
  tex.fill(255);
  tex.textSize(30);
  tex.textAlign(CENTER);
  tex.noStroke()
  //tex.text("hello", width / 2, height / 2);
  for(let i = 0; i < width; i+=100) {
    for(let j = 0; j < height; j+=50) {
      tex.text("hello", i, j, 100, 100);
    }
  }
  
  sh.setUniform("u_res", width, height);
}

function draw() {
  background(0);
  //image(tex, -width/2, -height/2);
  
  sh.setUniform("u_time", millis()/5000.0);
  sh.setUniform("tex", tex.get(mouseX, 0, 100, 100));
  pTex.noStroke()
  pTex.shader(sh);
  pTex.rect(0, 0, width*2, height*2);
  
  //image(pTex, -width/2, -height/2);
  
  texture(pTex);
  rotateX(time);
  rotateY(time);
  rotateZ(time);
  box(200);

  time += 0.01;
}