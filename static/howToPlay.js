function preload() {
    rules = loadImage("static/instructions.png");
}

function setup() {
    createCanvas(400, 400);
}

function draw() {
    image(rules, w/2 - 200, h/2 - 200, 400, 400);
}
