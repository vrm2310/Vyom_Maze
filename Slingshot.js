class SlingShot{
    constructor(bodyA, pointB){
        
     
        var options = {
            bodyA: bodyA,
            bodyB: pointB,
            stiffness:0.5,
            length:70
                
            
        }
       
        this.sling = Matter.Constraint.create(options);
        
        World.add(world, this.sling);
        
    }
    display()
    {
        if(this.sling.bodyA!=null)
        {
            var pointa=this.sling.bodyA.position;
            var pointb=this.sling.bodyB.position;
            strokeWeight(8);
            
            line(pointa.x,pointa.y,pointb.x,pointb.y)
        }
    }
    fly()
    {
        this.sling.bodyA=null;
    }
}