

function draw_map(w, h) {
    generate_map();
    for(row = 0; row < mapSize; row++) {
        for (col = 0; col < mapSize; col++) {
            if (textures[row][col] == 0) {
                rectMode(CORNER);
                fill("#CCCCCC");
                stroke("#121212");
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

function generate_map() {
    for (let i = 0; i < 3; i++) {
        textures[mapSize-1-i][5] = -1;
        textures[mapSize-1-i][11] = -1;
        textures[i][5] = -1;
        textures[i][11] = -1;
        textures[5][mapSize-1-i] = -1;
        textures[11][mapSize-1-i] = -1;
        textures[5][i] = -1;
        textures[11][i] = -1;
    }
}