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
        //Arrows drawing
        rectMode(CENTER);
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
        //arrows
        strokeWeight(10);
        line(w/2 + btnEdge + btnRadius, h/2, w/2 + btnEdge + moveBtnSize - btnRadius, h/2);
        line(w/2 + btnEdge + moveBtnSize - 2 * btnRadius, h/2 - btnRadius, w/2 + btnEdge + moveBtnSize - btnRadius, h/2);
        line(w/2 + btnEdge + moveBtnSize - 2 * btnRadius, h/2 + btnRadius, w/2 + btnEdge + moveBtnSize - btnRadius, h/2);

        line(w/2 - btnEdge - btnRadius, h/2, w/2 - btnEdge - moveBtnSize + btnRadius, h/2);
        line(w/2 - btnEdge - moveBtnSize + 2 * btnRadius, h/2 - btnRadius, w/2 - btnEdge - moveBtnSize + btnRadius, h/2);
        line(w/2 - btnEdge - moveBtnSize + 2 * btnRadius, h/2 + btnRadius, w/2 - btnEdge - moveBtnSize + btnRadius, h/2);

        line(w/2, h/2 + btnEdge + btnRadius, w/2, h/2 + btnEdge + moveBtnSize - btnRadius);
        line(w/2, h/2 + btnEdge + moveBtnSize - btnRadius, w/2 + btnRadius, h/2 + btnEdge + moveBtnSize - 2* btnRadius);
        line(w/2, h/2 + btnEdge + moveBtnSize - btnRadius, w/2 - btnRadius, h/2 + btnEdge + moveBtnSize - 2*btnRadius);

        line(w/2, h/2 - btnEdge - btnRadius, w/2, h/2 - btnEdge - moveBtnSize + btnRadius);
        line(w/2, h/2 - btnEdge - moveBtnSize + btnRadius, w/2 + btnRadius, h/2 - btnEdge - moveBtnSize + 2* btnRadius);
        line(w/2, h/2 - btnEdge - moveBtnSize + btnRadius, w/2 - btnRadius, h/2 - btnEdge - moveBtnSize + 2*btnRadius);
        strokeWeight(1);

        //diags
        rect(w/2 + btnDist, h/2 + btnDist, moveBtnSize, moveBtnSize, btnRadius);
        rect(w/2 - btnDist, h/2 + btnDist, moveBtnSize, moveBtnSize, btnRadius);
        rect(w/2 + btnDist, h/2 - btnDist, moveBtnSize, moveBtnSize, btnRadius);
        rect(w/2 - btnDist, h/2 - btnDist, moveBtnSize, moveBtnSize, btnRadius);
    }
  }

  function mouseClicked() {
    if (selectionMode == 1) {
      halfBtn = moveBtnSize/2;
        if (mouseX > w/2 - btnSpace && mouseX < w/2 + btnSpace 
                && mouseY > h/2 - btnSpace && mouseY < h/2 + btnSpace) {
            //center button
            console.log("Center");
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
    }
  }