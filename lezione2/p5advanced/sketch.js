let xsize = 600;
let ysize = 400;

function setup() {
  createCanvas(xsize, ysize);
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
  //ordine in p5 
  stroke("yellow");
  strokeWeight(30);
  let xStars_prim= 10;
  let yStars_prim= 20;
  point(xStars_prim,yStars_prim);
  let passo=1;
  //for(init; test; update){corpo}
  for(let i=0; i<50; i=i+passo){
    // 0--> y 1 --> w 2 --> y 3 -->w .... 49
    strokeWeight(i*3)
    if(i%2==0){
      //numeri pari
      //corpo di ramo vero
      stroke("yellow");
    }else{
      //numeri dispari
      //altrimenti questo
      stroke("pink");
    }
    point(xStars_prim*i, yStars_prim+i);
  }
  // stella polare
  // point(xStars_primordiale+60,30);
  // //aggiungiamo un'altra stella
  // point(xStars_primordiale,100);
  // point(75,100);
  //
  fill("white");
  stroke(0);
  strokeWeight(0);
  textSize(20);
  text("C'era una volta...",200,350);
}