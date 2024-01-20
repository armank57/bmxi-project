//NOTE THIS FILE IS THE CENTRAL FILE FOR ALL FUNCTIONS TO GO THROUGH, PLEASE MODULARIZE CODE IN OTHER FILES
//Just need to put <script> in hostJoin.html before hostPlaying
// uses functions from:
// hostSettings.js

let btnSize;
let pause = 0;

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
    if (pause == 0) {
      drawPause();
    } else if (pause == 1) {
      pauseScreen();
    } else {
      draw_settings_screen();
    }
  }

  function drawPause() {
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
    if (pause != 1) {
      if (mouseX > 1 && mouseX < w/10 && mouseY > 1 && mouseY < h/10) {
        pause = 1;
      }
    } else {
      if (mouseX > w/6 - w/8 && mouseX < w/6 + w/8 && mouseY > h/2 - h/10 && mouseY < h/2 + h/10) {
        pause = 0;
      }
      if (mouseX > w*5/6 - w/8 && mouseX < w*5/6 + w/8 && mouseY > h/2 - h/10 && mouseY < h/2 + h/10) {
        window.location = "hostJoin.html";
      }
      if (mouseX > w/2 - w/8 && mouseX < w/2 + w/8 && mouseY > h/2 - h/10 && mouseY < h/2 + h/10) {
        //settings?? if time
        pause = -1;
      }
    }
  }