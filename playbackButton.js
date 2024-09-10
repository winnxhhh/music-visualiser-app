//displays and handles clicks on the playback button.
function PlaybackButton(){
	
	this.x = 100;
	this.y = 30;
	this.width = 30;
	this.height = 30;

	//flag to determine whether to play or pause after button click and
	//to determine which icon to draw
	this.playing = false;	

	//draws play and stop buttons
	this.draw = function(){
		if(this.playing)
		{
			rect(this.x, this.y, this.height, this.height);
		}
		else
		{	
			triangle(this.x, this.y, this.x + this.width, this.y + this.height/2, this.x, this.y+this.height);
		};
	};

	//checks for clicks on the button, starts or stops playback.
	//@returns true if clicked false otherwise.
	this.hitCheck = function(){
		if(mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height)
		{
			
			if(sound1.isPlaying() || sound2.isPlaying() || sound3.isPlaying()) 
			{
                sound1.stop();
                sound2.stop();
                sound3.stop();
            } 
			else if(!sound2.isPlaying() || !sound3.isPlaying())
			{
				sound1.loop();
				console.log('sound 1')
            }

  			this.playing = !this.playing;
  			return true;
		};
			return false;
	};
}