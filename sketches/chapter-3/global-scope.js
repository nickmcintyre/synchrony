let angle = 0 // visible everywhere

function setup() {
  createCanvas(200, 200)
  describe('A monolith orbiting a moon orbiting a planet')
}

function draw() {
  drawSpace()
  drawPlanet()
  drawMoon()
  drawMonolith()
  angle = frameCount * 0.01
}

function drawSpace() {
  background('midnightblue')
}

function drawPlanet() {
  stroke('skyblue')
  fill('skyblue')
  translate(100, 100)
  circle(0, 0, 70)
}

function drawMoon() {
  rotate(angle)
  translate(70, 0)
  fill('lemonchiffon')
  stroke('lemonchiffon')
  circle(0, 0, 20)
}

function drawMonolith() {
  rotate(angle)
  translate(15, 0)
  rectMode(CENTER)
  fill('darkgray')
  stroke('darkgray')
  rect(0, 0, 2, 4)
}