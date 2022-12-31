let angle = 0
let freq = 0.01

function setup() {
  createCanvas(200, 200)
  describe('A monolith orbiting a moon orbiting a planet')
}

function draw() {
  drawSpace()
  drawPlanet()
  drawMoon()
  drawMonolith()
  update()
}

function drawSpace() {
  background('midnightblue')
}

function drawPlanet() {
  translate(100, 100)
  fill('skyblue')
  stroke('skyblue')
  circle(0, 0, 80)
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
  fill('darkgray')
  stroke('darkgray')
  rectMode(CENTER)
  rect(0, 0, 2, 4)
}

function update() {
  angle = frameCount * freq
}