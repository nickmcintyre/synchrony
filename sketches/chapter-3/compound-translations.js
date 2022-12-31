function setup() {
  createCanvas(200, 200)
  describe('A light yellow circle next to a light blue circle')
}

function draw() {
  background('midnightblue')

  translate(100, 100)
  stroke('skyblue')
  fill('skyblue')
  circle(0, 0, 70)

  translate(70, 0)
  fill('lemonchiffon')
  stroke('lemonchiffon')
  circle(0, 0, 20)
}
  