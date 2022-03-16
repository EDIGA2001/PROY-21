
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let engine;
let world;
var piso, pared1, pared2;
var ball;

function setup() {
	createCanvas(1200, 800);
	engine = Engine.create();
	world = engine.world;
	piso=new piso(700,50,600,20);
	pared1=new piso(1100,600,20,120);
	pared2=new piso(1200,600,20,120);
	var ball_options={
		isStatic:false,
		restitutuion:0.3,
		friction:0,
		density:1.2
	}

	//crear los cuerpos aquí.
	ball=Bodies.circle(200,100,20,ball_options);
	world.add(world,ball);
	//Engine.run(engine);
    rectMode(CENTER);
	ellipseMode(RADIUS);
}

function draw() {
  background(0);
  ellipse(ball.position.x,ball.position.y,20);
  piso.show();
  suelo.show();
  pared1.show();
  pared2.show();
  Engine.update(engine);
  //drawSprites(); 
}
function fuerzaball() {
	if (KeyCode===UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:-0.05},{x:0.05,y:0})
	}
}

//no sabemos en que parte se manda  llamar a funcion fuerzaball