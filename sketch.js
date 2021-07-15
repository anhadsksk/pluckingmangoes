
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy1, sling1, tree, mango1, mango2, mango3, mango4, mango5, ground, stone1;
function preload()
{

}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(800, 200, 1, 1);
	
	boy1 = new Boy(200, 500, 20);
	stone1 = new Stone(130, 438, 5);
	mango1 = new Mango(900, 325, 40);
	mango2 = new Mango(1000, 325, 40);
	mango3 = new Mango(975, 260, 40);
	mango4 = new Mango(1100, 350, 40);
	mango5 = new Mango(1075, 280, 40);
	sling1 = new SlingShot(stone1.body, {x: 130, y: 440});
 	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 tree.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 boy1.display();
 sling1.display();
 stone1.display();
 detectCollision(stone1, mango1);
 detectCollision(stone1, mango1);
 detectCollision(stone1, mango1);
 detectCollision(stone1, mango1);
 detectCollision(stone1, mango1);
}

function mouseDragged()
{
	Matter.Body.setPosition(stone1.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	sling1.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone1.body, {x:235, y:420}) 
	  launcherObject.attach(stone1.body);
	}
  }

  function detectCollision(stone1,mango){
	
  mangoBodyPosition=mango.body.position
  stoneBodyPosition=stone1.body.position
  console.log(stone1.body.position);
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
   	if(distance<=mango.radius+stone1.radius)
    {
      	  Matter.Body.setStatic(mango.body,false);

    }

  }
