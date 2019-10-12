function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(255)
  for (var i = 20; i <= 390; i = i + 10) {
    for (var i'= 20; i' <= 390; i'= i' +10) {
    ellipse(i, i', 20);
    }
  }
