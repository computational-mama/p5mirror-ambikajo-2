let RiT;
let words
function setup() {
  createCanvas(400, 400);
  console.log(RiTa.rhymes("rat"))
     words = RiTa.tokenize("The elephant took a bite!")
   
}

function draw() {
  background(220);
   for (let i=0; i < words.length; i++) {
        text(words[i], 50, 50 + i*20);
    }
}