let cyb;
let words;
let words_len;
let verbs = [];
let nouns = [];

function preload() {
  cyb = loadStrings("cyborg.txt");
  // yaml = loadStrings('haiku.yaml');
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
    if (RiTa.isVerb(rs_arr[i]) == true || RiTa.isNoun(rs_arr[i]) == true) {
     syl =  RiTa.getSyllables(rs_arr[i])
      pos = RiTa.getPosTags(rs_arr[i])
      if (syl.length <= 5){
      print(pos, rs_arr[i], syl, syl.length)
     }
    } 
  }
  
    // for (j = 0; j < rs_arr.length; j++) {
    // if (RiTa.isNoun(rs_arr[j]) == true) {
    //   print("noun", rs_arr[j])
    // }
    
  // }

}