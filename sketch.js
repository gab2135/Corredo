var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage de path (camino)
  path = loadImage("path.png");
  //loadAnimation de boy (niño)
  boy = loadAnimation("boy.png");

  
}

function setup(){
  
  createCanvas(400,400);
 //crear sprite de path (camino) 
 path = createSprite(200,180,400,20);
//agregar imagen de path
  path.addImage("path",pathImage);
  path.x = path.width/2;
//Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
path.velocityY = -2;
path.scale=1.2;

//crear sprite de boy (niño)
  boy = createSprite(50,150,20,50);
  boy.addImage(boyImg);
//agregar animación para boy
boy.addAnimation("running",boy_running);

boy.scale=0.08;

  
if(ground.x<0){
    ground.x = ground.width/2;
  }
// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,100,800);
////establecer visibilidad como false (falso) para límite izquierdo
leftBoundary = visivility = false;
//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
//establecer visibilidad como false (falso) para límite izquierdo
rightBoundary = visivility = false;
}
function draw() {
  background(0);
  path.velocityY = 4;
  console.log(path.x);
  
  // boy moviéndose en el eje X con el mouse
  boy.x = World.mousex;
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  edges= createEdgeSprites();
  boy.collide(edges);
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
