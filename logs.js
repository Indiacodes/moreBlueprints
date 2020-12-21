class Log{
    constructor(x, y, width, hieght, angle){
        this.log = Bodies.rectangle(x, y, width, hieght);
        this.width = width;
        this.hieght = hieght;
        this.angle = angle;
        Matter.Body.setAngle(this.log, this.angle);
        World.add(world, this.log);
    }

    showLogs(){
        push();
        translate(this.log.position.x, this.log.position.y);
        rotate(this.angle);
        rectMode(CENTER);
        fill("brown");
        rect(0, 0, this.width, this.hieght);
        pop();
    }
}