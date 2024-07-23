let keycounter = 1;
var peer = new Peer('ambika-j');
let vid
let call
let ad
peer.on('open', function(id) {
  console.log('My peer ID is: ' + id);
});

peer.on('connection', function(conn) {

  conn.on('data', function(data) {
    // Will print 'hi!'
    console.log(data);
  });
});



function setup() {
  createCanvas(40, 40);
  // vid = createCapture(VIDEO)
  // vid.hide()
  // ad = select("#webcam")
  // ad.hide()
  // ad = 
}

function draw() {
  background(220);
}

function keyPressed() {
  if (key === 'c') {

    console.log("sent message")
    keycounter++
    var conn = peer.connect('ambika-a');
    // on open will be launch when you successfully connect to PeerServer
    conn.on('open', function() {
      // here you have conn.id
      conn.send('hi! this was key count - ' + keycounter);
    });


  }

  if (key === 'v') {
    var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
    getUserMedia({
      video: true,
      audio: true
    }, function(stream) {
      var call = peer.call('ambika-a', stream);
      console.log(stream)
      console.log(stream.id)
      call.on('stream', function(remoteStream) {
        // Show stream in some video/canvas element.
       
      });
    }, function(err) {
      console.log('Failed to get local stream', err);
    });
  }
}