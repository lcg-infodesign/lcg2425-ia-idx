let canvasXMax=600, canvasYMax=400;
let moonXpos=255;
let moonYpos=50;
let slider;
function setup() {
  createCanvas(canvasXMax, canvasYMax);
  // parametri: minimo, max, default, step
  slider = createSlider(0,255,0,1);
  slider.position(0,canvasYMax-60);
  slider.size(200);
}
function draw() {
  background("navy");
  //
  frameRate(5);
  //moon
  colorMode(RGB);
  fill(255, 255, 0, 200);
  stroke(255, 255, 255, 100)
  strokeWeight(10); //large outline
  circle(moonXpos, 50, 100)
  //overlappin circle
  stroke("navy");
  fill("navy");
  circle(moonXpos+50, 50,100);

  //metodo aggiornamento 1
  /*
  moonXpos= moonXpos+1;
  //condizionalmente se la lune esce dai bordi
  if(moonXpos>canvasXMax){//usciamo dal foglio
    // moonXpos= moonXpos -200;
    moonXpos=0;
  }*/

  //metodo di aggiornamento 2
  //continua ad aggiunger euno x ogni frame disegnato
  moonXpos=(frameCount*5 +700)% canvasXMax;
  //% --> divisbilità, definire dei confini
  //operatore di modulo
  //1 % 400 --> 1/ 400 = 0, resto =1
  //2 % 400 ->  2 / 400 = 0, resto 2

  //numero / 2 --> resto è 0; numero % 2 == 0
  //numero = 400
  // numero % 2 --> 0

  stroke(0);//black outline
  strokeWeight(1);//outline thickness
  fill("green");
  let y = 300;
  rect(0, y, canvasXMax, y);
  stroke(0);//black outline
  strokeWeight(1);//outline thickness
  let x_casa =0;
  let house_height = 100, house_width=100;
  for(let numero_case=0; numero_case<3; numero_case++){
    fill("white");
    rect(x_casa, y-house_height , house_width, house_height);
    fill(slider.value());
    let roof_height=80;
    triangle(x_casa, y-house_height , x_casa+house_width, y-house_height, x_casa+(house_width/2), y-house_height-roof_height);
    x_casa += house_width+30;
  }
  //x rollover corretto su prima casetta
  x_casa=0;
  //x_casa (house_width+30)*3
  //x_casa = 390
  //rollover--> agiamo se passiamo sopra
  //if passiamo sopra 
  //passiamo sopra
  //-----------
  //|         |
  //|         |
  //-----------
  //siamo dentro le x della casa?
  //mouseX > x_casa 
  //mouseX < x_casa+house_width
  //siamo dentro le y della casa?
  //mouseY > left_corner
  // mouseY < left_corner+house_height
  // &&, ||
  //c1 && c2 --> entrambe le condizioni siano vere
  //c1 || c2 --> almeno una delle condizioni siano vere
  let left_corner = y-house_height;
  let sliderValue = slider.value();
  if((mouseX > x_casa) && 
  (mouseX < x_casa + house_width)&&
  (mouseY> left_corner)&&
  (mouseY < left_corner+house_height)){
  //--> facciamo cose
    fill(sliderValue);
    rect(x_casa, y-house_height , house_width, house_height);
  }else{
    fill("white");
    rect(x_casa, y-house_height , house_width, house_height);
  }
  //facciamo altrimenti?


  //voglio disegnare disegnare stelle random
  //numero = numero + 1;
  //numero += 1; 
  //numero++;
  let xStar=0;
  let yStar=0;
  //voglio generare 5 stelle
  //ripetere un'azione --> for
  //for(init; condizione; update){corpo}
  for(let nS=0; nS < 5; nS++){
    stroke(random(0,255),random(0,255),random(0,255));
    strokeWeight(random(0,50));
    point(xStar,yStar);
    //generare casualmente random()
    xStar=random(0, canvasXMax);
    yStar=random(0, canvasYMax/2);
  }

  // if(frameCount == 50){
  //   noLoop();
  // }

  //displays the x and y position of the mouse on the canvas
  stroke("white");
  strokeWeight(1);
  fill(255);//white text
  textSize(50)
  text(frameCount, 5, 50);
  // text(`X=${mouseX}, Y=${mouseY}, ${frameCount}`, 5, 50);
}
