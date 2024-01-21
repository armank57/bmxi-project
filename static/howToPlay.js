function updateContainer() {
    container = select('#sketchContainer');
    w = parseFloat(getComputedStyle(container.elt).getPropertyValue('width'));
    h = parseFloat(getComputedStyle(container.elt).getPropertyValue('height'));
  }

  function windowResized() {
    updateContainer();
    resizeCanvas(w, h);
    drawing = true;
  }
  
function preload() {
    rules = loadImage("static/instructions.png");
}

function setup() {
    updateContainer();
    canvas = createCanvas(w, h);
    canvas.parent("#sketchContainer");
}

function draw() {
    image(rules, w/4, h/16, w/2, h/1.5);
}
