let img;
function preload(){

  img=loadImage('catss.jpg')

}



function setup() {
  createCanvas(700, 500);
  background('pink');
  
  
 

  img.resize(200,200);

  let cnv5 = createGraphics(200,200);
  cnv5.triangle(0,0,100,200,200,0);
  noStroke();
  img.mask(cnv5);
  image(img,300,25);

  

  

  img.resize(200,200);

  let cnv7 = createGraphics(200,200);
  cnv7.triangle(0,0,100,200,200,0);
  noStroke();
  cnv7.canvas.getContext("2d").clip();
  cnv7.image(img,0,0);
  image(cnv7,350,225);

}