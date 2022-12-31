function setup() {
  createCanvas(200, 200)
  describe('Two points traveling along diagonal lines')
}

function draw() {
  background('midnightblue')
  stroke('ghostwhite')
  strokeWeight(2)
  let x = frameCount * 0.5
  let y = f(x)
  point(x, y)
  y = g(x)
  point(x, y)
}

function f(x) {
  return 0.5 * x + 50
}

function g(x) {
  return 2 * x + 100
}
  