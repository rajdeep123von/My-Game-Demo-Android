var PLAY = 1;
var END = 0;
var gameState = PLAY;

var sea3, invisibleGround, groundImage,sea,clouds1,clouds2;
var clouds3,sky,tile,fg,farg;
var cloudsGroup, cloudImage,cloud;
//var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;
var skys=[];
var skys1,skys2,sky3,skys4,skys5,skys6,skys7,skys8,skys9,skys10,skys11,skys12;
var score= 0;
var gameover, restart, gameoverimage, restartimage;
var b=-64 ;
var tiles;
var spike;
var run_img,idle_img,jump_img,land_img;
var plr,ship_img,big_img;
var bird_img;

var music1;

var Button;
function preload(){
  //trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
 // trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("./Obj/sea.png");
  
 // cloudImage = loadImage("../Obj/cloud.png");
  
  gameoverimage = loadImage("gameOver.png");
  restartimage = loadImage("restart.png");
 
  clouds = loadImage("./Obj/clouds.png");
  sky = loadImage("./Obj/sky.png");
  tile= loadImage("./Obj/tile.png");
  fg= loadImage("./Obj/far-grounds.png");
  run_img = loadAnimation("./Characters/Run/1.png","./Characters/Run/2.png","./Characters/Run/3.png","./Characters/Run/4.png","./Characters/Run/5.png","./Characters/Run/6.png","./Characters/Run/7.png","./Characters/Run/8.png");
  idle_img= loadAnimation("./Characters/Idle/1.png","./Characters/Idle/2.png","./Characters/Idle/3.png","./Characters/Idle/4.png","./Characters/Idle/5.png","./Characters/Idle/6.png","./Characters/Idle/7.png","./Characters/Idle/8.png","./Characters/Idle/9.png","./Characters/Idle/10.png","./Characters/Idle/11.png","./Characters/Idle/12.png")
  jump_img = loadImage("./Characters/jump.png");
  land_img = loadImage("./Characters/landing.png");
  ship_img = loadImage("./Obj/Ship.png");
  big_img = loadImage("./Obj/bigt.png");
  bird_img = loadAnimation("./Characters/Bird/1.png","./Characters/Bird/2.png","./Characters/Bird/3.png","./Characters/Bird/4.png");
  music1 = loadSound("background.mp3");
  spike_img= loadImage("./Obj/spike.png");
 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
   tilesGroup = new Group();
  tiles1Group = new Group();
  tiles2Group = new Group();
  tiles3Group = new Group();
  birdsGroup = new Group();
  objGroup = new Group();
  skygroup = new Group();
  cloudGroup = new Group();

  skys1 = createSprite(width-490,height-56,400,20);
  skys1.addImage("ground",sky);  
  skys1.scale = 2;
  skygroup.add(skys1);

  skys2 = createSprite(width-490,height-168,400,20);
  skys2.addImage("ground",sky);  
  skys2.scale = 2;
  skygroup.add(skys2);

  skys3 = createSprite(width-490,height-280,400,20);
  skys3.addImage("ground",sky);  
  skys3.scale = 2;
  skygroup.add(skys3);

  skys4 = createSprite(width-490,height-392,400,20);
  skys4.addImage("ground",sky);  
  skys4.scale = 2;
  skygroup.add(skys4);

  skys5 = createSprite(width-490,height-504,400,20);
  skys5.addImage("ground",sky);  
  skys5.scale = 2;
  skygroup.add(skys5);

  skys6 = createSprite(width-490,height-616,400,20);
  skys6.addImage("ground",sky);  
  skys6.scale = 2;
  skygroup.add(skys6);

  skys7 = createSprite(width-490,height-728,400,20);
  skys7.addImage("ground",sky);  
  skys7.scale = 2;
  skygroup.add(skys7);

  skys8 = createSprite(width-490,height-840,400,20);
  skys8.addImage("ground",sky);  
  skys8.scale = 2;
  skygroup.add(skys8);

  skys9 = createSprite(width-490,height-952,400,20);
  skys9.addImage("ground",sky);  
  skys9.scale = 2;
  skygroup.add(skys9);

  skys10= createSprite(width-490,height-1064,400,20);
  skys10.addImage("ground",sky);  
  skys10.scale = 2;
  skygroup.add(skys10);

  skys11 = createSprite(width-490,height-1176,400,20);
  skys11.addImage("ground",sky);  
  skys11.scale = 2;
  skygroup.add(skys11);

  skys12 = createSprite(width-490,height-1288,400,20);
  skys12.addImage("ground",sky);  
  skys12.scale = 2;
  skygroup.add(skys12);

  skys13 = createSprite(width-490,height-1400,400,20);
  skys13.addImage("ground",sky);  
  skys13.scale = 2;
  skygroup.add(skys13);

  skys14 = createSprite(width-490,height-1512,400,20);
  skys14.addImage("ground",sky);  
  skys14.scale = 2;
  skygroup.add(skys14);
  skygroup.setRotationEach(-90);

  sea3 = createSprite(width+100,height-896/2,400,20);
  sea3.addImage("ground",groundImage); 
  sea3.velocityY = 7
  sea3.scale = 8;
  sea3.rotation = -90;

  sea2 = createSprite(width+100,sea3.y+896,400,20);
  sea2.addImage("sea",groundImage);
  sea2.velocityY = 7;
  sea2.scale = 8;
  sea2.rotation = -90;

  sea1 = createSprite(width+100,sea2.y+896,400,20);
  sea1.addImage("sea2",groundImage);
  sea1.velocityY = 7;
  sea1.scale = 8;
  sea1.rotation = -90;

  clouds1 = createSprite(width-340,height-270,400,20);
  clouds1.addImage("clouds",clouds);
  cloudGroup.add(clouds1);

  clouds2 = createSprite(width-340,clouds1.y+clouds1.width,400,20);
  clouds2.addImage("clouds",clouds);
  cloudGroup.add(clouds2);

  
  clouds3 = createSprite(width-340,clouds2.y+clouds2.width,400,20);
  clouds3.addImage("clouds",clouds);
  cloudGroup.add(clouds3);
 

  clouds4 = createSprite(width-340,clouds3.y+clouds3.width,400,20);
  clouds4.addImage("clouds",clouds);
  cloudGroup.add(clouds4);
 

  clouds5 = createSprite(width-340,clouds4.y+clouds4.width,400,20);
  clouds5.addImage("clouds",clouds);
  cloudGroup.add(clouds5);
  cloudGroup.setRotationEach(-90);
  
  farg = createSprite(width-250,height+100,400,20);
  farg.addImage("sea",fg);
  farg.scale = 0.5;
  farg.velocityY = 3;
  farg.rotation = -90;


 
  ship = createSprite(width-340,height-500);
  ship.addImage( "running",ship_img);
  ship.scale = 0.4;
  ship.velocityY = 3;
  ship.rotation = -90;
  //ship.lifetime = 350;
  
  plr = createSprite(width-180,height-350);
  plr.addAnimation( "running",run_img);
  plr.scale = 2;
  plr.rotation = -90;
 

  land10 = createSprite(width-40,height-1700);
  land10.addImage( "running",big_img);
  land10.scale = 2.5 ;
  land10.setCollider("rectangle",0,0,52,55,0); 
  land10.velocityY = 7;
  tilesGroup.add(land10);

  land0 = createSprite(width-40,height-1570);
  land0.addImage( "running",big_img);
  land0.scale = 2.5 ;
  land0.setCollider("rectangle",0,0,52,56,0); 
  land0.velocityY = 7;
  tilesGroup.add(land0);

  land9 = createSprite(width-40,height-1440);
  land9.addImage( "running",big_img);
  land9.scale = 2.5 ;
  land9.setCollider("rectangle",0,0,52,56,0);
  land9.velocityY = 7;
  tilesGroup.add(land9);

  land8 = createSprite(width-40,height-1310);
  land8.addImage( "running",big_img);
  land8.scale = 2.5 ;
  land8.setCollider("rectangle",0,0,52,56,0);
  land8.velocityY = 7;
  tilesGroup.add(land8);

  land7 = createSprite(width-40,height-1180);
  land7.addImage( "running",big_img);
  land7.scale = 2.5 ;
  land7.setCollider("rectangle",0,0,52,56,0);
  land7.velocityY = 7;
  tilesGroup.add(land7);

  land6 = createSprite(width-40,height-1050);
  land6.addImage( "running",big_img);
  land6.scale = 2.5 ;
  land6.setCollider("rectangle",0,0,52,56,0);
  land6.velocityY = 7;
  tilesGroup.add(land6);
  
  land5 = createSprite(width-40,height-(790+130));
  land5.addImage( "running",big_img);
  land5.scale = 2.5 ;
  land5.setCollider("rectangle",0,0,52,56,0);
  land5.velocityY = 7;
  tilesGroup.add(land5);

  land4 = createSprite(width-40,height-790);
  land4.addImage( "running",big_img);
  land4.scale = 2.5 ;
  land4.setCollider("rectangle",0,0,50,56,0);
  land4.velocityY = 7;
  tilesGroup.add(land4);

  land3 = createSprite(width-40,height-660);
  land3.addImage( "running",big_img);
  land3.scale = 2.5 ;
  land3.setCollider("rectangle",0,0,50,56,0);
  land3.velocityY = 7;
  tilesGroup.add(land3);

  land2 = createSprite(width-40,height-530);
  land2.addImage( "running",big_img);
  land2.scale = 2.5 ;
  land2.setCollider("rectangle",0,0,50,56,0);
  land2.velocityY = 7;
  tilesGroup.add(land2);

  land1 = createSprite(width-40,height-400);
  land1.addImage( "running",big_img);
  land1.scale = 2.5 ;
  land1.setCollider("rectangle",0,0,50,56,0);
  land1.velocityY =7;
  tilesGroup.add(land1);
  tilesGroup.setRotationEach(-90);

  
  gameover = createSprite(windowWidth-350,height/2,20,20);
  gameover.addImage(gameoverimage);
  gameover.rotation = -90;
  
  restart = createSprite(windowWidth-40,height/2,20,20);
  restart.addImage(restartimage);
  restart.rotation =-90;

  
  gameover.scale = 1;
  restart.scale = 1;
 
   
  gameover.visible = false;
  restart.visible = false;
 
  
  
  /*title = createElement('h2');
  title.html("Pirate Runner");
  title.position(windowWidth / 2 - 80,height-660);*/
  
  Button = createButton("Play Sound");
  Button.mousePressed(togglePlay);
  
}
function draw() {
  background(180);
 
  //b+=56;
  //c+=40;

if(gameState === PLAY){
    //move the ground
    //score = score + Math.round(getFrameRate()/60);
    if(plr.isTouching(tilesGroup)){
      plr.addAnimation("run",run_img);
    }
    
    if(birdsGroup.isTouching(plr)|| plr.y>height ||plr.x>width||objGroup.isTouching(plr)){
     // plr.destroy();
      plr.visible = false;
     // bird.visibleEach = false;
      tilesGroup.setVisibleEach(false);
      tiles1Group.setVisibleEach(false);
      tiles2Group.setVisibleEach(false);
      tiles3Group.setVisibleEach(false);
      birdsGroup.setVisibleEach(false);
      tilesGroup.setVelocityYEach(-1100);
      tiles1Group.setVelocityYEach(-1100);
      tiles2Group.setVelocityYEach(-1100);
      tiles3Group.setVelocityYEach(-1100);
      objGroup.setVelocityYEach(-1100);
      birdsGroup.setVelocityYEach(-1100);
      gameState =END;
    }
    if( (touches.length > 0) ) {
     // plr.addImage( "running",jump_img);
      plr.velocityX = -16 ;
      touches =[];}
  /*if(keyDown( RIGHT_ARROW)){a
    
    plr.addAnimation( "running",run_img);
    sea1.velocityX = -7
    sea2.velocityX = -7
    sea3.velocityX = -7
   // spawntiles();
   // spawnbirds();
    tilesGroup.setVelocityXEach(-7);
    tiles1Group.setVelocityXEach(-7);
    tiles2Group.setVelocityXEach(-7);
    tiles3Group.setVelocityXEach(-7);
    birdsGroup.setVelocityXEach(-8);
   // birdsGroup.setLifetimeEach(500);
    farg.velocityX = -3;
  }*/
  /*if(keyDown( LEFT_ARROW)){
    plr.addAnimation( "running",idle_img);
    sea1.velocityX = 0
    sea2.velocityX = 0
    sea3.velocityX = 0
    tilesGroup.setVelocityXEach(0);
    tiles2Group.setVelocityXEach(0);
    tiles3Group.setVelocityXEach(0);
    tiles1Group.setVelocityXEach(0);
    /*tiles1Group.destroyEach();
    tiles2Group.destroyEach();
    //tiles3Group.destroyEach();*
    birdsGroup.setVelocityXEach(0)
    //tilesGroup.destroyEach();
    tilesGroup.setLifetimeEach(-1);
    tiles1Group.setLifetimeEach(-1);
    tiles2Group.setLifetimeEach(-1);
    tiles3Group.setLifetimeEach(-1);
    farg.velocityX = 0;
   // bird.velocity = 
  }*/
  /*if (plr.y>700||plr.x<0){
    gameState = END;
    //scoring
  }*/
    score = score + Math.round(getFrameRate()/60);
    
  //if (count>0 && count%100 === 0){
   //   playSound("checkPoint.mp3");
    //}
    
  
  
  // skies();
  
   farground()
   sea();
   spawntiles();
   spawnbirds();
  // bonus();
 
     
 
  
    //add gravity
   plr.velocityX = plr.velocityX + 1.0;
    /* if(plr.y >tilesGroup.y-50 && plr.y < tilesGroup.y-40){
      plr.addImage( "running",land_img);
      }*/
  
   
  plr.collide(tilesGroup);
  plr.collide(tiles1Group);
  plr.collide(tiles2Group);
  plr.collide(tiles3Group);
  plr.collide(objGroup);
  
  /*if(mousePressedOver(pause)) {
    stop();
  }*/

   
}
  if (gameState === END){
    gameover.visible = true;
    restart.visible = true;
    //music1.stop();
    //tilesGroup.destroyEach();
   // birdsGroup.destroyEach();
   tilesGroup.setVisibleEach(false);
   tiles1Group.setVisibleEach(false);
   tiles2Group.setVisibleEach(false);
   tiles3Group.setVisibleEach(false);
   birdsGroup.setVisibleEach(false);
   objGroup.setVisibleEach(false);
   tilesGroup.setVelocityYEach(-1100);
   tiles1Group.setVelocityYEach(-1100);
   tiles2Group.setVelocityYEach(-1100);
   tiles3Group.setVelocityYEach(-1100);
tilesGroup.setLifetimeEach(-1);
birdsGroup.setLifetimeEach(-1);
    sea1.velocityY = 0;
    sea2.velocityY = 0;
    sea3.velocityY = 0;
    farg.velocityY = 0;
    
    //bird.destroy();
  

  
  if(mousePressedOver(restart)) {
    reset();
    
  }}

console.log(frameCount);
  
 
   
  
  drawSprites();
  textSize(40);
  textFont("Chiller");
  fill(254, 147, 36);
  text("Score: "+ score, width-200,height-570);

}
function keyPressed(){
  if(keyCode===32) {
  plr.addImage( "running",jump_img);
  plr.velocityX = -16 ;
  touches =[];
  //playSound("jump.mp3");
}}

/*function keyPressed(){
  if(keyCode===40) {
  plr.addImage( "running",land_img);
  plr.velocityY = +16 ;
  //playSound("jump.mp3");
}}*/
function spawntiles() {
  //write code here to spawn the clouds
  if (frameCount% 79 === 0 ) {
    var tiles = createSprite(width+50 ,-(height)+50,40,10);
   
    tiles.x = Math.round(random(width-310,width-40));
    tiles.addImage("tile",tile);
    tiles.scale = 2.5;
    tiles.setCollider("rectangle",0,0,60,37,0);   
    tiles.velocityY = 7;

    var tiles1 =  createSprite(tiles.x,-(height)+150,40,10);
    tiles1.addImage("tile",tile);
    tiles1.scale = 2.5;
    tiles1.setCollider("rectangle",0,0,60,37,0);
  tiles1.velocityY = 7;

    var tiles2 =  createSprite(tiles.x,-(height)+250,40,10);
    tiles2.addImage("tile",tile);
    tiles2.scale = 2.5;
    tiles2.setCollider("rectangle",0,0,60,37,0);
   tiles2.velocityY =7;

   var tiles3 =  createSprite(tiles.x,-(height)+350,40,10);
    tiles3.addImage("tile",tile);
    tiles3.scale = 2.5;
    tiles3.setCollider("rectangle",0,0,60,37,0);
   tiles3.velocityY = 7

     //assign lifetime to the variable
    tiles.lifetime = 500;
    tiles1.lifetime = 500;
    tiles2.lifetime = 500;
    tiles3.lifetime = 500;
    //adjust the depth
    tiles.depth = plr.depth;
    plr.depth = plr.depth + 1;
    
    //add each cloud to the group
    tilesGroup.add(tiles);
    tiles1Group.add(tiles1);
    tiles2Group.add(tiles2);
    tiles3Group.add(tiles3);

    tiles1Group.setRotationEach(-90);
    tiles2Group.setRotationEach(-90);
    tiles3Group.setRotationEach(-90);
    tilesGroup.setRotationEach(-90);
  }
  if(frameCount% 316=== 0 && score>400){
    var spike = createSprite(tiles.x-30,-(height)+150,20,20);
    spike.addImage("run",spike_img);
    spike.scale = 0.23;
    spike.lifetime = 500;
    spike.velocityY = 7;
    spike.setCollider("rectangle",0,0,200,200,0);
    //spike.debug = true;
    spike.collide(tilesGroup);
    spike.collide(tiles1Group);
    spike.collide(tiles2Group);
    spike.collide(tiles3Group);
    objGroup.add(spike);
    objGroup.setRotationEach(-90);   
}

}

  /*function bonus(){
    if(frameCount% 79=== 0){
      var bonus = createSprite(1450,tiles.y-30,20,20);
      bonus.addImage("run",bo);
      bonus.scale = 0.1;
      bonus.lifetime = 500;
      bonus.velocityX = -7;
      bonus.collide(tilesGroup);
      bonus.collide(tilesGroup1);
      bonus.collide(tilesGroup2);
      bonus.collide(tilesGroup3);
  }}*/
  function spawnbirds(){
    if(frameCount% 156=== 0){
      var bird = createSprite(width+50,-(height)+50,20,20);
      bird.addAnimation("flying",bird_img);
      bird.x = Math.round(random(width-400,width-100));
      bird.velocityY = 8;
      bird.scale=0.8;
      bird.setCollider("rectangle",0,0,50,20,0);
     // bird.debug = true;
      bird.lifetime = 500;
      birdsGroup.add(bird);
      birdsGroup.setRotationEach(-90);    
  }
  
}
function sea(){
  if(sea3.y<=-896/2 && sea1.y===(896/2)*3){      
    sea3.y=sea1.y+896
    sea3.velocityY = 7;
  }
   
  
  if(sea2.y<=-896/2){
    sea2.y=sea3.y+896
   sea2.velocityY = 7;
  }
    
  if(sea1.y<=-896/2){
    sea1.y=sea2.y+896
   sea1.velocityY = 7;
  }
}
function farground(){
  if(farg.y<=-300){
    farg.y=height-height+100;
  }}




function reset() {
  gameState = PLAY;
  plr.visible = true;
 // bird.visibleEach = true;
  gameover.visible = false;
  restart.visible = false;

  tilesGroup.setVelocityYEach(7);
  tiles1Group.setVelocityYEach(7);
  tiles2Group.setVelocityYEach(7);
  tiles3Group.setVelocityYEach(7);
  objGroup.setVelocityYEach(7);
  birdsGroup.setVelocityYEach(7);

  tilesGroup.setVisibleEach(true);
  tiles1Group.setVisibleEach(true);
  tiles2Group.setVisibleEach(true);
  tiles3Group.setVisibleEach(true);
  birdsGroup.setVisibleEach(true);
  objGroup.setVisibleEach(true);
  plr.x = width-180;
  plr.velocityY = 0;
  plr.y = height-350;
  ship.y = height-500;
  land1.y = height-400;
  land2.y = height-530;
  land3.y = height-660;
  land4.y = height-790;
  land5.y = height-920;
  land6.y = height-1050;
  land7.y = height-1180;
  land8.y = height-1310;
  land9.y = height-1440;
  land0.y = height-1570;
  land10.y = height-1700;
  //music1.play();
 // tilesa.x = 1000;
  
  //obstaclesGroup.destroyEach();
/*cloudsGroup.destroyEach();
  
  trex.changeAnimation("running",trex_running);*/
 
  score = 0;




}

function togglePlay(){
  if (!music1.isPlaying()){
    music1.loop();
    Button.html("Mute");
  }
  else{
    music1.pause();
  Button.html("Play Music");
  }
}
/*function stop(){
  if(keyWentDown("escape")){
  pause.visible = true

}}
      //spawn obstacles
    //spawnObstacles();
   /* if(keyIsDown(RIGHT_ARROW)){
      sea1.velocityX = -7
      sea2.velocityX = -7
      sea3.velocityX = -7
     // tiles1.velocityX = -7
      //tiles.velocityX = -7
      farg.velocityX = -3;
    }*/
   
    /*if(birdsGroup.isTouching(plr)){
      plr.destroy();
      gameState =END;
    }
  if(keyDown( RIGHT_ARROW)){
    plr.addAnimation( "running",run_img);
    sea1.velocityX = -7
    sea2.velocityX = -7
    sea3.velocityX = -7
   // spawntiles();
    spawnbirds();
    tilesGroup.setVelocityXEach(-7);
    tilesGroup.setLifetimeEach(500);
    birdsGroup.setVelocityXEach(-8)
    birdsGroup.setLifetimeEach(500);
    farg.velocityX = -3;
  }
  if(keyDown( LEFT_ARROW)){
    plr.addAnimation( "running",idle_img);
    sea1.velocityX = 0
    sea2.velocityX = 0
    sea3.velocityX = 0
    tilesGroup.setVelocityXEach(0);
    birdsGroup.setVelocityXEach(0)
    //tilesGroup.destroyEach();
    tilesGroup.setLifetimeEach(-1);
    farg.velocityX = 0;
   // bird.velocity = 0;
  }*/
    
/*function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -4;
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      case 5: obstacle.addImage(obstacle5);
              break;
      case 6: obstacle.addImage(obstacle6);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}*/
 /*else if(gameState === END) {
    gameover.visible = true;
    restart.visible = true;
    
    //set velcity of each game object to 0
    ground.velocityX = 0;
    trex.velocityY = 0;
    //obstaclesGroup.setVelocityXEach(0);
    cloudsGroup.setVelocityXEach(0);
    
    //change the trex animation
    trex.changeAnimation("trex_collided",trex_collided);
    
    //set lifetime of the game objects so that they are never destroyed
   // obstaclesGroup.setLifetimeEach(-1);
    cloudsGroup.setLifetimeEach(-1);
    
    
 }*/
