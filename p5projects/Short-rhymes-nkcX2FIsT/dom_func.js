
function allClear() {
  var p_elements = document.getElementsByClassName("RiTa_Styles")
  while (p_elements.length > 0) {
    p_elements[0].parentNode.removeChild(p_elements[0]);
  }
  // Remove button tags
  btn.remove();
}

function refreshPoem() {
  // createP.remove()
  // redraw()
  allClear()
  redraw()
  // print("clicked")
  // createDiv('this is some text');
}