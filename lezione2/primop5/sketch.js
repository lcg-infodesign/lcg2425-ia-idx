function setup() {
  createCanvas(400, 400);
}

function draw() {
  //fare cielo scuro
  background("darkblue");
  //vogliamo disegnare la luna
  fill("yellow");
  stroke("white");
  strokeWeight(10);
  circle(300, 75, 100);
  //prima della forma desiderata
  //cambiare fill e sstroke
  fill("green");
  stroke("darkgreen");
  strokeWeight(5);
  rect(0,200,400,200);
  fill("white");
  stroke(0);
  strokeWeight(0);
  textSize(20);
  text("C'era una volta...",200,350);
}
