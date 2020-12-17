const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon, polygonImage;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16,
box17, box18, box19, box20, box21, box22, box23, box24, box25;
var slingshot;
var ground;

function preload() {
  polygonImage = loadImage("polygon.png");
}
 
function setup() {
    createCanvas(1200,700);

    engine = Engine.create();
    world = engine.world;

   polygon = Bodies.circle(50,200,20);
   /*polygon.body.addImage(polygonImage);
   polygon.body.scale = 0.1;*/

   World.add(world,polygon);

   slingshot = new SlingShot(polygon.body,{x:100,y:200});
}

function draw() {
   drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
