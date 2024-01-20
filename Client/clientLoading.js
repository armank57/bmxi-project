let input, button, greeting;

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
    canvas = createCanvas(w,h);
    smooth();
    canvas.parent("#sketchContainer");
    
    message = createElement('h2', 'Enter a room code to join a game:');
    message.position(w/2, h/2 - 50);
    input = createInput();
    input.position(w/2, h/2);

    button = createButton('Join Game');
    button.position(input.x + input.width, h/2);
    button.mousePressed(joinGame);
}

function draw() {
    fill('#FFFFFF');
    rect(1, 1, w-2, h-2);
    fill('#121212');
    strokeWeight(1);
    textSize(30);
    textAlign("center", "center");
    drawBack();
}

/*
 * need to figure out how to 
 */ 
function joinGame() {
    roomCode = input.value();
}

/*
 * Draws a back button to return to landing page
 */
function drawBack() {
    fill('#FFFFFF');
    rect(1, 1, w/10, h/10);
    fill('#121212');
    strokeWeight(1);
    textSize(30);
    textAlign("center", "center");
    text("Back", 1, 1, w/10, h/10);
}

function mouseClicked() {
    if (mouseX > 1 && mouseX < w/10 && mouseY > 1 && mouseY < h/10) {
        window.location = "clientHostJoin.html";
    }
}