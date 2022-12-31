let bugs = []
let numBugs = 10

function setup() {
  createCanvas(200, 200)
  describe('Ten circles moving in different directions')
  for (let i = 0; i < numBugs; i += 1) {
    let bug = new Bug()
    bugs.push(bug)
  }
}

function draw() {
  drawSpace()

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
  }

  draw() {
    fill('ghostwhite')
    stroke('ghostwhite')
    circle(this.x, this.y, 2 * this.r)
  }

  update() {
    this.x += cos(this.angle)
    this.y += sin(this.angle)
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
}