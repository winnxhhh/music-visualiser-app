function BouncySquares(){
    this.name = 'Bouncy Squares';

    this.draw = function(){
		//analyses sound frequency
        var freqs = fourier.analyze();
        var freqSquares = [];

		freqSquares.push(freqs);

		console.log(freqSquares);

		colorMode(HSB, 100);
	
		//draws out floating squares
        noStroke();
		for(var i = 0 ; i < freqs.length ; i++)
		{
			fill(i, 60, 360);         
			rect(i * 70, height - (freqs[i] * 2.5) - 100, 50, 50);
			rect(i * 70, height - (freqs[i] * 1.75) - 100, 50, 50);
			rect(i * 70, height - (freqs[i]) - 100, 50, 50);
			rect(i * 70, height - (freqs[i] * 0.5) - 100, 50, 50);
		}; 

		//draws base line for the squares
		stroke(255);
		line(0, height - 50, width, height - 50);

		colorMode(RGB);
    };
}