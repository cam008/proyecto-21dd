
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//crear los cuerpos aquí.
	var ball_options={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

		this.body.rectangle(x,y,width,height,options);
		World.add(word, this.body.rectangle);
	Engine.run(engine);
  
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  ball.display()
}
function keyPressed() {
	if (keyDown(UP_ARROW)){
		Matter.Body.applyForce(ball, ball.position,{x:85,y:-85});
	}
}


