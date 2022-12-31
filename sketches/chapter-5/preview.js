let bugs = []
let numBugs = 10
let coupling = 1.5
let KN = coupling / numBugs

function setup() {
  createCanvas(200, 200)
  describe('Ten circles moving in synchrony')
  for (let i = 0; i < numBugs; i += 1) {
    let bug = new Bug()
    bugs.push(bug)
  }
}

function draw() {
  drawSpace()

  for (let bug of bugs) {
    bug.sync()
  }

  for (let bug of bugs) {
    bug.draw()
    bug.update()
    bug.checkEdges()
  }
}

function drawSpace() {
  background('midnightblue')
}

class Bug {
  constructor() {
    this.x = 100
    this.y = 100
    this.r = 2.5
    this.angle = random(TWO_PI)
    this.dadt = 1
    this.dt = 0.01
    this.freq = random(5, 10)
  }

  draw() {
    let a = map(this.angle % TWO_PI, 0, TWO_PI, 0, 255)
    fill(255, a)
    stroke(255, a)
    circle(this.x, this.y, 2 * this.r)
  }

  update() {
    this.x += cos(this.angle)
    this.y += sin(this.angle)
    this.angle += this.dadt * this.dt
  }

  checkEdges() {
    if (this.x > 200 + this.r) {
      this.x = -this.r
    }
    if (this.x < -this.r) {
      this.x = 200 + this.r
    }
    if (this.y > 200 + this.r) {
      this.y = -this.r
    }
    if (this.y < -this.r) {
      this.y = 200 + this.r
    }
  }

  sync() {
    this.dadt = this.freq
    for (let bug of bugs) {
      this.dadt += KN * sin(bug.angle - this.angle)
    }
  }
}