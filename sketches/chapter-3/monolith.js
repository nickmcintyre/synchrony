function setup() {
  createCanvas(200, 200)
  describe('A monolith orbiting a moon orbiting a planet')
}

function draw() {
  drawSpace()
  drawPlanet()
  drawMoon()
  drawMonolith()
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

function drawMonolith() {
  let angle = frameCount * 0.01
  rotate(angle)
  translate(15, 0)
  rectMode(CENTER)
  fill('darkgray')
  stroke('darkgray')
  rect(0, 0, 2, 4)
}