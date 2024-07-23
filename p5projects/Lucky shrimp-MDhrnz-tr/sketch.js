let bodypix;
let video;
let segmentation;

let options = {
  multiplier: 0.75, // 1.0, 0.75, or 0.50, 0.25
  outputStride: 16, // 8, 16, or 32, default is 16
  segmentationThreshold: 0.5, // 0 - 1, defaults to 0.5
};

function setup(){
  createCanvas(320, 240);
  video = createCapture(VIDEO)
 video.size(width, height);
    video.hide();
    bodypix = ml5.bodyPix(video, modelReady);
}
function modelReady() {
    console.log('ready!')
    bodypix.segment(gotResults, options)
}
function gotResults(error, result) {
  if (error) {
    console.log(error);
    return;
  }
  // log the result
    segmentation = result;
 //console.log(result.bodyParts);
  background(255, 0, 0);
 // image(video, 0, 0, width, height)
image(segmentation.personMask, 0, 0, width, height)

    bodypix.segmentWithParts(video, gotResults, options)
  


}
  function mousePressed(){
 saveJSON(segmentation.bodyParts, 'part.json')
}
