//CLIENT START

let boolAddress = 1;
let inputStr = "";

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
  logo = loadImage("static/logo.png");
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

function draw() {
  background(2, 2, 38);
  btnHeight = 30;
  btnRadius = 10;
  fill('#FFFFFF');
  rect(w/2 - 125, h / 2 + 4*btnHeight, 250, btnHeight, btnRadius);
  rect(w/2 - 125, h / 2 + 2*btnHeight, 250, btnHeight, btnRadius);
  rect(w/2 - 125, h / 2, 250, btnHeight, btnRadius);
  fill('#121212');
  strokeWeight(1);
  textFont('Helvetica');
  textSize(28);
  textAlign("center", "center");
  image(logo, w / 2 - 300, h / 16, 600, 200);
  text("Host a Game", w / 2, h / 2 + 0.5 * btnHeight);
  text("Join a Room", w / 2, h / 2 + 2.5 * btnHeight);
  text("How to Play", w / 2, h / 2 + 4 * btnHeight);

  if (boolAddress != 0) {
    if (inputStr == 'SH') {
      window.location = "hostPlaying";
    }
    else if (inputStr == 'SP') {
      window.location = "clientPlaying";
    }
    boolAddress = 0;
  }

}

  function mouseClicked() {
    btnHeight = 30;
    if (mouseX > (w/2 - 125) && mouseX < (w/2 + 125) && mouseY > (h/2) && mouseY < (h/2 + btnHeight)) {
      window.location = "/hostPlaying"
        //sendData("newH?")
    }
    if (mouseX > (w/2 - 125) && mouseX < (w/2 + 125) && mouseY > h/2 + 2*btnHeight && mouseY < (h/2 + 3 * btnHeight)) {
        window.location = "/clientPlaying"//sendData("newP?")
    }
    if (mouseX > (w/2 - 125) && mouseX < (w/2 + 125) && mouseY > h/2 + 4*btnHeight && mouseY < (h/2 + 5 * btnHeight)) {
      window.location = "/howToPlay"
    }
  }