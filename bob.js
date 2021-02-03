class Bob{
constructor(x,y,r){
    var options ={
        isStatic:false,
        restitution:1,
        friction:0,
        densty:0.8,
   }
   this.body=Bodies.circle(x,y,r/2,options);
   this.x=x;
   this.y=y;
   this.r=r;
   
   World.add(world,this.body);

   console.log(this.body);


}

display(){
    push();
    translate(this.body.position.x,this.body.position.y);
    ellipseMode(RADIUS);
    fill(255,0,255);
    ellipse(0,0,this.r,this.r);
    pop();
}


}