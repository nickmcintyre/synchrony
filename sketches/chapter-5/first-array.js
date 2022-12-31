function setup() {
  createCanvas(200, 200)
  describe('Three concentric circles')
}

function draw() {
  background('midnightblue')

  strokeWeight(5)
  stroke('slateblue')
  fill('orchid')

  let radii = [80, 40, 20]
  for (let r of radii) {
    circle(100, 100, 2 * r)
  }
}