function setup() {
  createCanvas(200, 200)
  describe('A right triangle rotating around the center of a circle')
}

function draw() {
  background('black')

  translate(100, 100)
  stroke('white')
  line(-100, 0, 100, 0) // x-axis
  line(0, -100, 0, 100) // y-axis

  let r = 50
  noFill()
  circle(0, 0, 2 * r)

  let angle = frameCount * 0.01

  let x = r * cos(angle)
  let y = r * sin(angle)
  stroke('red')
  line(0, 0, x, 0) // horizontal
  stroke('dodgerblue')
  line(x, 0, x, y) // vertical

  rotate(angle)
  stroke('white')
  line(0, 0, r, 0)
}