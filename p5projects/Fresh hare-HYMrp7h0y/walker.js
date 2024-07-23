class Walker {
  constructor(x, y) {
    // this.pos = createVector(x, y);
    // this.vel = createVector(1, -1)
    this.vel = p5.Vector.random2D()
    // console.log(this.vel)
  }

  update() {
    // this.pos.add(this.vel)
    this.vel.mult(10)
  }

  show() {
    // noStroke()
    fill(20, 190, 200)
    line(0, 0, this.vel.x, this.vel.y)
  }
}