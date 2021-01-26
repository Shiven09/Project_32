class Box {
    constructor(x, y, width, height) {
    this.Visibility = 255;
      var options = {
          isStatic : false,
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      console.log(this.body.speed);
      if(this.body.speed < 3)
      {
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
    else 
    {
    World.remove(world, this.body);
    push()
    tint(255, this.Visibility);
    this.Visibility = this.Visibility - 1;
    pop();
} 
}

score(){
  if (this.Visiblity < 0 && this.Visiblity > -105){
    score++;
  }
}




}
  