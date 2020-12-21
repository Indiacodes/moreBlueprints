const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, ground1, log1, log2;
var bird1, pig1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    //box1 = new Box(200,300,50,50);
    //box2 = new Box(200,230,50,50);

    log1 = new Log(170,360, 20,50, 45);
    log2 = new Log(230,360,20,50, -45);
    ground1 = new Ground(200,390);
    
    bird1 = new Bird(60, 200);
    pig1 = new Pigs(200,200);
    console.log(pig1);

}

function draw(){
    background(0);
    Engine.update(engine);
    
    //box1.display();
    ground1.showGround();
    //box2.display();
    bird1.showBirds();
    log1.showLogs();
    log2.showLogs();
    pig1.showPigs();
}