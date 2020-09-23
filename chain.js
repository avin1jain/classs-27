class Chain{
constructor(bodyA,bodyB){
var options={
bodyA:bodyA,
bodyB:bodyB,
length:10,
stiffness:0.04

}
this.chain=Constraint.create(options) 
World.add(world,this.chain)

}
    display(){
 var pointc=this.chain.bodyA.position
 var pointD=this.chain.bodyB.position

  line(pointc.x,pointc.y,pointD.x,pointD.y)



    }
}