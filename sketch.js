const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ball,ground;
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  
  var ground_options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,800,5,ground_options)
  World.add(world,ground)

  var ball_options={
    restitution:0.5
  }
  ball=Bodies.circle(200,200,15,ball_options)
  World.add(world,ball)
}

function draw() {
  background(255,255,255); 
  Engine.update(engine) 
  rect(ground.position.x,ground.position.y,400,5)
  ellipse(ball.position.x,ball.position.y,15,15)
  drawSprites();
}