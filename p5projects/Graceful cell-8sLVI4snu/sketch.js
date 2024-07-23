let date_s = ["24-06-1988","29-04-2016","19-07-1984","12-12-2017"] 

function setup() {
  createCanvas(400, 400);
  for(i=0;i<date_s.length;i++){
    date_s[i]
  }
}

function draw() {
  background(220);
  for(i=0;i<date_s.length;i++){
    text(date_s[i],100,50*i)
  }
}