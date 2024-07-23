let wordlist = ["school","bus","market","beach","roadside","funeral","park","mosque","school bus","church","van","imambargah","hospital", "gas station", "university","shrine", "train station","hotel", "checkpost","court"]
         
let myFont;

function preload(){
  myFont = loadFont("JetBrainsMono-Italic.ttf")
}

function setup() {
  createCanvas(400, 700);
  console.log(wordlist.length)
  
  textSize(45)
  
          
}

function draw() {
 
  background(220);
  lastword = wordlist.length-1
  textFont('Rajdhani')
  text(wordlist[lastword],100,100)
  
  textFont(myFont)
  text(wordlist[lastword],100,200)

}