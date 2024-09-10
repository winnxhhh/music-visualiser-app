function Firework(colour, x, y){
    var colour = colour;
    var x = x;
    var y = y;

    var particles = [];
    this.depleted = false;

    //draws out particles
    for(var i = 0 ; i < 360 ; i += 18)
    {
        particles.push(new Particle(x, y, colour, i, 10));
    };

    //draws a single firework
    this.draw = function(){
        push();
        for(var i = 0 ; i < particles.length ; i++)
        {
            particles[i].draw();
        };

        if(particles[0].speed <= 0)
        {
            this.depleted = true;
        };
        pop();
    };
}