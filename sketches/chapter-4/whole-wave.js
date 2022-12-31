function setup() {
  createCanvas(200, 200)
  describe('A sine wave being slowly drawn from left to right')
}

function draw() {
  let amp = 50
  let freq = 0.01
  let mid = 100
  let x = frameCount
  let y = amp * sin(x * freq * TWO_PI) + mid

  strokeWeight(3)
  stroke('dodgerblue')
  point(x, y)
}