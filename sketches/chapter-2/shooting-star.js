function setup() {
  createCanvas(200, 200)
  describe('A moon and meteor in the nighttime sky')
}

function draw() {
  drawSky()
  drawMoon()
  drawShootingStar()
}

function drawSky() {
  background('midnightblue')
}

function drawMoon() {
  stroke('lemonchiffon')
  fill('lemonchiffon')
  circle(150, 50, 50)
}

function drawShootingStar() {
  let x = frameCount * 0.5
  let y = 0.5 * x + 25

  stroke('ghostwhite')
  strokeWeight(2)
  point(x, y)
}