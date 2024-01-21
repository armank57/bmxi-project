function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    
    // Set text properties
    textFont('Helvetica');
    textSize(20);
    textAlign(CENTER);
    fill(0);
    
    // Display the rules
    text("Game Rules:", width / 2, height / 2 - 40);
    text("- Rule 1", width / 2, height / 2);
    text("- Rule 2", width / 2, height / 2 + 40);
    text("- Rule 3", width / 2, height / 2 + 80);
}
