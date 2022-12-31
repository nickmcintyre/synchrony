// Thanks Juan Carlos and Coding Train!
// CC-BY-NC 4.0

const portraitSketches = {};

function portrait(person) {
  const p = new p5((sketch) => {
    let path = [];
    const drawSpeed = 10;
    const bufferSize = 20;
    let portraitPoints;
    let timeStep = 0;
    let fourierX;
    let speed;
    let scaleFactor;

    sketch.preload = function () {
      portraitPoints = sketch.loadJSON(`/sketches/portraits/${person}.json`);
    };

    sketch.setup = function () {
      const personElement = sketch.select(`#${person}`);
      speed = sketch.int(personElement.attribute("data-speed")) || 1;
      scaleFactor =
        sketch.float(personElement.attribute("data-scale")) || 0.00001;
      const w = personElement.width;
      const h = (w * 5) / 9;
      sketch.createCanvas(w, h);
      rescalePortrait(portraitPoints);
      fourierX = fft(portraitPoints);
    };

    sketch.draw = function () {
      sketch.background("#222");
      sketch.push();
      sketch.noFill();
      sketch.strokeWeight(2);
      sketch.stroke(255);
      sketch.rect(1, 1, sketch.width - 2, sketch.height - 2);
      sketch.pop();
      renderCycles(fourierX, bufferSize);
    };

    function rescalePortrait(points) {
      for (let i = 0; i < points.x.length; i += 1) {
        points.x[i] *= scaleFactor;
        points.y[i] *= scaleFactor;
      }
    }

    function fft(points) {
      const X = ten.scope(() => {
        const x = ten.complex(points.x, points.y);
        const X = ten.fft(x);
        let re = X.real();
        let im = X.imag();
        let amp = re.sq().add(im.sq()).sqrt();
        let phase = im.atan2(re);
        [re] = re.arraySync();
        [im] = im.arraySync();
        [amp] = amp.arraySync();
        [phase] = phase.arraySync();
        const output = [];
        for (let k = 0; k < points.x.length; k += 1) {
          output.push({
            re: re[k],
            im: im[k],
            amp: amp[k],
            phase: phase[k],
            freq: k * drawSpeed,
          });
        }
        output.sort((a, b) => b.amp - a.amp);
        return output;
      });
      return X;
    }

    function epicycles(fourier, numCycles, buffer) {
      let x = sketch.width / 2;
      let y = sketch.height / 2;
      for (let i = 0; i < numCycles; i += 1) {
        const prevx = x;
        const prevy = y;
        const { amp, freq, phase } = fourier[i];
        x += amp * sketch.cos(freq * timeStep + phase);
        y += amp * sketch.sin(freq * timeStep + phase);
        // Only draw machinery on first iteration
        if (buffer === 0) {
          sketch.push();
          sketch.stroke(90);
          sketch.strokeWeight(1);
          sketch.noFill();
          sketch.circle(prevx, prevy, amp * 2);
          sketch.line(prevx, prevy, x, y);
          sketch.pop();
        }
      }
      return { x, y };
    }

    function renderCycles(fourier, bufferSize) {
      const numCycles = sketch.int(fourier.length / speed);
      sketch.stroke(255);
      sketch.strokeWeight(1);
      sketch.strokeJoin(sketch.ROUND);
      sketch.noFill();
      for (let i = 0; i < bufferSize; i += 1) {
        const v = epicycles(fourier, numCycles, i);
        path.unshift(v);
        sketch.beginShape();
        path.forEach((p) => sketch.vertex(p.x, p.y));
        sketch.endShape();
        const dt = sketch.TWO_PI / numCycles;
        timeStep += dt;
        if (drawSpeed * timeStep > sketch.TWO_PI) {
          timeStep = 0;
          path = [];
        }
      }
    }
  }, person);

  portraitSketches[person] = p;
}
