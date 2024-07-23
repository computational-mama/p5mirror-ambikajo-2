let foo = window.speechSynthesis;
let button;
let voice;
let lang;
function setup() {
  noCanvas()
  button=createButton("play")
  button.mousePressed(speak)
  button.size(200,200)

  
  // voice = foo.getVoices().filter(function(voice) {
  //   // return voice.name === 'Google US English';
  //   return voice.lang === 'en-US';
  // })[0];

} 

function speak() {
  utterance = new SpeechSynthesisUtterance("According to its website, Boston Dynamics is a “company that builds robots”. The company was bought by Google in 2013, but last year the search giant sold it to Japanese telecommunications firm SoftBank.")

  // utterance.lang = voice;
  // utterance.voice = voice;
   // utterance.pitch = 1.5;
  utterance.rate = 0.8;
  // utterance.volume = 0.8;
  foo.speak(utterance)
}
