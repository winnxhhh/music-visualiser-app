//global for the controls and input 
var controls = null;

//store visualisations in a container
var vis = null;

//variable for the p5 sound object
var sound = null;

//variable for p5 fast fourier transform
var fourier;
var beatDetect;

function preload(){
	//preload the three songs
	sound1 = loadSound('assets/hipsybeats-stomp.mp3');
	sound2 = loadSound('assets/vlad-gluschenko-afternoon.mp3');
	sound3 = loadSound('assets/ethereal88-rising-dawn.mp3');
}

function setup(){
	 createCanvas(windowWidth, windowHeight);
	 background(0);
	 controls = new ControlsAndInput();

	 //instantiate the fft object
	 fourier = new p5.FFT();

	 //create a new visualisation container and add visualisations
	 vis = new Visualisations();
	 vis.add(new Spectrum());
	 vis.add(new WavePattern());
	 vis.add(new Needles());
	 vis.add(new RidgePlots());
	 vis.add(new FireworkBeat());
	 vis.add(new BouncySquares());
}

function draw(){
	background(0);
	//draw the selected visualisation
	vis.selectedVisual.draw();
	//draw the controls on top.
	controls.draw();
}

function mouseClicked(){
	controls.mousePressed();
}

function keyPressed(){
	controls.keyPressed(keyCode);
}

//when the window has been resized. Resize canvas to fit 
//if the visualisation needs to be resized call its onResize method
function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
	3
	if(vis.selectedVisual.hasOwnProperty('onResize'))
	{
		vis.selectedVisual.onResize();
	};
}