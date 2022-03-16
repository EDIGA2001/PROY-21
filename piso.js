class piso
{
    constructor(x, y, w, h) 
    {
      let options = {
      isStatic:true
      };

      this.body = Bodies.rectangle(x, y, w, h, options);
      this.w = w;
      this.h = h;
      World.add(world, this.body);
    }

    show() {
        pos = this.body.position;
        Push();
        rectMode(CENTER);
        stroke(255);
        Fill(127);
        rect(pos.x, pos.y, this.w, this.h);
        Pop();
    }
}