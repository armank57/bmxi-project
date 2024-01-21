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
  btnHeight = 30;
  fill('#FFFFFF');
  rect(0, 2 * btnHeight, w, btnHeight);
  rect(0, 0, w, btnHeight);
  fill('#121212');
  strokeWeight(1);
  textSize(30);
  textAlign("center", "center");
  image(logo, w / 2, h / 2, 100, 100);
  text("Host a Game", w / 2, btnHeight / 2);
  text("Join a Room", w / 2, btnHeight / 2 + 2 * btnHeight);

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
  if (mouseX > 0 && mouseX < w && mouseY > 0 && mouseY < btnHeight) {
    sendData("newH?")
  }
  if (mouseX > 0 && mouseX < w && mouseY > 2 * btnHeight && mouseY < 3 * btnHeight) {
    sendData("newP?")
  }
}