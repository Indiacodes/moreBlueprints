class Bird {
    constructor (x, y){
        this.bird = Bodies.rectangle(x, y, 20, 20);
        World.add(world, this.bird);
    }

    showBirds(){
        rectMode(CENTER);
        fill("red");
        this.bird.position.x = mouseX;
        this.bird.position.y = mouseY;
        rect(this.bird.position.x, this.bird.position.y, 20, 20);
    }
}