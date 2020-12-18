const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3, bob4,bob5, roof;
var rope1, rope2, rope3, rope4, rope5;
var world;
//function preload()
//{
	
//}

function setup() {
    createCanvas(1600, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof = new Roof(width/2,height/4, width/7, 20);

   bobDiameter=40;

   startBobPositionX=width/2;
   startBobPositionY=height/4+500;



    bob1=new Bob(720, 675,20);
    bob2=new Bob(760, 675, 20);
    bob3=new Bob(800, 675, 20);
    bob4=new Bob(840, 675, 20);
    bob5=new Bob(880, 675, 20);

    var render = Render.create({
      element: document.body,
      engine: engine,
      options: {
        width: 1200,
        height: 700,
        wireFrames: false
      }
    });

    rope1 = new Rope(bob1.body,roof.body,-40,0);
    rope2 = new Rope(bob2.body,roof.body,-20,0);
    rope3 = new Rope(bob3.body,roof.body,0,0);
    rope4 = new Rope(bob4.body,roof.body,20,0);
    rope5 = new Rope(bob5.body,roof.body,40,0);

	Engine.run(engine);
  
}
//bobDiameter*2,0

function draw() {
  rectMode(CENTER);
  background(230);
  roof.display();
  bob1.display();
  bob2.display();
	bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprite()
}

function keyPressed(){
  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-45,y:-40});
}

