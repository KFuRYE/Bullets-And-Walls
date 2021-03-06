var bullet,wall,speed,weight;

function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  bullet = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, 60, height/2);
  bullet.velocityX = speed;
}

function draw() {
  background(0);  
  if(wall.x - bullet.x<(bullet.width + wall.width)/2) {
    bullet.velocityX = 0;
var deformation = 0.5 * weight * speed * speed/22500
  if(deformation > 180) {
    bullet.shapeColor = "red";
  }
  if(deformation < 180 && deformation>100) {
    bullet.shapeColor = "green";
  }
  if(deformation < 100) {
    bullet.shapeColor = "yellow";
  }
  } 
  drawSprites();
}