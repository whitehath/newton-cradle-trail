class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
            this.rope=Constraint.create(options);
            World.add(world,this.rope);
    }
            display(){
                var point1=this.rope.bodyA.position;
                var point2=this.rope.bodyB.position;

                
                strokeWeight(2);
                

                var Anchor1X=point1.x;
                var Anchor1y=point1.y;

                var Anchor2X=point2.x + this.offsetx;
                var Anchor2y=point2.y + this.offsetY;   

                line(Anchor1X,Anchor1y,Anchor2X,Anchor2y);
                

            }
}