function setup() {
  createCanvas(200, 200)
  describe('A point traveling along a diagonal line')
}

function draw() {
  background('midnightblue')
  stroke('ghostwhite')
  strokeWeight(2)
  let x = frameCount * 0.5
  let y = 2 * x + 50
  point(x, y)
}