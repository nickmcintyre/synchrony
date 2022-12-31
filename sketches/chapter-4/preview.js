function setup() {
  createCanvas(200, 200)
  describe('Waves rolling slowly across the surface of the sea')
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
  stroke('lemonchiffon')
  fill('lemonchiffon')
  circle(150, 50, 50)
}

function drawWave() {
  stroke('slateblue')
  fill('slateblue')
  beginShape()
  vertex(0, 200)
  for (let x = 0; x < 200; x = x + 1) {
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
  let phase = frameCount * 0.01
  let y = amp * sin(x * freq * TWO_PI + phase) + mid
  return y
}