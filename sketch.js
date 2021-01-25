const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var ballSound;
var engine, world;
var bouncingBall;
var dustbin1,dustbin2,dustbin3;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5,
 obstacle6, obstacle7, obstacle8, obstacle9, obstacle10, obstacle11,
 obstacle22, obstacle12, obstacle13, obstacle14, obstacle15,
 obstacle16, obstacle17, obstacle18, obstacle19, obstacle20, obstacle21;

function preload() {
ballSound = loadSound("ball bouncing.mp3")
}

 function setup() {
  createCanvas(3000,7000);
  engine = Engine.create();
  world = engine.world;

obstacle1 = new Obstacle((Math.round(random(1,900))),400,500,10);
obstacle2 = new Obstacle((Math.round(random(1,900))),1000,300,10);
obstacle3 = new Obstacle((Math.round(random(1,900))),600,400,10);
obstacle4 = new Obstacle((Math.round(random(1,900))),770,500,10);
obstacle5 = new Obstacle((Math.round(random(1,900))),900,300,10);
obstacle6 = new Obstacle((Math.round(random(1,900))),600,700,10);
obstacle7 = new Obstacle((Math.round(random(1,900))),400,500,10);
obstacle8 = new Obstacle((Math.round(random(1,900))),1000,6500,10);
obstacle9 = new Obstacle((Math.round(random(1,900))),4270,530,10);
obstacle10 = new Obstacle((Math.round(random(1,900))),290,200,10);
obstacle11 = new Obstacle((Math.round(random(1,900))),400,1900,10);
obstacle22 = new Obstacle((Math.round(random(1,900))),380,770,10);
obstacle12 = new Obstacle((Math.round(random(1,900))),3955,500,10);
obstacle13 = new Obstacle((Math.round(random(1,900))),970,600,10);
obstacle14 = new Obstacle((Math.round(random(1,900))),730,900,10);
obstacle15 = new Obstacle((Math.round(random(1,900))),532,300,10);
obstacle16 = new Obstacle((Math.round(random(1,900))),420,540,10);
obstacle17 = new Obstacle((Math.round(random(1,900))),736,800,10);
obstacle18 = new Obstacle((Math.round(random(1,900))),609,300,10);
obstacle19 = new Obstacle((Math.round(random(1,900))),908,500,10);
obstacle20 = new Obstacle((Math.round(random(1,900))),490,700,10);
obstacle21 = new Obstacle((Math.round(random(1,900))),345,180,10);
obstacle23 = new Obstacle((Math.round(random(1,900))),1570,843,10);
obstacle24 = new Obstacle((Math.round(random(1,900))),1822,600,10);
obstacle25 = new Obstacle((Math.round(random(1,900))),1940,400,10);
obstacle26 = new Obstacle((Math.round(random(1,900))),1290,1000,10);
obstacle27 = new Obstacle((Math.round(random(1,900))),1030,670,10);
obstacle28 = new Obstacle((Math.round(random(1,900))),1180,290,10);
obstacle29 = new Obstacle((Math.round(random(1,900))),1290,400,10);
obstacle30 = new Obstacle((Math.round(random(1,900))),3800,1660,10);
obstacle31 = new Obstacle((Math.round(random(1,900))),1730,345,10);
obstacle33 = new Obstacle((Math.round(random(1,900))),1240,970,10);
obstacle34 = new Obstacle((Math.round(random(1,900))),900,730,10);
obstacle35 = new Obstacle((Math.round(random(1,900))),2140,232,10);
obstacle36 = new Obstacle((Math.round(random(1,900))),2234,320,10);
obstacle37 = new Obstacle((Math.round(random(1,900))),2234,136,10);
obstacle38 = new Obstacle((Math.round(random(1,900))),2490,609,10);
obstacle39 = new Obstacle((Math.round(random(1,900))),2387,298,10);
obstacle40 = new Obstacle((Math.round(random(1,900))),2770,390,10);
obstacle32 = new Obstacle((Math.round(random(1,900))),2700,490,10);
obstacle41 = new Obstacle((Math.round(random(1,900))),2980,345,10);
obstacle42 = new Obstacle((Math.round(random(1,900))),4678,900,10);
obstacle43 = new Obstacle((Math.round(random(1,900))),7090,700,10);
obstacle44 = new Obstacle((Math.round(random(1,900))),4500,400,10);
obstacle45 = new Obstacle((Math.round(random(1,900))),4870,200,10);
obstacle46 = new Obstacle((Math.round(random(1,900))),6730,670,10);
obstacle47 = new Obstacle((Math.round(random(1,900))),4970,470,10);
obstacle48 = new Obstacle((Math.round(random(1,900))),4900,490,10);
obstacle48 = new Obstacle((Math.round(random(1,900))),5770,1000,10);
obstacle49 = new Obstacle((Math.round(random(1,900))),4200,345,10);
obstacle50 = new Obstacle((Math.round(random(1,900))),4170,930,10);
obstacle51 = new Obstacle((Math.round(random(1,900))),6870,730,10);
obstacle52 = new Obstacle((Math.round(random(1,900))),6700,332,10);
obstacle53 = new Obstacle((Math.round(random(1,900))),6540,220,10);
obstacle54 = new Obstacle((Math.round(random(1,900))),6700,336,10);
obstacle55 = new Obstacle((Math.round(random(1,900))),6480,369,10);
obstacle56 = new Obstacle((Math.round(random(1,900))),6307,208,10);
obstacle58 = new Obstacle((Math.round(random(1,900))),6700,490,10);
obstacle57 = new Obstacle((Math.round(random(1,900))),7000,12000,10);
obstacle59 = new Obstacle((Math.round(random(1,900))),4200,345,10);
obstacle60 = new Obstacle((Math.round(random(1,900))),5170,930,10);
obstacle61 = new Obstacle((Math.round(random(1,900))),6870,730,10);
obstacle62 = new Obstacle((Math.round(random(1,900))),4700,332,10);
obstacle63 = new Obstacle((Math.round(random(1,900))),5540,220,10);
obstacle64 = new Obstacle((Math.round(random(1,900))),3700,336,10);
obstacle65 = new Obstacle((Math.round(random(1,900))),5480,369,10);
obstacle66 = new Obstacle((Math.round(random(1,900))),5307,208,10);
dustbin1 = new Dustbin(1350,6970,400,20)
dustbin2 = new Dustbin(1150,6950,20,200)
dustbin3 = new Dustbin(1500,6950,20,200)


bouncingBall = new BBall(200,200,10);

}

function draw() {
  background("lightblue");  
  Engine.update(engine);

//if(bouncingBall.isTouching(obstacle57)){
//text("You won",500,6000)  
//}

  
//ballSound.play();
bouncingBall.display();
obstacle1.display();
obstacle2.display();
obstacle3.display();
obstacle4.display();
obstacle5.display();
obstacle6.display();
obstacle7.display();
obstacle8.display();
obstacle9.display();
obstacle10.display();
obstacle11.display();
obstacle22.display();
obstacle12.display();
obstacle13.display();
obstacle14.display();
obstacle15.display();
obstacle16.display();
obstacle17.display();
obstacle18.display();
obstacle19.display();
obstacle20.display();
obstacle21.display();
obstacle1.display();
obstacle2.display();
obstacle3.display();
obstacle4.display();
obstacle5.display();
obstacle6.display();
obstacle7.display();
obstacle8.display();
obstacle9.display();
obstacle10.display();
obstacle11.display();
obstacle22.display();
obstacle12.display();
obstacle13.display();
obstacle14.display();
obstacle15.display();
obstacle16.display();
obstacle17.display();
obstacle18.display();
obstacle19.display();
obstacle20.display();
obstacle21.display();
obstacle23.display();
obstacle24.display();
obstacle25.display();
obstacle26.display();
obstacle27.display();
obstacle28.display();
obstacle29.display();
obstacle30.display();
obstacle31.display();
obstacle32.display();
obstacle33.display();
obstacle34.display();
obstacle35.display();
obstacle36.display();
obstacle37.display();
obstacle38.display();
obstacle39.display();
obstacle40.display();
obstacle41.display();
obstacle42.display();
obstacle43.display();
obstacle44.display();
obstacle45.display();
obstacle46.display();
obstacle47.display();
obstacle48.display();
obstacle48.display();
obstacle50.display();
obstacle51.display();
obstacle52.display();
obstacle53.display();
obstacle54.display();
obstacle55.display();
obstacle56.display();
obstacle57.display();
obstacle58.display();
obstacle59.display();
obstacle60.display();
obstacle61.display();
obstacle62.display();
obstacle63.display();
obstacle64.display();
obstacle65.display();
obstacle66.display();
dustbin1.display();
dustbin2.display();
dustbin3.display();


  drawSprites();
}


function keyPressed() {
if (keyDown(LEFT_ARROW)) {
Matter.Body.setVelocity(bouncingBall.body,{x: 10,y: -10});
}
}

function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(bouncingBall.body, {x: mouseX , y: mouseY});
  //}
}
