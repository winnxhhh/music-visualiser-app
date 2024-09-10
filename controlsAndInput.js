//Constructor function to handle the onscreen menu, keyboard and mouse
//controls
function ControlsAndInput(){
	
	this.menuDisplayed = false;
	this.legendDisplayed = false;
	
	//playback button displayed in the top left of the screen
	this.playbackButton = new PlaybackButton();

	//left and right music navigation buttons displayed
	this.navigationButtons = new NavigationButtons();

	this.mousePressed = function(){
		//check if the playback button has been clicked
		this.playbackButton.hitCheck();

		//check if the navigation buttons have been clicked
		this.navigationButtons.hitCheck();
	};

	//responds to keyboard presses
	//spacebar key to show visualisations menu
	this.keyPressed = function(keycode){
		console.log(keycode);
		if(keycode == 32)
		{
			this.menuDisplayed = !this.menuDisplayed;
		};

	//number keys to select visualisations
		if(keycode > 48 && keycode < 58)
		{
			var visNumber = keycode - 49;
			vis.selectVisual(vis.visuals[visNumber].name); 
		};
	
	//enter key to show legend menu
		if(keycode == 13)
		{
			this.legendDisplayed = !this.legendDisplayed;
		};
	};

	//draws the playback button and potentially the menu
	this.draw = function(){
		push();
		fill("white");
		stroke("black");
		strokeWeight(2);
		textSize(30);

		//playback button 
		this.playbackButton.draw();

		//navigation buttons
		this.navigationButtons.draw();

		//only draw the menu if menu displayed is set to true.
		if(this.menuDisplayed)
		{
			text("Select a visualisation:", width/4, 50);
			this.menu();
		};	

		//only draw the legend if legend displayed is set to true
		if(this.legendDisplayed)
		{
			this.legend();
		}
		else
		{
			strokeWeight(2);
			textSize(30);
			fill(255);
			text('Press ENTER key to show legend', 800, 50);
		};

		//only draw the title of the song and the name of the artist if their respective songs are playing
		if(sound1.isPlaying() || sound2.isPlaying() || sound3.isPlaying())
		{
			this.music();
		};
		pop();

	};

	this.menu = function(){
		//draw out menu items for each visualisation
		textSize(25);
        for(var i = 0 ; i < vis.visuals.length ; i++)
		{
            text((i + 1) + ": " + vis.visuals[i].name, width/4, 50 + (i + 1) * 30);
        };
	};

	this.legend = function(){
		//draws out legend items
		strokeWeight(2);
		textSize(30);
		fill(255);
		text('Legend:', 800, 50);

		strokeWeight(2);
		textSize(25);
		fill(255);
		text('SPACEBAR key: open/close visualisations menu', 800, 50 + 30);

		strokeWeight(2);
		textSize(25);
		fill(255);
		text('ENTER key: open/close legend menu', 800, 50 + 60);

		strokeWeight(2);
		textSize(25);
		fill(255);
		text('Play button: plays sound', 800, 50 + 90);

		strokeWeight(2);
		textSize(25);
		fill(255);
		text('Stop button: stops current sound and loops back to first sound', 800, 50 + 120);

		strokeWeight(2);
		textSize(25);
		fill(255);
		text('Right navigation button: plays next sound', 800, 50 + 150);

		strokeWeight(2);
		textSize(25);
		fill(255);
		text('Left navigation button: plays previous sound', 800, 50 + 180);
	};

	this.music = function(){
		//draws out name of song and artist depending on which song is playing
		strokeWeight(2);
		textSize(30);
		fill(255);
		text('Song:', width/3, height - 10);

		if(sound1.isPlaying())
		{
			strokeWeight(2);
			textSize(30);
			fill(255);
			text('Stomp by Hipsybeats', width/3 + 90, height - 10);
		}
		else if(sound2.isPlaying())
		{
			strokeWeight(2);
			textSize(30);
			fill(255);
			text('Afternoon by Vlad Gluschenko', width/3 + 90, height - 10);
		}
		else if(sound3.isPlaying())
		{
			strokeWeight(2);
			textSize(30);
			fill(255);
			text('Rising Dawn by Ethereal88', width/3 + 90, height - 10);
		};
	};
}



