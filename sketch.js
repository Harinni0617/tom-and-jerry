
var bgIMg;
var car;

function preload() {
    //load the images here
    bgImg=loadImage("images/garden.png")
    catImg1=loadAnimation("images/cat1.png")
    mouseImg1=loadAnimation("images/mouse1.png")
    catImg2=loadAnimation("images/cat2.png","images/cat3.png")
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png")
    catImg4=loadAnimation("images/cat4.png")
    mouseImg4=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(900,700,50,50)
mouse=createSprite(200,700,50,50)
cat.scale=0.1
mouse.scale=0.1
cat.addAnimation("cat1",catImg1)
mouse.addAnimation("mouse1",mouseImg1)
mouse.addAnimation("mouseTeasing",mouseImg2)
    cat.addAnimation("cat",catImg2)
cat.addAnimation("cat4",catImg4)
mouse.addAnimation("mouse4",mouseImg4)
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.x=250
cat.changeAnimation("cat4",catImg4)
mouse.changeAnimation("mouse4",mouseImg4)
cat.velocityX=0
    }
keyPressed()
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyDown(LEFT_ARROW)){
    mouse.changeAnimation("mouseTeasing",mouseImg2)
    cat.changeAnimation("cat",catImg2)
    cat.velocityX=-2
  
}

}
