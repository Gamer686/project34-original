class Throw{
    
    constructor(bodyA,pointB){
      var  options ={
          bodyA:bodyA,
          pointB:pointB,
          length:250,
          stiffness:1
      }
      this.throw=Constraint.create(options)
      World.add(world,this.throw)
    }
    display(){
        var anchorA = this.throw.bodyA.position
        var anchorB = this.throw.pointB
        stroke("purple")
        line(anchorA.x,anchorA.y,anchorB.x,anchorB.y)
    }
}