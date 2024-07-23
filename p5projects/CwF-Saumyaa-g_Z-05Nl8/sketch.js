let table;

let thumbsUp;
let happy;
let straightFace;
let smiling;
let upset;
let veryUpset;

function preload() {
	table = loadTable("https://raw.githubusercontent.com/computational-mama/saumyaa-image-repo/main/data.csv", "csv", "header");

	veryUpset = loadImage("https://raw.githubusercontent.com/computational-mama/saumyaa-image-repo/main/1.png");
	upset = loadImage("https://raw.githubusercontent.com/computational-mama/saumyaa-image-repo/main/2.png")
	smiling = loadImage("https://raw.githubusercontent.com/computational-mama/saumyaa-image-repo/main/3.png")
	straightFace = loadImage("https://raw.githubusercontent.com/computational-mama/saumyaa-image-repo/main/4.png")
	happy = loadImage("https://raw.githubusercontent.com/computational-mama/saumyaa-image-repo/main/5.png")
	thumbsUp = loadImage("https://raw.githubusercontent.com/computational-mama/saumyaa-image-repo/main/6.png")
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	imageMode(CENTER)
}

function draw() {
	background('#69c3aa');
	// circle(300,100,100)
	textSize(25)
	fill(255)
  text("Exposure to incorrect information is widespread in most emerging economies surveyed",70,height/2,400,600)
  
  textSize(35)
	for(let r = 0; r < table.getRowCount(); r++) {
		text(table.get(r, 0), 500, 70+r * 75);
		
		let num = table.get(r, 3)
		let imgin;
		
		if(num == 78){
			imgin = thumbsUp
			image(imgin,700,50+r * 75,85,85)
			} 
		if (num == 76){
			imgin = happy
		 	image(imgin,700,50+r * 75,85,85)
			} 
		if (num >70 && num<73){
			imgin = smiling
		 	image(imgin,700,50+r * 75,85,85)
			} 
		if (num >66 && num <70){
			imgin = straightFace
		 	image(imgin,700,50+r * 75,85,85)
			}
		if (num >54 && num<58){
			imgin = upset
		 	image(imgin,700,50+r * 75,85,85)
			}
		if(num == 44){
			imgin = veryUpset
				image(imgin,700,50+r * 75,85,85)
			}

}
}

//