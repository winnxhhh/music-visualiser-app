function RidgePlots(){
    this.name = 'Ridge Plots';

    var startX;
    var startY;
    var endY;
    var spectrumWidth;
    var speed = 0.7;
    var output = [];

    this.onResize = function(){
        startX = width/5;
        endY = height/5;
        startY = height - endY;
        spectrumWidth = (width/5) * 3;
    };

    this.onResize();

    function addWave(){
        var w = fourier.waveform();
        var outputWave = [];
        var smallScale = 12;
        var bigScale = 50;

        for(var i = 0 ; i < w.length ; i++)
        {
            if(i % 20 == 0)
            {
                var x = map(i, 0, 1024, startX, startX + spectrumWidth);

                if(i < 1024 * 0.25 || i > 1024 * 0.75)
                {
                    var y = map(w[i], -1, 1, -smallScale, smallScale);
                    var o = {x: x, y: startY + y};

                    outputWave.push(o);
                }
                else
                {
                    var y = map(w[i], -1, 1, -bigScale, bigScale);
                    var o = {x: x, y: startY + y};

                    outputWave.push(o);
                };
            };
        };
        output.push(outputWave);
    };

    this.draw = function(){
        background(0);
        stroke(255);
        strokeWeight(2);

        if(frameCount % 15 == 0)
        {
            addWave();
        };

        for(var i = output.length - 1 ; i >= 0 ; i--)
        {
            var wave = output[i];

            colorMode(HSB, 360);
            fill(frameCount % 360, 360, 360);

            beginShape();
            for(var j = 0 ; j < wave.length ; j++)
            {
                wave[j].y -= speed;
                vertex(wave[j].x, wave[j].y);
            };
            endShape();

            if(wave[0].y < endY)
            {
                output.splice(i, 1);
            };
        };

        colorMode(RGB);
    };
}