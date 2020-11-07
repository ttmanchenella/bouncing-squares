var movingRect;
var fixedRect;
var sprite1;
var sprite2;

function setup() {
  createCanvas(800,800);
  movingRect = createSprite(400, 200, 50, 50);
  movingRect.velocityY = 4;
  fixedRect = createSprite(400, 800, 50, 50);
  fixedRect.velocityY = -4;
  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "blue";
  sprite1 = createSprite(400, 400, 50, 50);
  sprite2 = createSprite(400, 600, 50, 50);
}

function draw() {
    background(0);

    if(movingRect.x - fixedRect.x <= (movingRect.width + fixedRect.width) / 2
    && fixedRect.x - movingRect.x <= (fixedRect.width + movingRect.width) / 2) {
        movingRect.velocityX = movingRect.velocityX * -1;
        fixedRect.velocityX = fixedRect.velocityX * -1;
    }
    if(movingRect.y - fixedRect.y <= (movingRect.height + fixedRect.height) / 2
    && fixedRect.y - movingRect.y <= (fixedRect.height + movingRect.height) / 2) {
        movingRect.velocityY = movingRect.velocityY * -1;
        fixedRect.velocityY = fixedRect.velocityY * -1;
    }

    drawSprites();
}