let x = 0
let y = 0
let z = 0
let dx = 1
let dy = 0.5
let dz = 1

function setup() {
  createCanvas(200, 200, WEBGL)
  describe('A sphere bouncing off the edges of an invisible box')
}

function draw() {
  background('midnightblue')
  lights()
 
  noStroke()
  fill('ghostwhite')
  translate(x, y, z)
  sphere(20)

  x += dx
  y += dy
  z += dz

  if (x > width/2) {
    dx = -abs(dx)
  }
  if (x < -width/2) {
    dx = abs(dx)
  }
  if (y > height/2) {
    dy = -abs(dy)
  }
  if (y < -height/2) {
    dy = abs(dy)
  }
  if (z > width/2) {
    dz = -abs(dz)
  }
  if (z < -width/2) {
    dz = abs(dz)
  }
}