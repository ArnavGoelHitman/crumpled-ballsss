class Ground {
    constructor() {

      var options={
        isStatic:true,
      }
      
      this.body = Bodies.rectangle(width/2,650,width,10,options);
      
     
      
      
      World.add(world, this.body);
      console.log(this.body);
    }
    display(){
      var pos =this.body.position;
  
     fill("yellow");
    rectMode(CENTER);
     rect(pos.x,pos.y,width,10);
     
      
    
   
    }
  }