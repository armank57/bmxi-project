let selectionMode = -5;
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
    moveBtnSize = w/6;
    btnRadius = w/50;
    btnDist = w/5;
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
    receiveData(function (receivedText) {
        console.log(receivedText);
        boolAddress = 1;
        inputStr = receivedText;
    });
  }

  function draw_choice_page() {
    btnHeight = 30;
    fill('#FFFFFF');
    rect(0, 2*btnHeight, w, btnHeight);
    rect(0, 0, w, btnHeight);
    fill('#121212');
    strokeWeight(1);
    textSize(30);
    textAlign("center", "center");
    text("Room 1", w/2, btnHeight/2);
    text("Room 2", w/2, btnHeight/2 + 2*btnHeight);
    if (boolAddress != 0) {
      if (inputStr[0] == '@') {
        playerID = inputStr[1];
        roomNum = inputStr[2];
        selectionMode = 1;
      }
      boolAddress = 1;
    }
}

  function draw() {
    if (selectionMode == -5) {
      draw_choice_page();
    }
    else if (selectionMode == 1) {
        textSize(30);
        rectMode(CORNER);
        fill("#555555");
        rect(1, 1, w-2, h-2);
        //Arrows drawing
        rectMode(CENTER);
        fill("#FFFFFF");
        //center button
        fill('#121212');
        rect(w/2, h/2, moveBtnSize, moveBtnSize, btnRadius);
        strokeWeight(10);
        stroke('#FFFFFF');
        circle(w/2, h/2, moveBtnSize-3*btnRadius);
        strokeWeight(1);
        stroke('#000000');

        //sides
        fill('#121212');
        rect(w/2 + btnDist, h/2, moveBtnSize, moveBtnSize, btnRadius);
        rect(w/2 - btnDist, h/2, moveBtnSize, moveBtnSize, btnRadius);
        rect(w/2, h/2 + btnDist, moveBtnSize, moveBtnSize, btnRadius);
        rect(w/2, h/2 - btnDist, moveBtnSize, moveBtnSize, btnRadius);

        //diags
        fill('#343434');
        stroke("#343434");
        rect(w/2 + btnDist, h/2 + btnDist, moveBtnSize, moveBtnSize, btnRadius);
        rect(w/2 - btnDist, h/2 + btnDist, moveBtnSize, moveBtnSize, btnRadius);
        rect(w/2 + btnDist, h/2 - btnDist, moveBtnSize, moveBtnSize, btnRadius);
        rect(w/2 - btnDist, h/2 - btnDist, moveBtnSize, moveBtnSize, btnRadius);
        fill('#FFFFFF');
        //arrows
        strokeWeight(10);
        stroke("#FFFFFF");
        btnRadius *= 1.5;
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

        stroke("#BBBBBB");
        btnRadius /= 1.5
        // northeast arrow
        btnRadius *= 2.5;
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
        btnRadius /= 2.5;
        stroke("#000000");

        display_menu(w, h);
    } else if (selectionMode == -1) {
      //paused
      rectMode(CORNER);
      fill("#FFFFFF");
      rect(1, 1, w-2, h-2);
      pauseScreen();
    }

    if (boolAddress != 0) {
        
        if (inputStr.length > 3 && inputStr[4] == '[') { //data packet
          inputStr = inputStr.substring(4);
          for (i = 0; i < 6; i++) { //get actions
            if (i != 5) { //don't cut last one
              btns[i] = inputStr.substring(0, inputStr.indexOf(','));
              inputStr = inputStr.substring(inputStr.indexOf(',') + 1);
            } else {
              btns[i] = inputStr.substring(0, inputStr.indexOf(']'));
            }
          }
          inputStr = inputStr.substring(inputStr.indexOf('[') + 1);
          for (i = 0; i < 3; i++) { //get info
            if (i != 2) { //don't cut last one
              infot[i] = inputStr.substring(0, inputStr.indexOf(','));
              inputStr = inputStr.substring(inputStr.indexOf(',') + 1);
            } else {
              infot[i] = inputStr.substring(0, inputStr.indexOf(']'));
            }
          }
          inputStr = inputStr.substring(inputStr.indexOf(']') + 1);

          inputStr = inputStr.substring(inputStr.indexOf('[') + 1);
          for (i = 0; i < 3; i++) { //get info
            if (i != 2) { //don't cut last one
              infop[i] = inputStr.substring(0, inputStr.indexOf(','));
              inputStr = inputStr.substring(inputStr.indexOf(',') + 1);
            } else {
              infop[i] = inputStr.substring(0, inputStr.indexOf(']'));
            }
          }
          inputStr = inputStr.substring(inputStr.indexOf(']') + 1);

          serverMessage = inputStr;
        }
        boolAddress = 0;
    }
  }

  // function drawPause() {
  //   rectMode(CORNER);
  //   fill('#FFFFFF');
  //   rect(1, 1, w/10, h/10);
  //   fill('#121212');
  //   strokeWeight(1);
  //   textSize(30);
  //   textAlign("center", "center");
  //   text("Pause", 1, 1, w/10, h/10);
  // }
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
    if (selectionMode == -5) {
      btnHeight = 30;
    if (mouseX > 0 && mouseX < w && mouseY > 0 && mouseY < btnHeight) {
      sendData("newP?0");
    }
    if (mouseX > 0 && mouseX < w && mouseY > 2*btnHeight && mouseY < 3*btnHeight) {
      sendData("newP?1");
    }
      
    } else if (selectionMode == 1) {
      halfBtn = moveBtnSize/2;
      tile_display_buttons();
        if (mouseX > w/2 - btnSpace && mouseX < w/2 + btnSpace 
                && mouseY > h/2 - btnSpace && mouseY < h/2 + btnSpace) {
            //center button
            console.log("Center");
            sendData("H" + playerID + "" + roomNum  + "Y");
            //selectionMode = test_action();
        }
        if (mouseX > w/2 - btnSpace + btnDist && mouseX < w/2 + btnSpace + btnDist 
                && mouseY > h/2 - btnSpace && mouseY < h/2 + btnSpace) {
            //right button
            console.log("Right");
            sendData("H" + playerID + "" + roomNum  + "R");
        }
        if (mouseX > w/2 - btnSpace - btnDist && mouseX < w/2 + btnSpace - btnDist 
                && mouseY > h/2 - btnSpace && mouseY < h/2 + btnSpace) {
            //left button
            console.log("Left");
            sendData("H" + playerID + "" + roomNum  + "L");
        }
        if (mouseX > w/2 - btnSpace && mouseX < w/2 + btnSpace 
                && mouseY > h/2 - btnSpace - btnDist && mouseY < h/2 + btnSpace - btnDist) {
            //top button
            console.log("Top");
            sendData("H" + playerID + "" + roomNum  + "U");
        }
        if (mouseX > w/2 - btnSpace && mouseX < w/2 + btnSpace 
                && mouseY > h/2 - btnSpace + btnDist && mouseY < h/2 + btnSpace + btnDist) {
            //bottom button
            console.log("Bottom");
            sendData("H" + playerID + "" + roomNum  + "B");
        }
        if (mouseX > w/2 - btnSpace - btnDist && mouseX < w/2 + btnSpace - btnDist 
                && mouseY > h/2 - btnSpace - btnDist && mouseY < h/2 + btnSpace - btnDist) {
            //top left button
            console.log("Top left");
            sendData("H" + playerID + "" + roomNum  + "Q");
        }
        if (mouseX > w/2 - btnSpace + btnDist && mouseX < w/2 + btnSpace + btnDist 
                && mouseY > h/2 - btnSpace - btnDist && mouseY < h/2 + btnSpace - btnDist) {
            //top right button
            console.log("Top right");
            sendData("H" + playerID + "" + roomNum  + "E");
        }
        if (mouseX > w/2 - btnSpace + btnDist && mouseX < w/2 + btnSpace + btnDist 
                && mouseY > h/2 - btnSpace + btnDist && mouseY < h/2 + btnSpace + btnDist) {
            //bottom right button
            console.log("Bottom right");
            sendData("H" + playerID + "" + roomNum  + "C");
        }
        if (mouseX > w/2 - btnSpace - btnDist && mouseX < w/2 + btnSpace - btnDist 
                && mouseY > h/2 - btnSpace + btnDist && mouseY < h/2 + btnSpace + btnDist) {
            //bottom left button
            console.log("Bottom left");
            sendData("H" + playerID + "" + roomNum  + "Z");
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

  function keyPressed() {
    if(keyCode == 27 && selectionMode != -1) {
      selectionMode = -1;
    }
  }