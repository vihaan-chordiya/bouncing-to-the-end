class Dustbin{
    constructor(x,y,width,height) {
 
     var option = {
       isStatic : true
     }
     this.width = width;
     this.height = height;
     this.body = Bodies.rectangle(x,y,width,height,option);
     
     World.add(world, this.body);
 
     }
 
     display() {
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y)
      rectMode(CENTER)
      fill("white");
      imageMode(CENTER)
      rect(0,0,this.width,this.height)
      pop();   
     }
 
 
 }