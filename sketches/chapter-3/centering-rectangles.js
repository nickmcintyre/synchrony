function setup() {
  createCanvas(200, 200)
  describe('A gray rectangle on a dark blue square')
}

function draw() {
  background('midnightblue')

  fill('gray')
  stroke('gray')
  rectMode(CENTER)
  rect(100, 100, 9, 81)
}