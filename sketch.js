var fixedRect,movingRect;
var objA,objB;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  objA=createSprite(100, 100, 50, 50);
  objB=createSprite(200, 100, 50, 50);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  objA.shapeColor="green";
  objB.shapeColor="green";
}

function draw() {
  background(0,0,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  drawSprites();
  if(IsTouching(objA,movingRect))
  {
    movingRect.shapeColor="red";
    objA.shapeColor="red";
  }
  else
  {
    movingRect.shapeColor="green";
    objA.shapeColor="green";
  }

}

