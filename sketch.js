const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particle;
var ground;
var sling;
var shooter;



function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  
  particle1 = new Particle(300,50,20);
  particle2 = new Particle(340,50,20);
  particle3 = new Particle(380,50,20);
  particle4 = new Particle(420,50,20);
  particle5 = new Particle(460,50,20);
  particle6 = new Particle(500,50,20);

  shooter = new Shooter(400,200,45);
  sling = new Sling(shooter.body,{x:400,y:200});
}

function draw() {
  background(255,255,255);
  Engine.update(engine);

  particle1.display();
  particle2.display();
  particle3.display();
  particle4.display();
  particle5.display();
  particle6.display();
  

  shooter.display();

  sling.display();







  
  
  
  
  
  drawSprites();
}


function mouseDragged(){
  Matter.Body.setPosition(shooter.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    sling.fly();
}
