function setup() {
  createCanvas(200, 200)
  describe('A sine wave')
}

function draw() {
  background('black')

  let amp = 50
  let freq = 0.01
  let mid = 100
  strokeWeight(3)
  stroke('dodgerblue')
  for (let x = 0; x < 200; x += 1) {
    let y = amp * sin(x * freq * TWO_PI) + mid  
    point(x, y)
  }
}