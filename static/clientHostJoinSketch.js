//CLIENT START
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
  
  function setup() {
    updateContainer();
    canvas = createCanvas(w, h);
    smooth();
    canvas.parent("#sketchContainer");
  }

  function draw() {
    btnHeight = 30;
    fill('#FFFFFF');
    rect(0, 2*btnHeight, w, btnHeight);
    rect(0, 0, w, btnHeight);
    fill('#121212');
    strokeWeight(1);
    textSize(30);
    textAlign("center", "center");
    text("Host", w/2, btnHeight/2);
    text("Player", w/2, btnHeight/2 + 2*btnHeight);


  }

  function mouseClicked() {
    btnHeight = 30;
    if (mouseX > 0 && mouseX < w && mouseY > 0 && mouseY < btnHeight) {
        window.location = "hostPlaying";
    }
    if (mouseX > 0 && mouseX < w && mouseY > 2*btnHeight && mouseY < 3*btnHeight) {
        window.location = "clientPlaying";
    }
  }