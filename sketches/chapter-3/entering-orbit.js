function setup() {
  createCanvas(200, 200)
  describe('A light yellow circle rotating around a light blue circle')
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
  let angle = frameCount
  rotate(angle)
  translate(70, 0)
  fill('lemonchiffon')
  stroke('lemonchiffon')
  circle(0, 0, 20)
}