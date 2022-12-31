function setup() {
  createCanvas(200, 200)
  describe('A point traveling along a diagonal line')
}

function draw() {
  background('midnightblue')
  stroke('ghostwhite')
  strokeWeight(2)
  let x = frameCount * 0.5
  let y = f(x) // x (a number) is the argument
  point(x, y)
}

function f(x) {
  return 0.5 * x + 50
}