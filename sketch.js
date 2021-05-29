var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


 var dustbin
 var dustbin1
 var dustbin2
 var paper
 var paperimg
  
function preload()
{
  
   
}

function setup() {
	createCanvas(1600, 300);
	 rectMode(CENTER)
  
	groundSprite=createSprite(width/2, height-15, width,18);
	groundSprite.shapeColor=color(230,230,0)

	engine = Engine.create();
	world = engine.world;

	//Create a ground
  ground= Bodies.rectangle(width/2,250,width,17,{isStatic:true});
   World.add(world,ground);

	Engine.run(engine);

   dustbin= new Dustbin(1120,189,20,162);
   dustbin1=new Dustbin(1200,270,180,12);
   dustbin2=new Dustbin(1289,189,20,162);
   paper= new Paper(300,3,20);
    
}


function draw() {
  
  background(225);
    

  paper.display()
  drawSprites();

  dustbin.display()
  dustbin1.display()
  dustbin2.display()
  
   
  


}

 function keyPressed(){
    if (keyCode=== UP_ARROW){

      Matter.Body.applyForce(paper.body,paper.body.position,{x:80,y:-80})
      

    }
 }

