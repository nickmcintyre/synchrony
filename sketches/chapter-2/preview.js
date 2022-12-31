function setup() {
  createCanvas(200, 200)
  describe('A moon and meteor in the nighttime sky')
}

function draw() {
  drawSky()
  drawMoon()
  drawMeteor()
}

function drawSky() {
  background(25, 25, 112, 30)
  let x = frameCount * 0.5
  if (x < 50) {
    background(25, 25, 112)
  }
}

function drawMoon() {
  fill('lemonchiffon')
  stroke('lemonchiffon')
  circle(150, 50, 50)
}

function drawMeteor() {
  let x = frameCount * 0.5
  let y = f(x)

  stroke('ghostwhite')
  strokeWeight(2)
  point(x, y)
}

function f(x) {
  return 0.5 * x + 25
}