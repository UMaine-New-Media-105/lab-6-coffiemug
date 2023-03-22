let snowballX
let snowballY
let rollSpeed
let snowballSize
let growth

let snowflakeX
let snowflakeY
let snowflakeSize

let notCaught


function setup() {
   
  
  snowballX = random(15,385);
  snowballY = random(15,385);
  rollSpeed = 10;
  snowballSize = 30
  growth = 5
  
  snowflakeX = random(15,385);
  snowflakeY = random(15,385);
  snowflakeSize = 30
  
  notCaught = true
    
  createCanvas(400, 400);
}

function draw() {
  background(220);
  snowball(snowballX,snowballY,1);
  snowflake(snowflakeX,snowflakeY,1)
  
  if(dist(snowballX,snowballY,snowflakeX,snowflakeY)<=snowballSize/2+snowflakeSize/2){
      
    notCaught=false
    //snowballSize=snowballSize+growth;
  // snowball(snowballX,snowballY,1.5)

  }  
}

  
function snowball(x,y,size){
  if (notCaught){
  push();
  translate(x,y);
  scale(size);
  noStroke();
  ellipse(0,0,snowballSize)
  pop();  
  } else{
    push();
  translate(x,y);
  scale(size*1.5);
  noStroke();
  ellipse(0,0,snowballSize)
  pop();
  }
  
  
}
function snowflake(x,y,size){
  if(notCaught==true){
  push();
  translate(x,y);
  scale(size);
  strokeWeight(6);
  stroke('white');
  line(-15,0,15,0);
  line(0,-15,0,15);
  line(-10,10,10,-10);
  line(-10,-10,10,10); 
  pop();
  }
}

function keyPressed(){
  if(keyCode===RIGHT_ARROW){
    snowballX=snowballX+rollSpeed
  }
    else if(keyCode===LEFT_ARROW){
    snowballX=snowballX-rollSpeed
  }
  else if(keyCode===UP_ARROW){
    snowballY=snowballY-rollSpeed
  }
  else if(keyCode===DOWN_ARROW){
    snowballY=snowballY+rollSpeed
  }
}
