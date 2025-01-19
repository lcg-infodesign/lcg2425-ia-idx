let angle=5;
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  //palla da basket
  // drawRotateBasketBall(angle);
  drawRotateBasketBall(200, 200, 100, angle);
  drawBasketball(100,100, 50);
  angle += 0.7;
} 

function drawRotateBasketBall(xCenter, yCenter,
   dBall, angle){
    push();
    //codice delle trasformazioni
    translate(xCenter,yCenter);
    rotate(angle);
    drawBasketball(0,0,dBall);
    pop();
}

// function idFunzioen(<lista dei paramteri) { corpo della funzione}
function drawBasketball(xCenter, yCenter, dBall) {
  fill(255,165,0);
  stroke(0);
  strokeWeight(3);
  circle(xCenter, yCenter, dBall);
  line(-(dBall/2)+xCenter,yCenter,
   (dBall/2)+xCenter, 0+yCenter);
  line(-(dBall/3)+xCenter, -(dBall/3)+yCenter,
   (dBall/3)+xCenter, (dBall/3)+yCenter);
  line(-(dBall/3)+xCenter, (dBall/3)+yCenter,
   (dBall/3)+xCenter, -(dBall/3) + yCenter);
}
