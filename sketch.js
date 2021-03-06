class Heart {
  
  constructor() {
    this.x = random(320,540);
    this.y = random(470,670);
    this.r = random(1,25);
    this.xSpeed = random(-2,2);
    this.ySpeed = random(-1,1.5);
  }
   
  createHeart() {
    noStroke();
    fill(5,100,255);
        beginShape();
      vertex(this.x, this.y);
      bezierVertex(this.x - this.r / 2, this.y - this.r / 2, this.x - this.r, this.y + this.r / 3, this.x, this.y + this.r);
      bezierVertex(this.x + this.r, this.y + this.r/ 3, this.x + this.r / 2, this.y - this.r/ 2, this.x, this.y);
      endShape(CLOSE);
  }
  
  moveHeart() {
    if(this.x < 320 || this.x > 540)
      this.xSpeed*=-1;
    if(this.y < 400 || this.y > 100)
      this.ySpeed*=-1;
    this.x+= this.xSpeed;
    this.y+= this.ySpeed;
  }
}




class Anxiety {
  
  constructor() {
    this.x = random(0,100);
    this.y = random(480,670);
    this.r = random(1,30);
    this.xSpeed = random(-2,2);
    this.ySpeed = random(-1,1.5);
  }
   
  createParticle() {
    noStroke();
    fill(10);
    circle(this.x,this.y,this.r);
    circle(this.x+760,this.y,this.r);
  }
  
  moveParticle() {
    if(this.x < 0 || this.x > 100
      )
      this.xSpeed*=-1;
    if(this.y < 300 || this.y > 200)
      this.ySpeed*=-1;
    this.x-= this.xSpeed;
    this.y-= this.ySpeed;
  }
}



let anxiety =[];
let hearts = [];
let lsize = 180;
let osize = 90;
let vsize = 90;
let esize = 90;
let lmove = 0;
let lm = 0;
let omove = 0;
let om = 0;
let vmove = 0;
let vm = 0;
let emove = 0;
let em = 0;
let heart = [];
let amplitude;
let isOn = true;
let btnX, btnY;



function setup() {
  createCanvas(850, 800);
    colorMode(HSB);
  smooth();
   amplitude = 0.5;

  for(let i = 0; i<width/40;i++){
    anxiety.push(new Anxiety());
  }
  
    for(let i = 0; i<width/15;i++){
    hearts.push(new Heart());
  }
  
    btnX = width/2;
  btnY = height/2;
  radius = 50;
 
}



function keyTyped() {
  if (key === 'l') {
    lsize = 180;
    lm = 10;
    osize = 140;
    
  } else if (key === 'o') {
    vsize = 140;
    om = 10;
  }
   else if (key === 'v') {
    esize = 140;
     vm = 10;
  }
   else if (key === 'e') {
    esize = 120;
     em = 10;
  }

}






function draw() {
  background(200,230,120);
  strokeWeight(8);
  fill(108 + sin(frameCount*0.1) * 128,100,200);
  stroke(105);
 
  textSize(lsize);
  text("l",220, 450-lmove);
  lmove = lmove + lm
  
  textSize(osize);
  text("o",355, 450-omove);
  omove = omove + om;
    textSize(vsize);
  text("v",485, 450-vmove);
  vmove = vmove + vm;
  
    textSize(esize);
  text("e",605, 450-emove);
  emove = emove + em;
  
  fill(30 + sin(frameCount*0.05) * 128);
  strokeWeight(0);
  textSize(35);
  text("KeyboardPress!",303,585+emove);
  emove = emove + em;
  
  textSize(50);
  fill(105,30,200,0+emove)
  text("Press Enter!",300,790);
  emove = emove + em;
  
  
  
  
  
  
  if (keyCode === ENTER) { 
    

    fill(200,230,120);
    rect(300,700,300,100);
    smooth();
  noStroke();
  fill(0);
  ellipse(210,400,150);
  fill(44,120,120);
  square(112,477,200,20);
    
    
      noStroke();
  fill(0);
  ellipse(650,400,150);
  fill(89,120,120);
  square(550,477,200,50);

    fill(255);
    rect(180,450,70,10);
    rect(615,450,70,10);
    
    fill(255);
    ellipse(180,400,50,50);
    ellipse(250,400,50,50);
    ellipse(610,400,50,50);
    ellipse(680,400,50,50);
    
    fill(0);
    ellipse(190,400,20,20);
    ellipse(260,400,20,20);
    ellipse(600,400,20,20);
    ellipse(670,400,20,20);
    
    
    fill(200,20,100);
     textSize(35);
     text('Physical World',310,130); 
    
     
  
  stroke(255,0,0);
  line(0,height/2,width,height/2);
 
  var off = radians(frameCount);

  for(var x=0; x<width; x= x+40)
  
  {var move = sin(x/width * radians(360) + off) * 25;
    fill(200,190,50);
    rect( x, height/2+move -130, 5, 20 );
  }
    
    
   
  for(let i = 0; i<anxiety.length; i++) {
    anxiety[i].createParticle();
    anxiety[i].moveParticle();
  }
      for(let i = 0; i<hearts.length; i++) {
    hearts[i].createHeart();
    hearts[i].moveHeart();
  }
    
      scale(0.5);
  let s = second();
	tempDate = new Date();
  let ms = tempDate.getMilliseconds();
  let sec_rotation = amplitude * sin((PI/1000)*ms);
  push();
    translate(width,height+height/1.5);
    fill(150,105,255);
    rect(-175,-1320,350,10,5);
    fill(150);
    
    translate(-135,-1310);
    if (s % 2 == 0) {
      rotate(sec_rotation);
    }
    rect(-1,0,2,400);
    ellipse(0, 400, 90, 90);
    if (s % 2 == 0) {
      rotate(-sec_rotation);
    }
    
    translate(90,0);
    rect(-1,0,2,400);
    ellipse(0, 400, 90, 90);
    fill(150);
    
    translate(90,0);
    rect(-1,0,2,400);
    ellipse(0, 400, 90, 90);
    fill(255);
    fill(150);
    
    
    
    translate(90,0);
    if (s % 2 == 1) {
      rotate(-sec_rotation);
    }
    rect(-1,0,2,400);
    ellipse(0, 400, 90, 90);
    if (s % 2 == 1) {
      rotate(sec_rotation);
    }
  pop();
    
        fill(200,20,100);
     textSize(90);
     text('Love World',620,1200);
    
    
    
    
    
    
    textSize(40);
  
  if(isOn){
    fill("white");
    background(0,30,249);
  }
  else{
    fill("black");
  }
  
  noStroke();
  ellipse(850,800,200,200);
  
  if(isOn){
    fill("black");
    text("ON",820,810);
  }
  else{
    fill("white");
    text("OFF",815,810);
  }
  
  }
  
  
  


}

function mouseClicked(){
  if(dist(btnX,btnY,mouseX,mouseY)<radius){
    if(isOn == true) isOn = false;
    else isOn = true;
  }
}
