class Pigs{
    constructor (x, y){ 
        var pigOptions = {
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,30,30, pigOptions);
        World.add(world, this.body);
    }

    showPigs(){
        rectMode(CENTER);
        fill("green");
        rect(this.body.position.x,this.body.position.y, 30, 30);
        rect(this.body.position.x, this.body.position.y, 30, 30);
    }
}