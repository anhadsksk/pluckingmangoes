class Stone {

    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2

        }
        this.body = Bodies.circle(x, y, radius, options);
        World.add(world, this.body);
        this.radius = this.radius / 2;
        this.image = loadImage("stone.png");
    }

    display() {
        //console.log("working");
        fill('red');
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 50, 50);
    }

}