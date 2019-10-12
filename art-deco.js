function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  noFill();
  for (var i = 10; i <= 60; i = i + 10) {
    for (var x = 20; x <= 390; x = x + 20) {
    rectMode(CENTER);
    rect(x, 250, i, i);
    }
  }
}
