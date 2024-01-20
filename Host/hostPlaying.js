//NOTE THIS FILE IS THE CENTRAL FILE FOR ALL FUNCTIONS TO GO THROUGH, PLEASE MODULARIZE CODE IN OTHER FILES
let btnSize;

function updateContainer() {
    container = select('#sketchContainer');
  w = parseFloat(getComputedStyle(container.elt).getPropertyValue('width'));
  h = parseFloat(getComputedStyle(container.elt).getPropertyValue('height'));
  btnSize = w/8;

}

function windowResized() {
    updateContainer();
    resizeCanvas(w, h);
    drawing = true;
  }
  
  function setup() {
    updateContainer();
    canvas = createCanvas(w, h);
    smooth();
    canvas.parent("#sketchContainer");
  }

  function draw() {
    fill('#FFFFFF');
    rect(1, 1, w-2, h-2);
    fill('#121212');
    strokeWeight(1);
    textSize(30);
    textAlign("center", "center");
    text("PLACEHOLDER", w/2, h/2);
    
  }

  function mouseClicked() {
    btnHeight = 30;
    if (mouseX > 0 && mouseX < w && mouseY > btnSize*1.5 && mouseY < btnSize*2.5) {
        window.location = "hostPlaying.html";
    }
  }