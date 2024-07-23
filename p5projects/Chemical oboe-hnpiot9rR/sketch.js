let table
let list 
function preload(){
  table = loadTable('sheet1.csv', 'csv','header')
}

function setup() {
  noCanvas()
  
  //cycle through the table
  for (let r = 0; r < table.getRowCount(); r++)
    for (let c = 0; c < table.getColumnCount(); c++) {
       list = table.getString(r, c)
      print(table.getString(r, c));
    }
createP(list)  
  
}
