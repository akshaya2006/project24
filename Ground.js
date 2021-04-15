class Ground {
constructor(x,y, widht, height) {
  var options = {
   isStatic: true,
   'retitution':0,
   'friction':0,
   'density':1
  } 
  this.body = Bodies.rectangle(x, y, widht, height, options);
  this.widht = widht;
  this.height = height;

  World.add(world, this.body);
}
display(){
  rectMode(CENTER);

  fill(255);

    rect(this.body.position.x, this.body.position.y, this.widht, this.height);
}
};