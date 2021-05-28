var canvas;
var music;
var ball;
var edges;
var surface1,surface2,surface3,surface4;
var car,wall;

function preload(){
    music = loadSound("music.mp3");

}


function setup(){
    canvas = createCanvas(800,600);
    ball = createSprite (400,100,30,30);
    ball.shapeColor="red";
    ball.velocityX=5;
    ball.velocityY=5;
    
    surface1=createSprite(90,590,200,20);
    surface1.shapeColor="blue";
    surface2=createSprite(290,590,200,20);
    surface2.shapeColor="green";
    surface3=createSprite(495,590,200,20);
    surface3.shapeColor="yellow";
    surface4=createSprite(700,590,200,20);
    surface4.shapeColor="pink";

    


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
  if(isTouching(ball,surface1)){
      bounceOff(ball,surface1);
      ball.shapeColor="blue";  
  }
  if(isTouching(ball,surface2)){
    bounceOff(ball,surface2);
    ball.shapeColor="green";  
}
if(isTouching(ball,surface3)){
    bounceOff(ball,surface3);
    ball.shapeColor="yellow";  
}
if(isTouching(ball,surface4)){
    bounceOff(ball,surface4);
    ball.shapeColor="pink";  
}



  
    edges=createEdgeSprites();
    ball.bounceOff(edges);

drawSprites();
}
function isTouching(object1,object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 +object1 .width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2){
        return true;

      }
      else{
        return false ;
      }
    }
// bounceoff
function bounceOff(object1,object2){
if (object1.x - object2.x < object2.width/2 + object1.width/2
  && object2.x - object1.x < object2.width/2 +object1 .width/2){
    object1.velocityX=object1.velocityX*(-1);
  }
  if( object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){
      object1.velocityY=object1.velocityY*(-1);
  }
}
