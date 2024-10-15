let canvasXMax=200;
let canvasYMax =200;
function setup() {
  createCanvas(canvasXMax, canvasYMax);
  background(220);
}

function draw() {
  textSize(15);
  let string_toprint="Contenuto mouseX= "
  +mouseX+ " \ny= "+ mouseY;
  strokeWeight(1);
  line(0,mouseX, canvasXMax,mouseY);
  //feedback tasto mouse sx
  //disegnare la linea gialla 
  //se schiacciamo il mouse
  //p5--> true, se il mouse schiacciato, 
  // altrimenti è false
  if(mouseIsPressed == true){
    //LEFT, RIGHT, CENTRAL
    if(mouseButton == RIGHT){
      background(220);
    }
    //coloriamo di giallo
    stroke("yellow");
  }else{
    stroke("black");
  }
  //altrimenti nero
}
