let x = 100
let y = 100
let r = 2.5

function setup() {
  createCanvas(200, 200)
  describe('A circle moving randomly in small increments')
}

function draw() {
  drawSpace()
  drawBug()
  update()
  checkEdges()
}

function drawSpace() {
  background('midnightblue')
}

function drawBug() {
  fill('ghostwhite')
  stroke('ghostwhite')
  circle(x, y, 2 * r)
}

function update() {
  x += random(-2, 2)
  y += random(-2, 2)
}

function checkEdges() {
  if (x > 200) {
    x = 0
  }
  if (x < 0) {
    x = 200
  }
}