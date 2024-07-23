let element
function takeScreenshot(){
   let element = document.getElementsByClassName("addContent")
   let igEl = {  ignoreElements:(element) => true }
  
   html2canvas(document.querySelector("#contentpost")).then(canvas => {
    document.body.appendChild(canvas)
});
  
}

// function downld(){

//    cnv = document.getElementsByTagName("canvas")
//   while (cnv.length > 0) {
//   console.log(cnv[0])
//   }
// }