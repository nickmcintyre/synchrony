function setup() {
  createCanvas(200, 200)
  describe('A moon orbiting a planet')
}

function draw() {
  drawSpace()
  drawPlanet()
  drawMoon()
}

function drawSpace() {
  background('midnightblue')
}

function drawPlanet() {
  translate(100, 100)
  stroke('skyblue')
  fill('skyblue')
  circle(0, 0, 70)
}

function drawMoon() {
  let angle = frameCount * 0.01
  rotate(angle)
  translate(70, 0)
  fill('lemonchiffon')
  stroke('lemonchiffon')
  circle(0, 0, 20)
}