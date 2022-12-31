let x = 0
let y = 0
let r = 2.5

function setup() {
  createCanvas(200, 200)
  describe('A circle moving along a diagonal line')
}

function draw() {
  drawSpace()
  drawBug()
  update()
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
  x += 1
  y += 1
}