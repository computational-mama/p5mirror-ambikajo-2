let story = {
  "start":["#person# eats #person#."],
  "person":["alpha","beta","gamma","tilda"]
}
let grammar;

function setup() {
  noCanvas()
  grammar = tracery.createGrammar(story);
  
  //console.log("i love ambi")
let result = grammar.flatten("#start#")
 console.log(result)
}

