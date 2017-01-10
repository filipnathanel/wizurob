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
}

function setup() {
  createCanvas(vw.width,vw.height);
  mic = new p5.AudioIn();
  mic.start();
  background(255);
  noStroke();
}

function draw() {
  var vol = mic.getLevel();
  var maxLev = mic.amplitude.volMax;

  var volNormalised = vol/maxLev;

  background(255);
  var fromm = color(255, 0, 0, 0.2 * 255);
  var to = color(0, 0, 255, volNormalised * 235);
  var c1 = lerpColor(fromm, to, .33);
  var c2 = lerpColor(fromm, to, .66);
  for (var i = 0; i < 15; i++) {
    fill(fromm);
    quad(random(vw.width*0.2, vw.height*0.20), random(height)*volNormalised,
         random(vw.width*0.2, vw.height*0.20), random(height)*volNormalised,
         random(vw.width*0.2, vw.height*0.20), random(height)*volNormalised,
        random(vw.width*0.2, vw.height*0.2), random(height)*volNormalised);
    fill(c1);
    quad(random(vw.width/10, vw.height*0.3), random(height),
         random(vw.width/10, vw.height*0.3), random(height),
         random(vw.width/10, vw.height*0.3), random(height), 
         random(vw.width/10, vw.height*0.3), random(height));
    fill(c2);
    quad(random(vw.width*0.90, 580), random(height), 
         random(vw.width*0.90, 580), random(height),
         random(vw.width*0.90, 580), random(height), 
         random(vw.width*0.90, 580), random(height));
    fill(to);
    quad(random(vw.width*0.2, 760), random(height), 
         random(vw.width*0.2, 760), random(height),
         random(vw.width*0.2, 760), random(height), 
         random(vw.width*0.2, 760), random(height));
  }
  frameRate(5);
}