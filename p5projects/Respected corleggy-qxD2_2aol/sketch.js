function setup() {
  // createCanvas(400, 400);
  noCanvas()
  createP("Class starts at 10:30 AM. You have time to finalise, clean up and play with your data in Tableau or Excel.<br/>If you are way behind go through old session recordings.<br/>Those who have been successful at web scraping are requested to present at 10:30 after signals")
 let img = createImg("https://imaging.broadway.com/images/regular-43/w1470/115760-15.jpg", 'image of karate kid', 
  () => {
    img.size(400, AUTO);
  })
  
}

function draw() {
  // background(220);
}