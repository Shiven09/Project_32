class Polygon{
    constructor(x, y, r) {
        var options = {
            isStatic : true,
            'restitution':0.3,
            'friction':0,
            'density':1.2
        }
        
        this.x = x;
        this.y = y;
        this.r = r;
        this.body =Bodies.circle(this.x, this.y,(this.r-20)/2,options);
        
        
        this.image = loadImage("polygon.png");
         World.add(world, this.body);
      }
      display(){
        var polygonpos = this.body.position;
        push();
        translate(polygonpos.x, polygonpos.y);
       
        imageMode(CENTER);
        fill(255,0,255)
        image( this.image,0, 0, this.r,this.r);
        pop();
      }
}