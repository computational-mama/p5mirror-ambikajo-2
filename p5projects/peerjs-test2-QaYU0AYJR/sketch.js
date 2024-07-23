var peer = new Peer('ambika-a'); 
let vid;
var conn = peer.connect('ambika-j');
// on open will be launch when you successfully connect to PeerServer
conn.on('open', function(){
  // here you have conn.id
  conn.send('hi!');
});

peer.on('open', function(id) {
  console.log('My peer ID is: ' + id);
});
peer.on('connection', function(conn) {
  conn.on('data', function(data){
    // Will print 'hi!'
    console.log(data);
  });
});

var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

    peer.on('call', function(call) {
  getUserMedia({video: true, audio: true}, function(stream) {
    call.answer(stream); 
    // Answer the call with an A/V stream.
    call.on('stream', function(remoteStream) {
      // Show stream in some video/canvas element.
      vid.show()
      // vid.play()
    });
  }, function(err) {
    console.log('Failed to get local stream' ,err);
  });
});

  


function setup() {
  createCanvas(400, 400);
  vid = select("#vid")
}

function draw() {
  background(220);
}