var movingRect;
var fixedRect;
var sprite1;
var sprite2;

function setup() {
  createCanvas(800,800);
  movingRect = createSprite(400, 200, 50, 50);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "blue";
  sprite1 = createSprite(400, 400, 50, 50);
  sprite2 = createSprite(400, 600, 50, 50);
}

function draw() {
  background(0);
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  if (isTouching(movingRect, fixedRect)) {
    movingRect.shapeColor = "purple";
    fixedRect.shapeColor = "purple";
  } 
  else if (isTouching(sprite1, movingRect)) {
    sprite1.shapeColor = "purple";
    movingRect.shapeColor = "purple";
  }
  else if (isTouching(sprite2, movingRect)) {
    sprite2.shapeColor = "purple";
    movingRect.shapeColor = "purple";
  }
  else {
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
    sprite1.shapeColor = "blue";
    sprite2.shapeColor = "blue";
  }
  drawSprites();
}

function isTouching(object1, object2) {
  if(object1.x - object2.x <= (object1.width + object2.width)/2
  && object2.x - object1.x <= (object1.width + object2.width)/2
  && object1.y - object2.y <= (object1.height + object2.height)/2
  && object2.y - object1.y <= (object1.height + object2.height)/2){
    return true;
  }
  else {
    return false;
  }
}