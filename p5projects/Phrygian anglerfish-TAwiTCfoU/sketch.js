var peer = new Peer('ambi-calling')
let conn;
peer.on('open', function(id) {
  console.log('My peer ID is: ' + id);
});

peer.on('connection', function(c) {
  if (conn) {
    c.on('open', function() {
      c.send("Already connected");
      c.close();
    });
    return;
  }

  conn = c;

  finishConnect();
  
  console.log("conn to " + conn.peer);
});

var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

document.querySelector('button').addEventListener('click', async (e) => {
  const stream = await getUserMedia()
})

getUserMedia({video: true, audio: false}, 
             
  function(stream) {
  var call = peer.call('cc2', stream);
  call.on('stream', function(remoteStream) {
    // Show stream in some video/canvas element.
  });
}, function(err) {
  console.log('Failed to get local stream' ,err);
});

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

function keyPressed() {
  if (key === 'c') {

    conn = peer.connect('cc2');

    finishConnect();
  }
}

function finishConnect(){
  conn.on('data', function(data) {
    ox = data.x;
    oy = data.y;
    haveReceived = true;
  });
}