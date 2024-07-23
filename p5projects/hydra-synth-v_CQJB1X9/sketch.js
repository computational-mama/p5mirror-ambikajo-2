// hydra canvas + init
let hc = document.createElement('canvas') // hydra canvas + custom size
hc.width = 640
hc.height = 360
let hydra = new Hydra({detectAudio: false,canvas: hc})

let pg // store hydra texture


// hydraSandbox- start
// 1
osc(6,0.1,0.4).modulate(o1).out(o0)
solid().out(o1)

// 2
// src(o1).blend(noise(3),0.1).modulate(o2,0.3).out(o1)


s2.initCam()
src(s2)
.modulate(osc())
.out(o2)


function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL)
	background(0)
	pg = createGraphics(hc.width, hc.height)
	noStroke()
}


function draw() {
	// grab + apply hydra texture
	pg.clear()
	pg.drawingContext.drawImage(hc, 0, 0, pg.width, pg.height)

	// plane(width, height) // fill screen w/ texture
	
	texture(pg)
	// rotateX(radians(frameCount / 8))
	rotateY(radians(frameCount / 4))
	torus(height/4, height/8, 50)
}