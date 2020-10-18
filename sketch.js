var score;
var monkey , monkey_running;
var bananaGroup,banana;
var  obstacleGroup,obstacle;
var survivaltime;
var ground;

function preload(){
  
  
  monkey_running =    loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}
function setup() {
  createCanvas(400,400)
  monkey = createSprite(50,350,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(150,385,500,10);
  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
  //monkey.debug = true;
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  survivaltime = 0;
  score=0;
}


function draw() {
  background("256");
  ground.velocityX = -3;
  if(ground.x >0){
    ground.x = ground.width/2;
  }
  if(keyDown("space")&&monkey.y>=100){
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY+0.8;
  monkey.collide(ground);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score :"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  text("Survival Time: "+survivaltime,100,50);
  survivaltime = Math.ceil(frameCount/frameRate())
  
  spawnBanana();
  spawnObstacles(); 
  drawSprites();
}
function spawnBanana(){
  if(frameCount%80===0){
    var banana1 = createSprite(400,350,20,20);
    banana1.y = Math.round(random(120,200));
    banana1.addImage(bananaImage);
    banana1.scale = 0.1;
    banana1.velocityX = -3;
    banana1.lifetime = 250;
    bananaGroup.add(banana1);
  }
}
function spawnObstacles(){
  if(frameCount%300===0){
    var obstacle1 = createSprite(400,370,20,20);
    obstacle1.velocityX = -6;
    obstacle1.addImage(obstacleImage);
    obstacle1.scale = 0.1;
    obstacle1.lifetime = 200;
    obstacleGroup.add(obstacle1);
    
  }
}