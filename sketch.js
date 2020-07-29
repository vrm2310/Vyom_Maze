var x,y;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tunnelImg,textImg,marioKeyImg;
var gameState="start";

//preload to load the pipe & text image
function preload()
{
	tunnelImg = loadImage("pipe_image.png");
	textImg = loadImage("message.png");
	marioKeyImg = loadImage("mario_key.jpg");
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	console.log(windowWidth);
	console.log(windowHeight);

	engine = Engine.create();
	world = engine.world;

	
	maze=new Maze(windowWidth-750,windowHeight-550);
	
mainground=new ground(windowWidth-750,windowHeight-350,400,20);

	key1=new Key(windowWidth-20,windowHeight-30,10);
	tunnel = createSprite(windowWidth-750,windowHeight-750);
	tunnel.addImage(tunnelImg);
	tunnel.scale=0.5;
	text = createSprite(windowWidth-1300,windowHeight-700);
	text.addImage(textImg);
	text.scale=0.4;
	MKey = createSprite(windowWidth-750,windowHeight-550);
	MKey.visible=false;

slingshot = new SlingShot(maze.body,key1.body);

	Engine.run(engine);
	a=0;
}


function draw() {
  
  background(0);
  if(gameState=="start")
  {

  fill("red");
 maze.display();
  fill("pink");
 
 mainground.display();

 key1.display();
 drawSprites();
slingshot.display();

a=a+0.2;

{
Matter.Body.setAngle(maze.body,a);

} 
}
else if(gameState=="end")
{
	MKey.visible=true;
	MKey.addImage(marioKeyImg);
	MKey.scale=0.5;
	drawSprites();
	tunnel.visible=false;
	text.visible=false;
}

}
  function keyPressed()
  {
	if(keyIsDown(UP_ARROW)){
		console.log(key1.body.position.x);
		if(key1.body.position!=null)
		{
			if(key1.body.position.x>windowWidth-756 && key1.body.position.x<windowWidth-736)
			{
				console.log(windowWidth-756);
				console.log(windowWidth-736)
				//slingshot.fly();
				gameState="end";
			}
		}
	}
  }