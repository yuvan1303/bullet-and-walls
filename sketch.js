var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);

  
 
  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80,80,80);
  wall .isStatic = true;

  bullet=createSprite(50, 200, 30, 20);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83)

  bullet.velocityX = speed;



}

function draw() {
  background(0); 
  
   if(wall.x - bullet.x < (bullet.width+wall.width)/2)
  { 
    bullet.velocityX=0;
    var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
    if(damage<10){

    bullet.shapeColor = color(0,255,0);

    }

    if(damage>10){

      bullet.shapeColor = color(255,0,0);
  
      }

  }

 

  drawSprites();
}
