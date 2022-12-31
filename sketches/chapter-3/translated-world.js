function setup() {
  createCanvas(200, 200)
  describe('A light blue sector in the corner of a dark blue square')
}

function draw() {
  background('midnightblue')

  translate(100, 100)
  stroke('skyblue')
  fill('skyblue')
  circle(100, 100, 70)
}