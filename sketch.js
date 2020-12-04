var movingRect, stillRect;

function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(100,200,50,80);
  movingRect.shapeColor = "green";
  movingRect.debug=true;
  stillRect = createSprite(400,300,80,50);
  stillRect.shapeColor = "green";
  stillRect.debug=true;
}

function draw() {
  background(0);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if (stillRect.x - movingRect.x < stillRect.width/2 + movingRect.width/2 &&
    movingRect.x - stillRect.x < movingRect.width/2 + stillRect.width/2 &&
    stillRect.y - movingRect.y < stillRect.height/2 + movingRect.height/2 &&
    movingRect.y - stillRect.y < movingRect.height/2 + stillRect.height/2) {
    movingRect.shapeColor = "crimson";
    stillRect.shapeColor = "crimson";
  } else {
    movingRect.shapeColor = "green";
    stillRect.shapeColor = "green";  
  }

  drawSprites();
}