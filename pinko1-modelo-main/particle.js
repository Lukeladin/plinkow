class Particle {
    constructor(x, y) {
        // var options = {
        //     restitution: 1,
        //     friction: 0,

        // }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r);
        
        World.add(world, this.body);
    }
    show() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

};