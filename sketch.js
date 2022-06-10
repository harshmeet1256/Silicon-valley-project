var bg, bgImg, bgImg1;
var ghost,ghostImg;
var tower, towerImg;
var coin, coinImg;
var restart, restartImg;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var invisibleBlockGroup, invisibleBlock;

var gameState="intro";
var gameLevel = "start";


function preload(){
  bgImg=loadImage("Images/background2.jpg");
  bgImg1=loadImage("Images/background1.jpg");
  ghostImg=loadAnimation("Images/b1img.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  towerImg=loadImage("Images/tower.JPG");
  coinImg=loadImage("Images/coin.png");
  restartImg=loadImage("Images/restart.png");
}
function setup() {
  createCanvas(1400,700);

  spookySound.loop();

  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();

  tower = createSprite(800,500,80,80);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  ghost = createSprite(400,200,50,50);
  ghost.scale = 0.3;
  ghost.addImage("ghost", ghostImg);
 
  coin=createSprite(600,60);
  coin.addImage(coinImg);
  coin.scale=0.1;

  restart = createSprite(300,140);
  restart.addImage(restartImg);
  
}

function draw() {
  //background(bgImg); 

  drawSprites();

  if(gameState==="intro"){

    intro();

    console.log("yess yess")
    ghost.visible=false;
    tower.visible=false;
    coin.visible=false;
    restart.visible=false;

    gameState = "pause"
    
  }

  if(keyDown("space")){
    intro1();
   gameLevel= "level1"
  }
   

  if(keyDown("s")){
    console.log(gameLevel)
    console.log(gameState)
    ghost.visible=true;
    tower.visible=true;
    coin.visible=true;
    restart.visible=false;

    level1();
  }

  if(gameState==="intro1"){
    intro2();
    ghost.visible=false;
    tower.visible=false;
    coin.visible=false;
    restart.visible=false;

    if(keyDown("space")){
      gameState = level2
     }
       
  }

  if(gameLevel === 2){
    level2();
  }

  if(gameState==="intro2"){
    intro3();
    ghost.visible=false;
    tower.visible=false;
    coin.visible=false;
    restart.visible=false;
    if(keyDown("space")){
      gameState = level3
     }
      
  }

  if(gameLevel === 3){
    level3();
  }
}