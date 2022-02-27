
const Engine = Matter.Engine; 
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var rand;
 var Snow = []
var bgImage;
function preload() {
  bgImage = loadImage("snow2.jpg")
}
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    
}

function draw(){
    background(bgImage);
    Engine.update(engine);
    rand = Math.round(random(1,4))
    if(frameCount%5==0){
    Snow.push(new snow(random(0,800),30,30))
    }
    for (x = 0; x<Snow.length;x++)
    {Snow[x].display();}
   drawSprites(); 
}
