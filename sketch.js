var melon,pear,pomegranate
var backgroundImage,melonImage,pearImage,pomegranateImage,slicerImage;
var melonGroup;
var pearGroup

function preload(){
  backgroundImage = loadImage("images/Background C45.png");
  melonImage = loadImage("images/melon 1.png")
  pearImage = loadImage("images/pear 1.png")
  pomegranateImage = loadImage("images/pomegranate 1.png")
  slicerImage = loadImage("images/Slicer.png")
}
function setup(){
  createCanvas(1000,600);
  slicer = createSprite(500,300)
  slicer.addImage(slicerImage)
  slicer.scale = 0.30
  melonGroup = new Group()
  pearGroup = new Group()
  pomegranateGroup = new Group()
}
function draw(){
  background(backgroundImage);
  if (keyDown(LEFT)){
    slicer.x = slicer.x - 10
  }
  if (keyDown(UP_ARROW)){
    slicer.y = slicer.y - 10
  }
  if (keyDown(DOWN_ARROW)){
    slicer.y = slicer.y + 10
  }
  if (keyDown(RIGHT)){
    slicer.x = slicer.x + 10
  }


  if(frameCount % 300 === 0){
    spawnMelons()
  }
  if(frameCount % 300 === 0){
    spawnPears()
  }
  if(frameCount % 250 === 0){
    spawnPomegranate()
  }

  if(slicer.isTouching(melonGroup)){
    melonGroup.addImage(pomegranateImage)
  }

  drawSprites()
}
function spawnMelons(){
  melon = createSprite(-25,Math.round(random(200,300)),50,50)
  melon.velocityX = 4
  melon.addImage(melonImage)
  melonGroup.add(melon)
  melon.scale = 0.60
}
function spawnPears(){
  pear = createSprite(width+25,Math.round(random(200,300)),25,50)
  pear.velocityX = -4
  pear.addImage(pearImage)
  pearGroup.add(pear)
  pear.scale = 0.60
}
function spawnPomegranate(){
  pomegranate = createSprite(Math.round(random(50,width-50)),height+25,25,50)
  pomegranate.velocityY= -4
  pomegranate.addImage(pomegranateImage)
  pomegranateGroup.add(pomegranate)
  pomegranate.scale = 1
}