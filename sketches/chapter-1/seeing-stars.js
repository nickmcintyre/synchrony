function setup() {
  createCanvas(200, 200)
  describe('Three points in a row across the middle of a square')
}

function draw() {
  background('midnightblue')
  stroke('ghostwhite')
  strokeWeight(3)
  point(50, 100)
  point(100, 100)
  point(150, 100)
}