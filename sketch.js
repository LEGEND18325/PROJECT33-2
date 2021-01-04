const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;

var Particle=[];
var Plinkos=[];

var Divisions1=[];

var divisionHeight=250;

var engine, world;
var ground;

var divisions;
var particles=null;
var plinkos;
var turn=0;
var score=0;
var gameState="play";



function setup() {
  createCanvas(665,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,660,1200,20);
  
   
  
 for (var j = 40; j <=width; j=j+50){
  Plinkos.push( new Plinko(j,75));
  }
  
  for (var j = 15; j <=width; j=j+50){
    Plinkos.push( new Plinko(j,175));
    }
    for (var j = 40; j <=width; j=j+50){
      Plinkos.push( new Plinko(j,275));
      }

      for (var j = 15; j <=width; j=j+50){
        Plinkos.push( new Plinko(j,375));
        }
  
    
}


function draw() {
  
  background(0); 
  Engine.update(engine); 
  ground.display(); 

height=660;
 for(var k = 0; k <=width;k = k + 80){
    Divisions1.push(divisions=new Divisions(k,height-(divisionHeight/2),10,divisionHeight));
    divisions.display();
 }
//drawSprites();
 for(var j = 0; j <Plinkos.length;j++){
  Plinkos[j].display();
  }
  text("score :"+score,20,30)
  if(particles!==null){
    particles.display();
    if(particles.body.position.y>450){
      if(particles.body.position.x<200){
score=score+500;
particles=null;
if(turn>=5){
  gameState="end";
}
if(particles.body.position.x>200&&particles.body.position.x<500){
  score=score+100;
  particles=null;
  if(turn>=5){
    gameState="end";
  }

  if(particles.body.position.x>500){
    score=score+200;
    particles=null;
    if(turn>=5){
      gameState="end";
    }

      }
    }
  }
 
}
function mousePressed(){
if(gameState!=="end"){
  turn++;
  particles=new Particles(mouseX,10,10,10)
}
}



 


  
  }
}