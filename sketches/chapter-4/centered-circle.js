function setup() {
  createCanvas(200, 200)
  describe('A circle centered on a square with horizontal and vertical midlines')
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
}