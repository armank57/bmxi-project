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
    //player list:
    fill('#FFFFFF');
    rect(btnSize, 0, btnSize, btnSize);
    rect(btnSize* 2.5, 0, btnSize, btnSize);
    rect(btnSize* 4, 0, btnSize, btnSize);
    rect(btnSize* 5.5, 0, btnSize, btnSize);
    fill('#121212');
    strokeWeight(1);
    textSize(30);
    textAlign("center", "center");
    text("Player 1", btnSize *1.5, btnSize/2);
    text("Player 2", btnSize* 3, btnSize/2);
    text("Player 3", btnSize *4.5, btnSize/2);
    text("Player 4", btnSize * 6, btnSize/2);


    //start button
    fill('#FFFFFF');
    rect(0, btnSize*1.5, w, btnSize);
    fill('#121212');
    strokeWeight(1);
    textSize(60);
    textAlign("center", "center");
    text("Start", w/2, btnSize*2);
    
  }

  function mouseClicked() {
    btnHeight = 30;
    if (mouseX > 0 && mouseX < w && mouseY > btnSize*1.5 && mouseY < btnSize*2.5) {
        window.location = "/hostPlaying.html";
    }
  }