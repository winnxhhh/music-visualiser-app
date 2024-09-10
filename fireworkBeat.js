function FireworkBeat(){

    this.name = 'Firework';

    var beatDetect;
    var fireworks;

    this.setup = function(){
        push();
        background(0);
        angleMode(DEGREES);
        frameRate(60);

        beatDetect = new BeatDetect();
        fireworks = new Fireworks();
        pop();
    };

    this.setup();

    this.draw = function(){
        push();
        background(0);

        var spectrum = fourier.analyze();

        if(beatDetect.detectBeat(spectrum))
        {
            fireworks.addFirework();
        };

        fireworks.update();
        pop();
    };
}