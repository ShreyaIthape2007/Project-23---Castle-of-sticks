const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    
    ground=new Blocks(200,380,1300,10,{isStatic:true});
    
    block1=new Blocks(100,200,50,300);
    block2=new Blocks(500,200,50,300);
    block3=new Blocks(200,200,50,250);
    block4=new Blocks(400,200,50,250);
    block5=new Blocks(300,200,50,100);
    block6=new Blocks(300,0,140,40,{isStatic:false});
    block7=new Blocks(100,0,100,40,{isStatic:false});
    block8=new Blocks(500,0,100,40,{isStatic:false});
    block9=new Blocks(300,0,10,40,{isStatic:false});
    




}

    

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();

    
   


  


    
}