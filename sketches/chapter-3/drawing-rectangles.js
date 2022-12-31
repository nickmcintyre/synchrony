function setup() {
  createCanvas(200, 200)
  describe('A gray rectangle on a dark blue square')
}

function draw() {
  background('midnightblue')

  fill('darkgray')
  stroke('darkgray')
  rect(100, 100, 9, 81)
}