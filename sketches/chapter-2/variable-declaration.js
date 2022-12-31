function setup() {
  createCanvas(200, 200)
  describe('A point traveling from left to right')
}

function draw() {
  background('midnightblue')
  stroke('ghostwhite')
  strokeWeight(2)
  let x = frameCount * 0.5
  point(x, 100)
}