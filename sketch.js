
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ground;
var dustbin1;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground = new Ground(width/2,400,width,10);

	 dustbin1=new Dustbin ();
	 paper = new Paper();
	
	 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  ground.display();
  dustbin1.display();
  paper.display();
 
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:250,y:-300});
	}
}



