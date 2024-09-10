function NavigationButtons(){

    this.x = 100;
	this.y = 30;
	this.width = 30;
	this.height = 30;

    this.playing = false;

    //draws left and right navigation buttons
	this.draw = function(){
        fill(255);
        // right arrow icon control
		triangle(this.x + 50, this.y + 5, this.x + this.width + 40, this.y + this.height/2, this.x + 50, this.y + this.height - 5);
		triangle(this.x + 60, this.y + 5, this.x + this.width + 50, this.y + this.height/2, this.x + 60, this.y + this.height - 5);

		// left arrow icon control
		triangle(this.x - 20, this.y + 5, this.x + this.width - 70, this.y + this.height/2, this.x - 20, this.y + this.height - 5);
		triangle(this.x - 30, this.y + 5, this.x + this.width - 80, this.y + this.height/2, this.x - 30, this.y + this.height - 5);
    };

    //checks when mouse clicks the navigation buttons and ensures the right song is paused and played accordingly
    this.hitCheck = function(){
        //determines which song plays when the right navigation button is pressed during a certain song
        if(mouseX > this.x + 50 && mouseX < this.x + this.width + 50 && mouseY > this.y + 5 && mouseY < this.y + this.height - 5 && sound1.isPlaying())
        {
			sound1.stop();
            sound3.stop();
			sound2.loop();

            console.log('right nav button');
		}
        else if(mouseX > this.x + 50 && mouseX < this.x + this.width + 50 && mouseY > this.y + 5 && mouseY < this.y + this.height - 5 && sound2.isPlaying())
        {
            sound1.stop();
            sound2.stop();
			sound3.loop();

            console.log('right nav button');
        }
        else if(mouseX > this.x + 50 && mouseX < this.x + this.width + 50 && mouseY > this.y + 5 && mouseY < this.y + this.height - 5 && sound3.isPlaying())
        {
            sound3.stop();
            sound2.stop();
			sound1.loop();

            console.log('right nav button');

            this.playing = !this.playing;
            return true;
        };
    
        //determines which song plays when the left navigation button is pressed during a certain song
        if(mouseX < this.x - 20 && mouseX > this.x + this.width - 80 && mouseY > this.y + 5 && mouseY < this.y + this.height - 5 && sound1.isPlaying())
            {
            sound1.stop();
            sound2.stop();

            sound3.loop();
    
            console.log('left nav button');
        }
        else if(mouseX < this.x - 20 && mouseX > this.x + this.width - 80 && mouseY > this.y + 5 && mouseY < this.y + this.height - 5 && sound3.isPlaying())
        {
            sound1.stop();
            sound3.stop();
            sound2.loop();

            console.log('left nav button');
        }
        else if(mouseX < this.x - 20 && mouseX > this.x + this.width - 80 && mouseY > this.y + 5 && mouseY < this.y + this.height - 5 && sound2.isPlaying())
        {
            sound3.stop();
            sound2.stop();
            sound1.loop();

            console.log('left nav button');
    
            this.playing = !this.playing;
            return true;
        }; 
        return false;
    };
}