var mic

function getViewportDimensions() {
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = e.clientWidth || g.clientWidth,
        y = e.clientHeight || g.clientHeight;
    return {
        width: x,
        height: y
    }
}

var vw = getViewportDimensions();

var yoff = 0.0;        // 2nd dimension of perlin noise

function setup() {
  createCanvas(vw.width,vw.height);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {

  background(0,200,220);

  var vol = mic.getLevel();
  var maxLev = mic.amplitude.volMax;

  var volNormalised = vol/maxLev;


  fill( 20 + , 70 + (200*volNormalised),180 );
  // We are going to draw a polygon out of the wave points
  beginShape(); 
  
  var xoff = 0;       // Option #1: 2D Noise
  // var xoff = yoff; // Option #2: 1D Noise
  
  // Iterate over horizontal pixels
  for (var x = 0; x <= width; x += 10) {
    // Calculate a y value according to noise, map to 
    
    // Option #1: 2D Noise
    var y = map(noise(xoff, yoff), 0, 1, mouseY,mouseX);

    // Option #2: 1D Noise
    // var y = map(noise(xoff), 0, 1, 200,300);
    
    // Set the vertex
    vertex(x, y); 
    // Increment x dimension for noise
    xoff += 0.05;
  }
  // increment y dimension for noise
  yoff += 0.01 + volNormalised/20;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}