function buy_building_one(index) {
    if (index >= 0 && index < playerCount && players[index].money >= buildOneCost && textures[players[index].y][players[index].x] == 0) {
        m[index] = m[index] - buildOneCost;
        ownership[players[index].y][players[index].x] = index;
        textures[players[index].y][players[index].x] = 1;
        return true;
    } else {
        return false;
    }
}

function buy_bridge(index) {
    found = 0;
    x = players[index].x;
    y = players[index].y;
    if (textures[y][x+1] == -1) {
        found = 1;
    }
    if (textures[y][x-1] == -1) {
        found += 1;
    }
    if (textures[y+1][x] == -1) {
        found += 1;
    }
    if (textures[y-1][x] == -1) {
        found += 1;
    }
    if (found == 1) {
        if (index >= 0 && index < playerCount && players[index].money >= brigdeCost) {
            players[index].money -= buildOneCost;
            if (textures[y][x+1] == -1) {
                textures[y][x+1] = -2;
            }
            else if (textures[y][x-1] == -1) {
                textures[y][x-1] = -2;
            }
            else if (textures[y+1][x] == -1) {
                textures[y+1][x] = -2;
            }
            else if (textures[y-1][x] == -1) {
                textures[y-1][x] = -2;
            }

            return true;
        } else {
            return false;
        }
    }

    //check for one land
    found = 0;
    if (textures[y][x+1] != -1) {
        found = 1;
    }
    if (textures[y][x-1] != -1) {
        found += 1;
    }
    if (textures[y+1][x] != -1) {
        found += 1;
    }
    if (textures[y-1][x] != -1) {
        found += 1;
    }
    if (found == 1) {
        if (index >= 0 && index < playerCount && players[index].money >= brigdeCost) {
            players[index].money -= buildOneCost;
            if (textures[y][x+1] != -1) {
                textures[y][x-1] = -2;
            }
            else if (textures[y][x-1] != -1) {
                textures[y][x+1] = -2;
            }
            else if (textures[y+1][x] != -1) {
                textures[y-1][x] = -2;
            }
            else if (textures[y-1][x] != -1) {
                textures[y+1][x] = -2;
            }

            return true;
        } else {
            return false;
        }
    }

    return false;
}