  class Key{
    constructor(x, y,radius) {
        var options = {
           
          restitution : 2.0,
          isStatic:false 
        }
        this.body = Bodies.circle(x, y, radius, options);
       this.radius = radius;
        World.add(world, this.body);
        this.key=loadImage("key.png");
       console.log(this.body);
      } 
      display(){
       
        imageMode(CENTER);
        fill(128,0,128);
        image( this.key,this.body.position.x,this.body.position.y,50,50 );
      }
}