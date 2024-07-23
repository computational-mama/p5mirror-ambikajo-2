let myFont
const can = p => {
  preload = function () {
            myFont = loadFont('MONOS.TTF')
            
        }

        p.setup = function () {
            p.noLoop()
            let cnv = p.createCanvas(400, 400);
            p.background(255);
        }
  p.draw = function(){
    
          p.textAlign(CENTER);
            p.textFont(myFont);
    p.textSize(40)
            p.text("test", 20, 120, 380, 380);
            //p.save("canvas.jpg")
           // p.clear()
  
        };
}
new p5(can);