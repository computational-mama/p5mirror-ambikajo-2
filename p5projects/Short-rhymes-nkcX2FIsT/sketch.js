let cyb;
let words;
let last_word;
let sent;
let btn;
let rs;

function preload() {
  cyb = loadStrings("cyborg.txt");
}

function setup() {
  // createCanvas(400, 400);
  noCanvas();
  noLoop();
  wordArr = RiTa.untokenize(cyb);
  // print(wordArr)
  rs = new RiString(wordArr)
  // print(rs.analyze())
  // print(rs._text, rs._features)
  sent = RiTa.splitSentences(rs)
  // print(sent[0])

  sentence_1()
  rhy_line()
}

function sentence_1() {
  
      para = random(sent)
    paraStr = new RiString(para)
        print(paraStr._text, paraStr.words())
        let array = paraStr.words()
        let array2 = array.slice(0,5)
        let array3 = array.slice(5)
        // print(array3)
        let separator = ' ';
        let message = join(array2, separator);
        let message2 = join(array3, separator);
        createP(message)
        // createP("  " + message2)
        last_word = array[4]
        print(last_word)
  
    }

function rhy_line(){
    all_words = rs.words()
  // print(all_words.length)
  for(i=0;i<all_words.length;i++){
      all_arr = all_words[i]
  //  last_w = "being"
    if(RiTa.isRhyme(all_words[i],last_word)){
         print(all_words[i],last_word,"yes")
        createP(all_words[i])
       }
  }
}

  
  
