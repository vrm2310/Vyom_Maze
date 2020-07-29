class ground{
    constructor(x, y,width,height) {
        var options = {
           
          restitution : 1.0,
          density : 4.0,
          isStatic : true,
          mass:10.0
        
            
             
            
        }
        this.body = Bodies.rectangle(x, y, width,height, options);
       this.width = width;
       this.height=height;
        World.add(world, this.body);
       
      } 
      display(){
       //push();
      // translate(this.body.position.x,this.body.position.y);
      // rotate(this.body.angle);
        rectMode(CENTER);
        fill(128,0,128);
        rect( this.body.position.x,this.body.position.y,this.width,this.height );
     //   pop();
       
      }
}