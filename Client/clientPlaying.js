let selectionMode = 1;
let moveBtnSize;
let btnRadius;
let btnDist;
let btnSpace;
let btnEdge;

function updateContainer() {
    container = select('#sketchContainer');
  w = parseFloat(getComputedStyle(container.elt).getPropertyValue('width'));
  h = parseFloat(getComputedStyle(container.elt).getPropertyValue('height'));
  //window resize for mobile
  if (h > w) {
    moveBtnSize = w/4;
    btnRadius = w/40;
    btnDist = w/3.5;
  } else {
    moveBtnSize = h/4;
    btnRadius = h/40;
    btnDist = h/3.5;
  }
  btnSpace = moveBtnSize/2;
  btnEdge = btnDist - moveBtnSize/2;
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
    if (selectionMode == 1) {
        rectMode(CORNER);
        fill("#FFFFFF");
        rect(1, 1, w-2, h-2);
        drawPause();
        //Arrows drawing
        rectMode(CENTER);
        fill("#FFFFFF");
        //center button
        rect(w/2, h/2, moveBtnSize, moveBtnSize, btnRadius);
        strokeWeight(10);
        circle(w/2, h/2, moveBtnSize-3*btnRadius);
        strokeWeight(1);

        //sides
        rect(w/2 + btnDist, h/2, moveBtnSize, moveBtnSize, btnRadius);
        rect(w/2 - btnDist, h/2, moveBtnSize, moveBtnSize, btnRadius);
        rect(w/2, h/2 + btnDist, moveBtnSize, moveBtnSize, btnRadius);
        rect(w/2, h/2 - btnDist, moveBtnSize, moveBtnSize, btnRadius);

        //diags
        rect(w/2 + btnDist, h/2 + btnDist, moveBtnSize, moveBtnSize, btnRadius);
        rect(w/2 - btnDist, h/2 + btnDist, moveBtnSize, moveBtnSize, btnRadius);
        rect(w/2 + btnDist, h/2 - btnDist, moveBtnSize, moveBtnSize, btnRadius);
        rect(w/2 - btnDist, h/2 - btnDist, moveBtnSize, moveBtnSize, btnRadius);

        //arrows
        strokeWeight(10);

        // east arrow
        line(w/2 + btnEdge + btnRadius, h/2, w/2 + btnEdge + moveBtnSize - btnRadius, h/2);
        line(w/2 + btnEdge + moveBtnSize - 2 * btnRadius, h/2 - btnRadius, w/2 + btnEdge + moveBtnSize - btnRadius, h/2);
        line(w/2 + btnEdge + moveBtnSize - 2 * btnRadius, h/2 + btnRadius, w/2 + btnEdge + moveBtnSize - btnRadius, h/2);
        // west arrow
        line(w/2 - btnEdge - btnRadius, h/2, w/2 - btnEdge - moveBtnSize + btnRadius, h/2);
        line(w/2 - btnEdge - moveBtnSize + 2 * btnRadius, h/2 - btnRadius, w/2 - btnEdge - moveBtnSize + btnRadius, h/2);
        line(w/2 - btnEdge - moveBtnSize + 2 * btnRadius, h/2 + btnRadius, w/2 - btnEdge - moveBtnSize + btnRadius, h/2);

        // south arrow
        line(w/2, h/2 + btnEdge + btnRadius, w/2, h/2 + btnEdge + moveBtnSize - btnRadius);
        line(w/2, h/2 + btnEdge + moveBtnSize - btnRadius, w/2 + btnRadius, h/2 + btnEdge + moveBtnSize - 2* btnRadius);
        line(w/2, h/2 + btnEdge + moveBtnSize - btnRadius, w/2 - btnRadius, h/2 + btnEdge + moveBtnSize - 2*btnRadius);

        // north arrow
        line(w/2, h/2 - btnEdge - btnRadius, w/2, h/2 - btnEdge - moveBtnSize + btnRadius);
        line(w/2, h/2 - btnEdge - moveBtnSize + btnRadius, w/2 + btnRadius, h/2 - btnEdge - moveBtnSize + 2* btnRadius);
        line(w/2, h/2 - btnEdge - moveBtnSize + btnRadius, w/2 - btnRadius, h/2 - btnEdge - moveBtnSize + 2*btnRadius);

        // northeast arrow
        line(w/2 + btnEdge + btnRadius, h/2 - btnEdge - btnRadius, w/2 + btnEdge - btnRadius + moveBtnSize, h/2 - btnEdge + btnRadius - moveBtnSize);
        line(w/2 + btnEdge - btnRadius + moveBtnSize, h/2 - btnEdge + btnRadius - moveBtnSize, w/2 + btnEdge - btnRadius + moveBtnSize, h/2 - btnEdge + 2*btnRadius - moveBtnSize);
        line(w/2 + btnEdge - btnRadius + moveBtnSize, h/2 - btnEdge + btnRadius - moveBtnSize, w/2 + btnEdge - 2*btnRadius + moveBtnSize, h/2 - btnEdge + btnRadius - moveBtnSize);

        // northwest arrow
        line(w/2 - btnEdge - btnRadius, h/2 - btnEdge - btnRadius, w/2 - btnEdge + btnRadius - moveBtnSize, h/2 - btnEdge + btnRadius - moveBtnSize);
        line(w/2 - btnEdge + btnRadius - moveBtnSize, h/2 - btnEdge + btnRadius - moveBtnSize, w/2 - btnEdge + btnRadius - moveBtnSize, h/2 - btnEdge + 2*btnRadius - moveBtnSize);
        line(w/2 - btnEdge + btnRadius - moveBtnSize, h/2 - btnEdge + btnRadius - moveBtnSize, w/2 - btnEdge + 2*btnRadius - moveBtnSize, h/2 - btnEdge + btnRadius - moveBtnSize);

        // southwest arrow
        line(w/2 - btnEdge - btnRadius, h/2 + btnEdge + btnRadius, w/2 - btnEdge + btnRadius - moveBtnSize, h/2 + btnEdge - btnRadius + moveBtnSize);
        line(w/2 - btnEdge + btnRadius - moveBtnSize, h/2 + btnEdge - btnRadius + moveBtnSize, w/2 - btnEdge + btnRadius - moveBtnSize, h/2 + btnEdge - 2*btnRadius + moveBtnSize);
        line(w/2 - btnEdge + btnRadius - moveBtnSize, h/2 + btnEdge - btnRadius + moveBtnSize, w/2 - btnEdge + 2*btnRadius - moveBtnSize, h/2 + btnEdge - btnRadius + moveBtnSize);

        // southeast arrow
        line(w/2 + btnEdge + btnRadius, h/2 + btnEdge + btnRadius, w/2 + btnEdge - btnRadius + moveBtnSize, h/2 + btnEdge - btnRadius + moveBtnSize);
        line(w/2 + btnEdge - btnRadius + moveBtnSize, h/2 + btnEdge - btnRadius + moveBtnSize, w/2 + btnEdge - btnRadius + moveBtnSize, h/2 + btnEdge - 2*btnRadius + moveBtnSize);
        line(w/2 + btnEdge - btnRadius + moveBtnSize, h/2 + btnEdge - btnRadius + moveBtnSize, w/2 + btnEdge - 2*btnRadius + moveBtnSize, h/2 + btnEdge - btnRadius + moveBtnSize);
        strokeWeight(1);


    } else if (selectionMode == -1) {
      //paused
      rectMode(CORNER);
      fill("#FFFFFF");
      rect(1, 1, w-2, h-2);
      pauseScreen();
    } else {

    }
  }

  function drawPause() {
    rectMode(CORNER);
    fill('#FFFFFF');
    rect(1, 1, w/10, h/10);
    fill('#121212');
    strokeWeight(1);
    textSize(30);
    textAlign("center", "center");
    text("Pause", 1, 1, w/10, h/10);
  }
  function pauseScreen() {
    fill('#FFFFFF');
    rectMode(CENTER);
    rect(w/6, h/2, w/4, h/5);
    rect(w/2, h/2, w/4, h/5);
    rect(w* 5/6, h/2, w/4, h/5);
    fill('#121212');
    strokeWeight(1);
    textSize(30);
    textAlign("center", "center");
    text("Resume", w/6, h/2, w/4, h/5);
    text("Settings", w/2, h/2, w/4, h/5);
    text("Quit", w* 5/6, h/2, w/4, h/5);
    rectMode(CORNER);
  }

  function mouseClicked() {
    if (selectionMode == 1) {
      halfBtn = moveBtnSize/2;
        if (mouseX > w/2 - btnSpace && mouseX < w/2 + btnSpace 
                && mouseY > h/2 - btnSpace && mouseY < h/2 + btnSpace) {
            //center button
            console.log("Center");
            selectionMode = test_action();
        }
        if (mouseX > w/2 - btnSpace + btnDist && mouseX < w/2 + btnSpace + btnDist 
                && mouseY > h/2 - btnSpace && mouseY < h/2 + btnSpace) {
            //right button
            console.log("Right");
        }
        if (mouseX > w/2 - btnSpace - btnDist && mouseX < w/2 + btnSpace - btnDist 
                && mouseY > h/2 - btnSpace && mouseY < h/2 + btnSpace) {
            //left button
            console.log("Left");
        }
        if (mouseX > w/2 - btnSpace && mouseX < w/2 + btnSpace 
                && mouseY > h/2 - btnSpace - btnDist && mouseY < h/2 + btnSpace - btnDist) {
            //top button
            console.log("Top");
        }
        if (mouseX > w/2 - btnSpace && mouseX < w/2 + btnSpace 
                && mouseY > h/2 - btnSpace + btnDist && mouseY < h/2 + btnSpace + btnDist) {
            //bottom button
            console.log("Bottom");
        }
        if (mouseX > w/2 - btnSpace - btnDist && mouseX < w/2 + btnSpace - btnDist 
                && mouseY > h/2 - btnSpace - btnDist && mouseY < h/2 + btnSpace - btnDist) {
            //top left button
            console.log("Top left");
        }
        if (mouseX > w/2 - btnSpace + btnDist && mouseX < w/2 + btnSpace + btnDist 
                && mouseY > h/2 - btnSpace - btnDist && mouseY < h/2 + btnSpace - btnDist) {
            //top right button
            console.log("Top right");
        }
        if (mouseX > w/2 - btnSpace + btnDist && mouseX < w/2 + btnSpace + btnDist 
                && mouseY > h/2 - btnSpace + btnDist && mouseY < h/2 + btnSpace + btnDist) {
            //bottom right button
            console.log("Bottom right");
        }
        if (mouseX > w/2 - btnSpace - btnDist && mouseX < w/2 + btnSpace - btnDist 
                && mouseY > h/2 - btnSpace + btnDist && mouseY < h/2 + btnSpace + btnDist) {
            //bottom left button
            console.log("Bottom left");
        }
        if (mouseX > 1 && mouseX < w/10 && mouseY > 1 && mouseY < h/10) {
          selectionMode = -1;
        }
    } else if (selectionMode == -1) {
      if (mouseX > w/6 - w/8 && mouseX < w/6 + w/8 && mouseY > h/2 - h/10 && mouseY < h/2 + h/10) {
        selectionMode = 1;
      }
      if (mouseX > w*5/6 - w/8 && mouseX < w*5/6 + w/8 && mouseY > h/2 - h/10 && mouseY < h/2 + h/10) {
        window.location = "clientHostJoin.html";
      }
    }
  }