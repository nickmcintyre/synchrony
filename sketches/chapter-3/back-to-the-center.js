function setup() {
  createCanvas(200, 200)
  describe('A light blue circle in the center of a dark blue square')
}

function draw() {
  background('midnightblue')

  translate(100, 100)
  stroke('skyblue')
  fill('skyblue')
  circle(0, 0, 70)
}