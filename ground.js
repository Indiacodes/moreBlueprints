class Ground {
    constructor(x,y){

        var groundOption = {
            isStatic: true
        }

        this.ground = Bodies.rectangle(x,y,400,10,groundOption);
        World.add(world, this.ground);
    }

    showGround()
    {
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,400,10);
    }
}