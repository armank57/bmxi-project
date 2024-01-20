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
    if (x < mapSize - 1 && textures[y][x+1] == -1) {
        found = 1;
    }
    if (x > 0 && textures[y][x-1] == -1) {
        found += 1;
    }
    if (y < mapSize - 1 && textures[y+1][x] == -1) {
        found += 1;
    }
    if (y > 0 && textures[y-1][x] == -1) {
        found += 1;
    }
    if (found == 1) {
        if (index >= 0 && index < playerCount && players[index].money >= brigdeCost) {
            players[index].money -= buildOneCost;
            if (x < mapSize - 1 && textures[y][x+1] == -1) {
                textures[y][x+1] = -2;
            }
            else if (x > 0 && textures[y][x-1] == -1) {
                textures[y][x-1] = -2;
            }
            else if (y < mapSize - 1 && textures[y+1][x] == -1) {
                textures[y+1][x] = -2;
            }
            else if (y > 0 && textures[y-1][x] == -1) {
                textures[y-1][x] = -2;
            }

            return true;
        } else {
            return false;
        }
    }

    //check for one land
    found = 0;
    if (x < mapSize - 1 && textures[y][x+1] != -1) {
        found = 1;
    }
    if (x > 0 && textures[y][x-1] != -1) {
        found += 1;
    }
    if (y < mapSize - 1 && textures[y+1][x] != -1) {
        found += 1;
    }
    if (y > 0 && textures[y-1][x] != -1) {
        found += 1;
    }
    if (found == 1) {
        if (index >= 0 && index < playerCount && players[index].money >= brigdeCost) {
            players[index].money -= buildOneCost;
            if (x < mapSize - 1 && textures[y][x+1] != -1) {
                textures[y][x-1] = -2;
            }
            else if (x > 0 && textures[y][x-1] != -1) {
                textures[y][x+1] = -2;
            }
            else if (y < mapSize - 1 && textures[y+1][x] != -1) {
                textures[y-1][x] = -2;
            }
            else if (y > 0 && textures[y-1][x] != -1) {
                textures[y+1][x] = -2;
            }

            return true;
        } else {
            return false;
        }
    }

    return false;
}