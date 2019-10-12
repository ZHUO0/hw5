function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  for (var i = 20; i <= 450; i = i + 20) {
    line(i, 20, i, 450);
  }
}
