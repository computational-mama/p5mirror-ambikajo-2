// This Sketch uses the 'SimpleSimplePeer' Library
// how to get mysocketId?

let myVideo;
let friends = [];
let myName = "";
let ssp;
let myPositionX = 0;
let myPositionY = 0;

let constraints = {
  video: {
    width: {
      ideal: 160
    },
    height: {
      ideal: 120
    },
    frameRate: {
      ideal: 10
    }

  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  myVideo = createCapture(constraints,
    function(stream) {
      ssp = new SimpleSimplePeer(this, "CAPTURE", stream, "friendsSpace2")
      ssp.on('stream', gotStream);
      // set up a data channel:
      ssp.on('data', gotData);
    
    }
  );
  myVideo.muted = true;
  myVideo.hide();
}

function draw() {
  background(220, 100, 250);
  image(myVideo, myPositionX,myPositionY, 160,120);
  for (let i = 0; i < friends.length; i++) {
    friends[i].display();
  }
}

// We got a new stream!
function gotStream(stream) {
  friends.push(new Friend(stream))
}

function gotData(data) {
  console.log(data);

  // If it is JSON, parse it
  let parsedData = JSON.parse(data);
  let ourFriendsName = parsedData.name;
  let ourFriendsPositionX = parsedData.x;
  let ourFriendsPositionY = parsedData.y;
  
  for (let i = 0; i < friends.length; i++){
    console.log(friends[i]);
    if (friends[i].name === ourFriendsName){
      friends[i].x = ourFriendsPositionX;
      friends[i].y = ourFriendsPositionY;
    }
  }
}

function mousePressed() {
  console.log(ssp.socket.id);
  myPositionX = mouseX;
  myPositionY = mouseY;
  
  let dataToSend = {
    name: ssp.socket.id,
    x: myPositionX,
    y: myPositionY
  };

  // Have to send string
  ssp.send(JSON.stringify(dataToSend));
}



class Friend {
  constructor(stream) {
    this.x = 0;
    this.y = 0;
    this.stream = stream;
    this.name = stream.elt.id;
  }

  display() {
    image(this.stream, this.x, this.y, 160, 120);
  }
}