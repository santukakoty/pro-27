class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY ){
    this.offsetX=offsetX
    this.offsetY=offsetY
        var options={
            //our bodyA is the bird's body
            bodyA: bodyA,
            bodyB: bodyB,
            //pointB: {x:this.offsetX, y:this.offsetY}
           // stiffness: 0.04,
            //length: 10
        }
        this.rope= Constraint.create(options);
        World.add(world,this.rope);
        
    }
display(){
    var pointA =this.rope.bodyA.position
    var pointB= this.rope.bodyB.position
  // fill(255,0,255);
line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y);
}

}