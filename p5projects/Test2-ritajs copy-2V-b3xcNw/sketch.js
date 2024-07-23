let cyb;
let words;
let words_len;

function preload() {
  cyb = loadStrings("cyborg.txt");
}

function setup() {
  //createCanvas(900, 400);
  noCanvas();
  noLoop();
  wordArr = RiTa.untokenize(cyb);
  // wordArr = RiTa.tokenize(cyb);
  // print(wordArr)
  
  rs = new RiString(wordArr)
  // rs.analyze()
  // print(rs._text, rs._features.pos)
    // print(rs)
  // if(rs._features.pos == "vbz"){
  //   print(rs._text)
  // }
  
  
  // rs = new RiString(wordArr);
  // RiTa.stripPunctuation(wordArr);
  rs_arr = rs.words()
  // print(rs.features());
  // print(rs_arr)
//   rs_arr = wordArr.words()
  for (i = 0; i < rs_arr.length; i++) {
    if (RiTa.isNoun(rs_arr[i]) == true) {
      print(rs_arr[i])

    } //else {
//     createP(rs_arr)
//     }
    
  }

}