
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3;
var world,boy;
var chain1,stone;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,100,30);
	mango3=new mango(1100,250,30)

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);
    stone=new Stone(250,480,30);
	chain1=new Chain(stone.body,{x:240,y:420});
}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  stone.display();
  chain1.display();
 

  groundObject.display();
}
function mouseDragged(){ 
	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
	} 
	function mouseReleased(){
		chain1.fly();
		//Matter.Body.setPosition(stone.body, {x: 1000 , y: 100});
		} 
		function keyPressed(){ 
			if(keyCode === 32){ 
				chain1.attach(stone.body);
				} 
			   }

