background(255);

function basketBall(x, y, s) {
  push();
  noStroke();
  fill(173, 72, 13);
  arc(x, y, 100 * s, 100 * s, 0, PI);
  arc(x, y - 2, 100 * s, 100 * s, PI, 0);
  pop();

  push();
  strokeWeight(6 * s);
  fill(0);
  line(x - 47 * s, y, x + 47 * s, y);
  pop();

  push();
  beginShape();
  noFill();
  strokeWeight(2 * s);
  vertex(x - 46 * s, y - 16 * s);
  bezierVertex(
    x - 24 * s,
    y - 50 * s,
    x + 26 * s,
    y - 50 * s,
    x + 46 * s,
    y - 16 * s
  );
  endShape();

  beginShape();
  vertex(x - 46 * s, y + 17 * s);
  bezierVertex(
    x - 19 * s,
    y + 48 * s,
    x + 21 * s,
    y + 48 * s,
    x + 46 * s,
    y + 17 * s
  );
  endShape();
  pop();
}

function drawLetter(letter, positionX, positionY, size, color) {
  textSize(size);
  fill(color);
  text(letter, positionX, positionY);
}

// nike logo
function nikeLogo(x, y, f, color) {
  fill(color);
  noStroke();
  quad(
    x,
    y,
    x + 12 * f,
    y + 4 * f,
    x + 40 * f,
    y - 2 * f,
    x + 12 * f,
    y + 11 * f
  );
}

function framework(x, y, s) {
  stroke(0);
  fill(230, 230, 230);
  rect(x - 25 * s, y - 20 * s, 150 * s, 100 * s, 18);
  fill(0);
  rect(x, y, 100 * s, 50 * s);
}

function basket(x, y, s) {
  push();
  noFill();
  strokeWeight(4 * s);
  stroke(128, 128, 128);
  beginShape();
  vertex(x - 50 * s, y + 1 * s);
  bezierVertex(
    x - 37 * s,
    y + 28 * s,
    x - 37 * s,
    y + 24 * s,
    x - 30 * s,
    y + 87 * s
  );
  endShape();

  beginShape();
  vertex(x + 50 * s, y); // why?!
  bezierVertex(
    x + 43 * s,
    y + 28 * s,
    x + 33 * s,
    y + 24 * s,
    x + 30 * s,
    y + 87 * s
  );
  endShape();
  pop();

  push();
  noFill();
  stroke(100, 100, 100);
  strokeWeight(5 * s);
  ellipse(x, y, 100 * s, 20 * s);
  pop();
  push();
  strokeWeight(2);
  stroke(128, 128, 128);
  line(x - 30 * s, y + 8 * s, x - 39 * s, y + 22 * s);
  line(x - 21 * s, y + 9 * s, x + 17 * s, y + 87 * s);
  line(x - 9 * s, y + 11 * s, x - 33 * s, y + 52 * s);
  line(x + 5 * s, y + 10 * s, x - 30 * s, y + 73 * s);
  line(x + 18 * s, y + 11 * s, x - 15 * s, y + 83 * s);
  line(x + 34 * s, y + 9 * s, x + 3 * s, y + 73 * s);
  line(x + 34 * s, y + 9 * s, x - 4 * s, y + 86 * s);
  line(x + 18 * s, y + 11 * s, x + 38 * s, y + 34 * s);
  line(x + 5 * s, y + 10 * s, x + 34 * s, y + 50 * s);
  line(x - 9 * s, y + 11 * s, x + 31 * s, y + 73 * s);
  line(x - 30 * s, y + 8 * s, x - 5 * s, y + 85 * s);
  line(x - 38 * s, y + 21 * s, x - 15 * s, y + 83 * s);
  line(x + 32 * s, y + 47 * s, x + 17 * s, y + 87 * s);
  pop();
}

function reallbasketball(j, k, d) {
  basketBall(j, k, 1 * d);
  nikeLogo(j - 16 * d, k - 20 * d, 1 * d, 0);
  drawLetter("N", j - 26 * d, k + 28 * d, 20 * d, 211, 211, 211);
  drawLetter("B", j - 9 * d, k + 30 * d, 30 * d, 0);
  drawLetter("A", j + 14 * d, k + 28 * d, 20 * d, 211, 211, 211);
}

let n = 100;
let y = 100;
let basketballRotation = 0;
let m = 100;
let speed = 1 / 3;
let speed1 = 1;
function draw() {
  clear();

  n = n + speed;
  y = y + speed;
  m = m + speed1;

  framework(m, 200, 1.5);
  basket(m + 75, 240, 2 / 3);
  if (m > 400) {
    speed1 *= -1;
  } else if (m < 100) {
    speed1 *= -1;
  }

  if (n > 300 || y > 200) {
    speed *= 0;
  }

  push();
  translate(n, y);
  rotate(basketballRotation);
  reallbasketball(0, 0, 1 / 2);
  basketballRotation = basketballRotation + 0.02;
  pop();
}
