var bg , bgImg ;
var player , playerImg , bulletImg , bulletGroup ;
var zombies , zombieImg , zombie2Img,zombieGroup ;
var heart1 , heart2 , heart3 , heart1Img , heart2Img , heart3Img
var life = 3 ;
var score = 0 ;

function preload(){
  playerImg = loadImage("assets/pc.png")
  zombieImg = loadImage("assets/zombie.png")
  bgImg = loadImage("assets/bg.jpeg")
  zombie2Img = loadImage("assets/ZOMBIE2.jpg")
  heart1Img=loadImage("assets/heart_1.png")
  bulletImg = loadImage("assets/bulletpic2.png")
}


function setup() {
  createCanvas(windowWidth, windowHeight);
bg = createSprite(displayWidth/2-20,displayHeight/2-40 , 20,20);
bg.addImage(bgImg)
player=createSprite(displayWidth/2-500 , displayHeight/2-35 , 20,20)
player.addImage(playerImg)
player.scale = 0.4

player.setCollider("rectangle",0,0,300,300)





zombieGroup = new Group();
bulletGroup = new Group();




}

function draw() {
  background(220);
  zombie();
  if(keyDown("LEFT_ARROW")){
    player.y=player.y-10
  }

  if(keyDown("RIGHT_ARROW")){
    player.y=player.y+10
  }
  
  if(keyWentDown("SPACE")){
    bullet = createSprite(player.x +2 , player.y  , 20,20)
    bullet.velocityX = 20 ;
    bullet.addImage(bulletImg)
    bullet.lifetime = 200 ;
    bullet.scale = 0.2 ;
    bulletGroup.add(bullet)
    
  }
  if(zombieGroup.isTouching(bulletGroup)){
    for(var i=0;i<zombieGroup.length;i++){
      if(zombieGroup[i].isTouching(bulletGroup)){
        zombieGroup[i].destroy();
        bulletGroup.destroyEach();
        score = score+5
      }
    }
  }
  if(zombieGroup.isTouching(player)){
    for(var i = 0;i<zombieGroup.length;i++){
      zombieGroup[i].destroy()
      life = life-1 ;

    }
  }
  if(life === 0){
    text(GameOver ,displayWith/2 , displayHeight/2 );
  }
  
  drawSprites();
  textSize(20)
  fill("white")
  text("Score:"+score , displayWidth-200 , displayHeight/2-220)
  text("Lives:"+life , displayWidth-200 , displayHeight/2-280)
}


function zombie(){
if(frameCount%60===0){
  
  zombies=createSprite(random(1100,1200),random(100,500) , 20 ,20)
  zombies.addImage(zombieImg)
  zombies.scale = 0.15
  zombies.velocityX = -4;
  
  zombies.setCollider("rectangle",0,0,400,400)
  zombies.lifetime = 400
  zombieGroup.add(zombies)


}

  
}