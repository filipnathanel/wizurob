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


function setup(){
	createCanvas(getViewportDimensions().width,getViewportDimensions().height);
	mic = new p5.AudioIn();
	mic.start();
}

function draw(){

	var vol = mic.getLevel();
	var maxLev = mic.amplitude.volMax * 100;

	// console.log(mic.amplitude.volMax * 100);
	// console.log(vol*100);

	var red = 255 / (255 * (maxLev/vol)) * 100;
	var green = 22;
	var blue = 120; 

	console.log(red)

	if (mouseIsPressed){
		fill(255 * red,120 * red,255);
	} else {
		fill(255);
	}
	ellipse(mouseX, mouseY, 80+80*red, 90);
}
