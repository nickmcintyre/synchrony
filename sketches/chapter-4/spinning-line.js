function setup() {
  createCanvas(200, 200)
  describe('A line rotating around the center of a circle')
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
  rotate(angle)
  line(0, 0, r, 0)
}