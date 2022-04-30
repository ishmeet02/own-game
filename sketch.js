    var way,wayImg;
    var breaking,breakingImg;
        var brick1,brick1Img;
        var brick2,brick2Img;
        var brick3,brick3Img;
            var coins,coin,coinImg;
             var stick,stick_running,stickImg,runner;    
function preload(){
    wayImg = loadImage("way.png");
    breakingImg = loadImage("breakingobject.png");
    brick1Img = loadImage("brick1.png");
    brick2Img = loadImage("brick2.png");
    brick3Img = loadImage("brick3.png");
    coinImg = loadImage("coin.png");
    stick_rurnning = loadAnimation("stick1.png","stick2.png");

} 

function setup() {
createCanvas(window.innerWidth , window.innerHeight);  
background("white") ;
    way = createSprite(210,180);
    way.addImage("way",wayImg);
    way.scale=4.1;  
    
    stick = createSprite(200,400,20,20);
    stick.addAnimation("running",stick_running);
    stick.scale=3;

}
function draw() {

way.velocityX=-7
;

 if(way.x < 100){
 way.x = 200;
} 

 drawSprites();
}