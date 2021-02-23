
var garden,gardenImg;
var  cat,cat1,cat2,cat3,cat4;
var cat1Img,cat2Img,cat3Img,cat4Img;
var mouse,mouse1,mouuse2,mouse3,mouse4;
var mouse1Img,mouse2Img,mouse3Img,mouse4Img;





function preload() {
    //load the images here
 gardenImg=loadImage("garden.png");
 cat1Img=loadAnimation("cat1.png");
 cat2Img=loadAnimation("cat2.png");
 cat3Img=loadImage("cat3.png");
 cat4Img=loadImage("cat4.png");

 mouse1Img=loadImage("mouse1.png");
 mouse2Img=loadImage("mouse2.png");
 mouse3Img=loadImage("mouse3.png");
 mouse4Img=loadImage("mouse4.png");


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    garden=createSprite(300,250);
    garden.addImage(gardenImg);

    cat1=createSprite(650,500);
    cat1.addAnimation("carSleeping",cat1Img);
    cat1.scale=0.2

    mouse1=createSprite(100,500)
    mouse1.addImage(mouse1Img);
    mouse1.scale=0.2
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}



function keyPressed(){

 if(keyCode===LEFT_ARROW){
    cat.velocityX=-5   ;
    cat.addAnimation("catRunning",cat2Img); 
    cat.changeAnimation("catRunning");


}

}
