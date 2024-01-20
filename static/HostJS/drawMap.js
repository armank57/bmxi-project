

function draw_map(w, h) {
    for(row = 0; row < mapSize; row++) {
        for (col = 0; col < mapSize; col++) {
            if (textures[row][col] == 0) {
                rectMode(CORNER);
                fill("#CCCCCC");
                noStroke();
                rect(w*col/mapSize, h*row/mapSize, w/mapSize, h/mapSize);
                fill("#FFFFFF");
                stroke("#000000");
            }
            else if (textures[row][col] == 1) { //building 1
                console.log("building");
                rectMode(CORNER);
                fill("#CCCC12");
                stroke("#121212");
                rect(w*col/mapSize, h*row/mapSize, w/mapSize, h/mapSize);
                if (ownership[row][col] == 0) {
                    fill("rgba(200,12,12, 1)");
                }
                else if (ownership[row][col] == 1) {
                    fill("rgba(12,100,12,1)");
                }
                else if (ownership[row][col] == 2) {
                    fill("rgba(200,12,200,1)");
                }
                else if (ownership[row][col] == 3) {
                    fill("rgba(12,12,200,1)");
                }
                circle(w*(col+0.5)/mapSize, h*(row+0.5)/mapSize, w/mapSize/2);
                fill("#FFFFFF");
                stroke("#000000");
            }
            else if (textures[row][col] == 2) { //building 2
                rectMode(CORNER);
                fill("#CC12CC");
                rect(w*col/mapSize, h*row/mapSize, w/mapSize, h/mapSize);
                if (ownership[row][col] == 0) {
                    fill("rgba(200,12,12, 1)");
                }
                else if (ownership[row][col] == 1) {
                    fill("rgba(12,100,12,1)");
                }
                else if (ownership[row][col] == 2) {
                    fill("rgba(200,12,200,1)");
                }
                else if (ownership[row][col] == 3) {
                    fill("rgba(12,12,200,1)");
                }
                circle(w*(col+0.5)/mapSize, h*(row+0.5)/mapSize, w/mapSize/2);
                fill("#FFFFFF");
                strokeWeight(1);
                stroke("#000000");
            }
            else if (textures[row][col] == 3) { //building 3
                rectMode(CORNER);
                fill("#997B3F");
                stroke("#121212");
                rect(w*col/mapSize, h*row/mapSize, w/mapSize, h/mapSize);
                fill("#FFFFFF");
                stroke("#000000");
            }
            else if (textures[row][col] == -1) { //water
                rectMode(CORNER);
                fill("#586FFF");
                noStroke();
                rect(w*col/mapSize, h*row/mapSize, w/mapSize, h/mapSize);
                fill("#FFFFFF");
                stroke("#000000");
            }
            else if (textures[row][col] == -2) { //bridge
                rectMode(CORNER);
                fill("#997B3F");
                noStroke();
                rect(w*col/mapSize, h*row/mapSize, w/mapSize, h/mapSize);
                fill("#FFFFFF");
                stroke("#000000");
            }
        }
    }
    //draw selected players:
    noFill();
    strokeWeight(3);
    stroke("rgba(200,12,12, 1)");
    rect(w * players[0].x/mapSize, h * players[0].y/mapSize, w/mapSize, h/mapSize);
    stroke("rgba(12,100,12,1)");
    rect(w * players[1].x/mapSize, h * players[1].y/mapSize, w/mapSize, h/mapSize);
    stroke("rgba(200,12,200,1)");
    rect(w * players[2].x/mapSize, h * players[2].y/mapSize, w/mapSize, h/mapSize);
    stroke("rgba(12,12,200,1)");
    rect(w * players[3].x/mapSize, h * players[3].y/mapSize, w/mapSize, h/mapSize);
    strokeWeight(3);
    stroke("rgba(200,12,12,0.65)");
    rect(w * players[0].x/mapSize, h * players[0].y/mapSize, w/mapSize, h/mapSize);
    stroke("rgba(12,100,12,0.65)");
    rect(w * players[1].x/mapSize, h * players[1].y/mapSize, w/mapSize, h/mapSize);
    stroke("rgba(200,12,200,0.65)");
    rect(w * players[2].x/mapSize, h * players[2].y/mapSize, w/mapSize, h/mapSize);
    stroke("rgba(12,12,200,0.65)");
    rect(w * players[3].x/mapSize, h * players[3].y/mapSize, w/mapSize, h/mapSize);
    strokeWeight(7);
    stroke("rgba(200,12,12,0.5)");
    rect(w * players[0].x/mapSize, h * players[0].y/mapSize, w/mapSize, h/mapSize);
    stroke("rgba(12,100,12,0.5)");
    rect(w * players[1].x/mapSize, h * players[1].y/mapSize, w/mapSize, h/mapSize);
    stroke("rgba(200,12,200,0.5)");
    rect(w * players[2].x/mapSize, h * players[2].y/mapSize, w/mapSize, h/mapSize);
    stroke("rgba(12,12,200,0.5)");
    rect(w * players[3].x/mapSize, h * players[3].y/mapSize, w/mapSize, h/mapSize);
    strokeWeight(10);
    stroke("rgba(200,12,12,0.25)");
    rect(w * players[0].x/mapSize, h * players[0].y/mapSize, w/mapSize, h/mapSize);
    stroke("rgba(12,100,12,0.25)");
    rect(w * players[1].x/mapSize, h * players[1].y/mapSize, w/mapSize, h/mapSize);
    stroke("rgba(200,12,200,0.25)");
    rect(w * players[2].x/mapSize, h * players[2].y/mapSize, w/mapSize, h/mapSize);
    stroke("rgba(12,12,200,0.25)");
    rect(w * players[3].x/mapSize, h * players[3].y/mapSize, w/mapSize, h/mapSize);
    strokeWeight(1);

}

