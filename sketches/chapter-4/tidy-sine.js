function setup() {
  createCanvas(200, 200)
  describe('A single point moving along the path of a sine wave')
}

function draw() {
  background('black')

  let amp = 50
  let freq = 0.01
  let mid = 100
  let x = frameCount
  let y = amp * sin(x * freq * TWO_PI) + mid

  strokeWeight(3)
  stroke('dodgerblue')
  point(x, y)
}