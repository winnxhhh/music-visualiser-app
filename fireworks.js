function Fireworks(){
    var fireworks = [];

    //adds fireworks
    this.addFirework = function(){
        push();
        var fColour = null;

        var red = random(0, 255);
        var green = random(0, 255);
        var blue = random(0, 255);

        console.log(red + ' ' + green + ' ' + blue);
        fColour = color(red, green, blue);

        //makes sure that fireworks are randomly spaced out throughout the window
        var fX = random(width * 0.2, width * 0.8);
        var fY = random(height * 0.2, height * 0.8);

        var firework = new Firework(fColour, fX, fY);

        fireworks.push(firework);
        pop();
    };

    this.update = function(){
        push();
        for(var i = 0 ; i < fireworks.length ; i++)
        {
            fireworks[i].draw();

            if(fireworks[i].depleted)
            {
                fireworks.splice(i, 1);
            };
        };
        pop();
    };
}

