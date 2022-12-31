function setup() {
  createCanvas(200, 200)
  describe('A single point moving along the path of a sine wave')
}

function draw() {
  background('black')

  let r = 50
  let x = frameCount
  let y = r * sin(x * 0.01 * TWO_PI) + 100

  strokeWeight(3)
  stroke('dodgerblue')
  point(x, y)
}