var road, roadImg;
var car, carImg;

function preload() {
  carImg = loadImage("car.png");
  roadImg = loadImage("road.jpg");
}

function setup() {
  createCanvas(400,400);

  road = createSprite(200,200);
  road.addImage(roadImg);
  road.scale = 0.3;

  car = createSprite(200,200,10,10);
  car.addImage(carImg);
  car.scale = 0.1;
  
}

function draw() {
  background("grey");  

  if (keyDown("up")) {
    car.y = car.y - 2;
    steering();
  }

  if (keyDown("down")) {
    car.y = car.y + 2;
    steering();
  }

  function steering() {

    if (keyDown("right")) {
      car.x = car.x + 2;
      car.rotation += 2;
    }
  
    if (keyDown("left")) {
      car.x = car.x - 2;
      car.rotation -= 2;
    }
  }
  
  drawSprites();
}


