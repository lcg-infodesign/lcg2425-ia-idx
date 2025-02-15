let canvasXMax=400, canvasYMax=400;
let moonXpos=255;
let moonYpos=50;
let growingphase=53;
let diceVal = 1;
function setup() {
  createCanvas(canvasXMax, canvasYMax);
  colorMode(RGB);
  button = createButton('roll')
  button.position(20,65);
  button.mousePressed(rollDice);
}
function draw() {
  background("navy");
  // button = createButton('roll')

  let dimension=100;
  drawMoon(moonXpos,moonYpos,growingphase, dimension);
  stroke(0);//black outline
  strokeWeight(1);//outline thickness
  fill("green");
  let y = 300;
  rect(0, y, canvasXMax, y);
  stroke(0);//black outline
  strokeWeight(1);//outline thickness
  let x_casa =0;
  let house_height = 50, house_width=20;
  let roof_height=20, house_number=20;
  drawLineHouses(x_casa,y-house_height,house_width,
     house_height, roof_height, house_number, 30);
  y -= 100;
  drawReScaledHouses(x_casa,y-house_height,house_width,
      house_height, roof_height, house_number, 30);
  moonXpos = (moonXpos + 0.5)%(canvasXMax+dimension/2);
  growingphase = (growingphase+0.05)%(dimension+10);
  stroke("white");
  strokeWeight(1);
  fill(20);//white text
  textSize(50)
  text("Dice value ="+diceVal, 5, canvasYMax-50);
}

function drawMoon(moonXpos,moonYpos, growingphase, dimension){
  //moon
  push();
  translate(moonXpos,moonYpos);
  fill(255, 255, 0, 200);
  stroke(255, 255, 255, 100)
  strokeWeight(10); //large outline
  circle(0, 0, dimension)
  //overlappin circle
  stroke("navy");
  fill("navy");
  circle(0+growingphase, 0,dimension);
  pop();
}
function rollDice(){
  diceVal =random(0.1,6);
  // diceVal = floor(diceVal);
}

function reducedScale(input){
  let reduced=0;
  reduced=(input+0.5)/ diceVal;
  return reduced;
}

function drawReScaledHouses(xHouse,yHouse, 
  wdtHouse, hgtHouse, hgtRoof, 
  nmbrHouse, spacing){
    push();
    translate(0,-200);
    for(let n=0; n < nmbrHouse; n++){
      push();
      scale(reducedScale(n));
      drawHouse(xHouse,yHouse, 
        wdtHouse, hgtHouse, hgtRoof);
      pop();
      translate(spacing+wdtHouse,0);
    }
    pop();
}

function drawLineHouses(xHouse,yHouse, 
  wdtHouse, hgtHouse, hgtRoof, 
  nmbrHouse, spacing){
    push();
    for(let n=0; n < nmbrHouse; n++){
      drawHouse(xHouse,yHouse, 
        wdtHouse, hgtHouse, hgtRoof);
      translate(spacing+wdtHouse,0);
    }
    pop();
  }

function drawHouse(xHouse,yHouse,wdtHouse, hgtHouse, hgtRoof){
  stroke(0);//black outline
  strokeWeight(1);//outline thickness
  fill("white");
  rect(xHouse, yHouse , wdtHouse, hgtHouse);
  fill("red");
  triangle(xHouse, yHouse, xHouse+wdtHouse, yHouse, xHouse+(wdtHouse/2), yHouse-hgtRoof);
}