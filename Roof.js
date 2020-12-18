class Roof {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      World.add(world, this.body);
}
    display(){
      var paperpos = this.body.position;
      push()
      translate(paperpos.x,paperpos.y);
      rectMode(CENTER);
      fill("yellow");
      rect(0,0, this.width, this.height);
      pop()
    }
};