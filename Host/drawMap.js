

function draw_map(w, h) {
    generate_map();
    for(row = 0; row < mapSize; row++) {
        for (col = 0; col < mapSize; col++) {
            if (textures[row][col] == 0) {
                rectMode(CORNER);
                fill("#121212");
                if (players[0].x == col && players[0].y == row) {
                    fill("#AA1212");
                }
                if (players[1].x == col && players[1].y == row) {
                    fill("#AA12AA");
                }
                if (players[2].x == col && players[2].y == row) {
                    fill("#1212AA");
                }
                else if (players[3].x == col && players[3].y == row) {
                    fill("#12AA12");
                }
                else {
                    stroke("#454545");
                }
                rect(w*col/mapSize, h*row/mapSize, w/mapSize, h/mapSize);
                fill("#FFFFFF");
                stroke("#000000");
            }
        }
    }
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