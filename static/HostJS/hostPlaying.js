//NOTE THIS FILE IS THE CENTRAL FILE FOR ALL FUNCTIONS TO GO THROUGH, PLEASE MODULARIZE CODE IN OTHER FILES
//Just need to put <script> in hostJoin.html before hostPlaying
// uses functions from:
// hostSettings.js

let btnSize;
let pause = 0;
let attacking = 0;

function updateContainer() {
    container = select('#sketchContainer');
  wa = parseFloat(getComputedStyle(container.elt).getPropertyValue('width'));
  w = wa;
  ha = parseFloat(getComputedStyle(container.elt).getPropertyValue('height'));
  h = ha;
  console.log(w + " "+ h);
  offsetw = 0;
  offseth = 0;
  if (w > h) {
    offsetw = w - h;
    w = h;
  } else {
    offseth = h - w;
    h = w;
  }
  btnSize = w/8;

}

function windowResized() {
    updateContainer();
    resizeCanvas(wa, ha);
    drawing = true;
  }
  
  function setup() {
    init();
    updateContainer();
    canvas = createCanvas(wa, ha);
    smooth();
    canvas.parent("#sketchContainer");
    sendData("newH");
    receiveData(function (receivedText) {
        console.log(receivedText);
        boolAddress = 1;
        inputStr = receivedText;
  });
  }

  function draw() {
    fill('#FFFFFF');
    rect(1, 1, w-2, h-2);
    fill('#121212');
    strokeWeight(1);
    textSize(30);
    textAlign("center", "center");
    text("PLACEHOLDER", w/2, h/2);
    if (pause == 0) {
      draw_map(w, h);
      draw_money(w,h, offsetw, offseth);
    } else if (pause == 1) {
      pauseScreen();
    } else {
      draw_settings_screen();
    }
    if (boolAddress != 0) {
        if (inputStr[2] == 'U') {
            move_up(inputStr[1]);
        }
        else if (inputStr[2] == 'L') {
            move_left(inputStr[1]);
        }
        else if (inputStr[2] == 'B') {
            move_down(inputStr[1]);
        }
        else if (inputStr[2] == 'R') {
            move_right(inputStr[1]);
        }
        else if (inputStr[2] == 'Q') {
          move_left(inputStr[1]);
          move_up(inputStr[1]);
        }
        else if (inputStr[2] == 'E') {
          move_right(inputStr[1]);
          move_up(inputStr[1]);
        }
        else if (inputStr[2] == 'Z') {
          move_left(inputStr[1]);
          move_down(inputStr[1]);
        }
        else if (inputStr[2] == 'C') {
          move_right(inputStr[1]);
          move_down(inputStr[1]);
        }
        if (int(inputStr[1]) >= 0 && int(inputStr[1]) < 4){
          buildStr(int(inputStr[1])); //send data back for client
        }
        boolAddress = 0;
    }
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
    if (pause == 1){
      if (mouseX > w/6 - w/8 && mouseX < w/6 + w/8 && mouseY > h/2 - h/10 && mouseY < h/2 + h/10) {
        pause = 0;
        move(0, 8, 8);
      }
      if (mouseX > w*5/6 - w/8 && mouseX < w*5/6 + w/8 && mouseY > h/2 - h/10 && mouseY < h/2 + h/10) { // quit
        window.location = "hostJoin.html";
      }
      if (mouseX > w/2 - w/8 && mouseX < w/2 + w/8 && mouseY > h/2 - h/10 && mouseY < h/2 + h/10) { // settings
        //settings?? if time
        pause = -1;
      }
    }
  }
  function keyPressed() {
    if (attacking == 1) {
      if (keyCode == 49 && pause != 1) {
        target = 0;
      } else if (keyCode == 50 && pause != 1) {
        target = 1;
      } else if (keyCode == 51 && pause != 1) {
        target = 2;
      } else if (keyCode == 52 && pause != 1) {
        target = 3;
      } else {
        attacking = 0;
        return;
      }
      attack(debugHostSelectedPlayer, target);
      attacking = 0;
      return;
    }
    if (keyCode == 27 && pause != 1) {
      pause = 1;
    }
    if (keyCode == 37 && pause != 1) {
      move_left(debugHostSelectedPlayer);
    }
    if (keyCode == 38 && pause != 1) {
      move_up(debugHostSelectedPlayer);
    }
    if (keyCode == 39 && pause != 1) {
      move_right(debugHostSelectedPlayer);
    }
    if (keyCode == 40 && pause != 1) {
      move_down(debugHostSelectedPlayer);
    }
    if (keyCode == 49 && pause != 1) {
      debugHostSelectedPlayer = 0;
    }
    if (keyCode == 50 && pause != 1) {
      debugHostSelectedPlayer = 1;
    }
    if (keyCode == 51 && pause != 1) {
      debugHostSelectedPlayer = 2;
    }
    if (keyCode == 52 && pause != 1) {
      debugHostSelectedPlayer = 3;
    }
    if (keyCode == 65 && pause != 1) {
      attacking = 1;
    }
    if (keyCode == 66 && pause != 1) {
      buy_building_one(debugHostSelectedPlayer);
    }
    if (keyCode == 86 && pause != 1) {
      buy_bridge(debugHostSelectedPlayer);
    }
    // changed by matthew
    if (keyCode == 77 && pause != 1) {
      buy_tile(debugHostSelectedPlayer);
    }
  }