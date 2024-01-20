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
  if (w > h) {
    w = h;
  } else {
    h = w;
  }
  btnSize = w/8;

}

function windowResized() {
    updateContainer();
    resizeCanvas(w, h);
    drawing = true;
  }
  
  function setup() {
    init();
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
      draw_map(w, h);
    } else if (pause == 1) {
      pauseScreen();
    } else {
      draw_settings_screen();
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
    if (keyCode == 27 && pause != 1) {
      pause = 1;
    }
  }