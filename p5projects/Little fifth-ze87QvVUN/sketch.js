function getSentences() {
  
  fetch("https://cdn.glitch.com/f72f5467-715b-40fa-b210-1cd5a6b89206%2Fplain-dialogues.txt?v=1614944671757")
    .then(response => response.text())
    .then(text => {
      text = text.replace(/<\/?[^>]+(>|$)/g, "");
      let tokens = RiTa.tokenize(text)
      console.log(tokens)
       let nouns = []
      for(let i =0;  i< tokens.length;i++){
        if(RiTa.isNoun(tokens[i]) == true && RiTa.isPunct(tokens[i])!= true && RiTa.isVerb(tokens[i]) != true){
          nouns.push(tokens[i])
          
        } 
      }
    function removeDuplicates(data){
      return data.filter((value,index) => data.indexOf(value) === index)
    }
      console.log(removeDuplicates(nouns))
  })
}

  getSentences()  

function setup(){
  noCanvas()
  // getSentences()  
  // createP()
}