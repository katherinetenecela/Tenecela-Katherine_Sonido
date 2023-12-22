let osc, freq, amp;
let t = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  osc = new p5.Oscillator("sawtooth");
  noStroke();
}

function draw() {
  // Color de fondo que combina con las figuras
  background(20, 200, 255);

  let mouseXFraction = mouseX / width;
  amp = map(mouseXFraction, 0, 1, 0, 1);

  osc.start();
  freq = constrain(map(noise(t), 0, 1, 500, 900), 500, 900);

  osc.freq(freq, 0.1);
  osc.amp(amp, 0.1);
  t += 0.01;

  if (mouseX < width / 2) {
    fill(20, 250, 20);
    rect(0.25 * width, height / 2 - 25, 50, 50);
  }

  if (mouseX >= width / 2) {
    fill(250, 220, 25);
    rect(0.75 * width - 50, height / 2 - 25, 100, 50);
  }
}
