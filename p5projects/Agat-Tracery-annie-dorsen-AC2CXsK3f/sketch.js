let story = {};
let grammar;
let dataTable;

function preload(){
  dataTable = loadTable("annie-db.csv",'csv', 'header')
}

function setup() {
  noCanvas()
  let action_Col = dataTable.getColumn('Action')
  // console.log(action_Col)
  
  story = {
   "sentence":["This is the movement with #action#", "#action# is very difficult"],
   "action": action_Col
  }


  grammar = tracery.createGrammar(story);
  let result = grammar.flatten('#sentence#');
  console.log(result)
}

function draw() {

}