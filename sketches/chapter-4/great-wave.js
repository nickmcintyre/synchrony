function setup() {
  createCanvas(200, 200)
  describe('A standing wave on the surface of the sea')
}

function draw() {
  drawSky()
  drawMoon()
  drawWave()
}

function drawSky() {
  background('midnightblue')
}

function drawMoon() {
  fill('lemonchiffon')
  stroke('lemonchiffon')
  circle(150, 50, 50)
}

function drawWave() {
  stroke('slateblue')
  fill('slateblue')
  beginShape()
  vertex(0, 200)
  for (let x = 0; x < 200; x += 1) {
    let y = waveHeight(x)
    vertex(x, y)
  }
  vertex(200, 200)
  endShape(CLOSE)
}

function waveHeight(x) {
  let amp = 10
  let freq = 0.002
  let mid = 150
  let y = amp * sin(x * freq * TWO_PI) + mid
  return y
}