// Classifier Variable
let classifier;
//Model URL
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/y51s-2M-i/';

//video
let video;
let flippedvideo
//store classification
let label = "";
let conf;
let confArr = [];
let vid1
let vid2
//load the model
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}


function setup() {
  createCanvas(800, 400);
  //create the videos
  vid1 = createVideo("vid1.mp4")
  vid1.hide()
  vid1.loop()
  vid1.volume(0.2)

  vid2 = createVideo("vid2.mp4")
  vid2.hide()
  vid2.loop()
  vid2.volume(0)

  video = createCapture(VIDEO);
  video.size(video.width, video.height);
  video.hide();

  flippedVideo = ml5.flipImage(video);
  // Start classifying
  classifyVideo();
}

function classifyVideo() {
  flippedVideo = ml5.flipImage(video)
  classifier.classify(flippedVideo, gotResult);
  flippedVideo.remove();

}

function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }

  label = results[0].label;
  conf = results[0].confidence
  console.log(conf)
  // console.log(results[0]);
  // Classify again!
  classifyVideo();
}

function draw() {
  background(200)
  image(video, 0, 0)
  showvideo()
}

function showvideo() {
  if (conf > 0.9) {
    if (label == "happy") {
      // conArr.push(frameCount)
      video.pause()
      image(vid1, 320, 0)


    }
    if (label == "neutral") {

      image(vid2, 0, 0)

    }
  }

  if (label == "happy" && conf > 0.8) {
    confArr.push(frameCount)
    if (confArr.length > 720) {
      diff = confArr[720] - confArr[0]
      console.log(diff)
      if (diff < 800) {
      image(vid2, 320, 0)

//         console.log(diff, confArr[0], confArr[49], "other")
      } 
    }
  }
  confArr = []
}