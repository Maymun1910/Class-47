function preload() {
alienImg= loadImage("alien.png")
backgroundImg= loadImage("background.jpg")
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  ground = createSprite(windowWidth / 2, windowHeight / 2, 10, height * 2)
  ground.velocityX = 0
  ground.velocityY = 2
  ground.addImage(backgroundImg)
  ground.scale=3

  alien = createSprite(width / 2, height - 150, 50, 80)
  alien.addImage(alienImg)
}

function draw() {
  background("blue")
  if (ground.y > height) {
    ground.y = ground.height / 2;
  }

  if (keyDown("left")){
  alien.velocityX = 3
  }    

  if (keyDown("right")){
    alien.velocityX = -3
  }
  spawnEnemy()
  drawSprites()
}
function spawnEnemy(){
  if(frameCount % 60 === 0){
    var enemy = createSprite(Math.round(random(50,width-50)),0,50,50)
    enemy.velocityY=2
  }
}
