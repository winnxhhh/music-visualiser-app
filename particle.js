function Particle(x, y, colour, angle, speed){

    var x = x;
    var y = y;
    var angle = angle;
    this.speed = speed;
    this.colour = colour;
    this.age = 255;

    //draws triangles with random colours
    this.draw = function()
    {
        push();
        this.update();

        var r = red(this.colour) - (255 - this.age);
        var g = green(this.colour) - (255 - this.age);
        var b = blue(this.colour) - (255 - this.age);

        var c = color(r, g, b);
        fill(c);
        
        this.age -= 1;

        noStroke();
        triangle(x, y, x + 10, y - 15, x + 20, y);

        pop();
    }

    this.update = function()
    {
        push();
        this.speed -= 0.1;

        x += cos(angle) * speed + noise(frameCount) * 10;
        y += sin(angle) * speed + noise(frameCount) * 10;
        pop();
    }
}