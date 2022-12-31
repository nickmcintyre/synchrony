function setup() {
  createCanvas(200, 200)
  describe('A moon in the nighttime sky')
}

function draw() {
  drawSky()
  drawMoon()
}

function drawSky() {
  background('midnightblue')
}

function drawMoon() {
  stroke('lemonchiffon')
  fill('lemonchiffon')
  circle(150, 50, 50)
}