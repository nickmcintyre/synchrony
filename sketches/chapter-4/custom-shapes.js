function setup() {
  createCanvas(200, 200)
  describe('A blue triangle on a black square')
}

function draw() {
  background('black')

  stroke('dodgerblue')
  fill('dodgerblue')
  beginShape()
  vertex(50, 50)
  vertex(150, 50)
  vertex(100, 150)
  endShape(CLOSE)
}