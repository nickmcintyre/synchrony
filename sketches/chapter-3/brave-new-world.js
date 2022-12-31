function setup() {
  createCanvas(200, 200)
  describe('A light blue circle in the middle of a dark blue square')
}

function draw() {
  background('midnightblue')

  stroke('skyblue')
  fill('skyblue')
  circle(100, 100, 70)
}