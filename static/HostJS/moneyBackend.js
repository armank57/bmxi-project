// buying tiles, buildings, buying resource tiles
// farm, dock, mine, lumbermill, trading posts


function buy_building_one(index) { //farm
    if (index >= 0 && index < playerCount && players[index].money >= buildOneCost && textures[players[index].y][players[index].x] == 5) {
    
        if (textures[players[index].y][players[index].x] == 6 || textures[players[index].y][players[index].x] == 7) {
            return false;
        } 
        
        if (textures[players[index].y][players[index].x] == 5 && ownership[players[index].y][players[index].x] == index) {
            players[index].money = players[index].money - buildOneCost;
            textures[players[index].y][players[index].x] = 1;
        }
        victoryPoints(index);
        return true;
    } else {
        return false;
    }
}

function check_building_one(index) { //farm
    if (index >= 0 && index < playerCount && players[index].money >= buildOneCost && textures[players[index].y][players[index].x] == 5) {
    
        if (textures[players[index].y][players[index].x] == 6 || textures[players[index].y][players[index].x] == 7) {
            return false;
        } 
        
        if (textures[players[index].y][players[index].x] == 5 && ownership[players[index].y][players[index].x] == index) {
            return true;
        }
        return false;
    } else {
        return false;
    }
}


function buy_building_two(index) { //mine
    if (index >= 0 && index < playerCount && players[index].money >= buildTwoCost && textures[players[index].y][players[index].x] == 7) {
    
        if (textures[players[index].y][players[index].x] == 5 || textures[players[index].y][players[index].x] == 6) {
            return false;
        } 
        
        if (textures[players[index].y][players[index].x] == 7 && ownership[players[index].y][players[index].x] == index) {
            players[index].money = players[index].money - buildThreeCost;
            textures[players[index].y][players[index].x] = 2;
        }
        victoryPoints(index);
        return true;
    } else {
        return false;
    }
}

function check_building_two(index) { //mine
    if (index >= 0 && index < playerCount && players[index].money >= buildTwoCost && textures[players[index].y][players[index].x] == 7) {
    
        if (textures[players[index].y][players[index].x] == 5 || textures[players[index].y][players[index].x] == 6) {
            return false;
        } 
        
        if (textures[players[index].y][players[index].x] == 7 && ownership[players[index].y][players[index].x] == index) {
            return true;
        }
        return false;
    } else {
        return false;
    }
}

function buy_building_three(index) { //lumbermill
    if (index >= 0 && index < playerCount && players[index].money >= buildThreeCost && textures[players[index].y][players[index].x] == 6) {
    
        if (textures[players[index].y][players[index].x] == 5 || textures[players[index].y][players[index].x] == 7) {
            return false;
        } 
        
        if (textures[players[index].y][players[index].x] == 6 && ownership[players[index].y][players[index].x] == index) {
            players[index].money = players[index].money - buildTwoCost;
            textures[players[index].y][players[index].x] = 3;
        }
        victoryPoints(index);
        return true;
    } else {
        return false;
    }
}

function check_building_three(index) { //lumbermill
    if (index >= 0 && index < playerCount && players[index].money >= buildThreeCost && textures[players[index].y][players[index].x] == 6) {
    
        if (textures[players[index].y][players[index].x] == 5 || textures[players[index].y][players[index].x] == 7) {
            return false;
        } 
        
        if (textures[players[index].y][players[index].x] == 6 && ownership[players[index].y][players[index].x] == index) {
            return true;
        }
        return false;
    } else {
        return false;
    }
}


function buy_tile(index) {
    adjacent = 0;
    x = players[index].x;
    y = players[index].y;

    if (ownership[players[index].y][players[index].x] != -1) {
        return false;
    }
    
    if (x < mapSize - 1 && ownership[y][x+1] == index) {
        adjacent = 1;
    }
    if (x > 0 && ownership[y][x-1] == index) {
        adjacent += 1;
    }
    if (y < mapSize - 1 && ownership[y+1][x] == index) {
        adjacent += 1;
    }
    if (y > 0 && ownership[y-1][x] == index) {
        adjacent += 1;
    }

    if (textures[players[index].y][players[index].x] == 5 && players[index].money >= 10) {
        adjacent += 1;
    }

    if (textures[players[index].y][players[index].x] == 6 && players[index].money >= 10) {
        adjacent += 1;
    }

    if (textures[players[index].y][players[index].x] == 7 && players[index].money >= 10) {
        adjacent += 1;
    }

    if (adjacent >= 1 && players[index].money >= 10) {
        ownership[players[index].y][players[index].x] = index;
        players[index].money = players[index].money - tileCost;
    }

}

function check_buy_tile(index) {
    adjacent = 0;
    x = players[index].x;
    y = players[index].y;
    if (ownership[y][x] != -1) {
        return false;
    }

    if (x < mapSize - 1 && ownership[y][x+1] == index) {
        adjacent = 1;
    }
    if (x > 0 && ownership[y][x-1] == index) {
        adjacent += 1;
    }
    if (y < mapSize - 1 && ownership[y+1][x] == index) {
        adjacent += 1;
    }
    if (y > 0 && ownership[y-1][x] == index) {
        adjacent += 1;
    }

    if ((adjacent >= 1 || (textures[y][x] >= 5 && textures[y][x] <= 7)) && players[index].money >= 10 ) {
        victoryPoints(index);
        return true;
    }
    return false;
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
            players[index].money -= brigdeCost;
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
            victoryPoints(index);
            return true;
        } else {
            return false;
        }
    }

    //check for one land
    found = 0;
    if (x < mapSize - 1 && textures[y][x+1] >= 0) {
        found = 1;
    }
    if (x > 0 && textures[y][x-1] >= 0) {
        found += 1;
    }
    if (y < mapSize - 1 && textures[y+1][x] >= 0) {
        found += 1;
    }
    if (y > 0 && textures[y-1][x] >= 0) {
        found += 1;
    }
    if (found == 1) {
        if (index >= 0 && index < playerCount && players[index].money >= brigdeCost) {
            players[index].money -= brigdeCost;
            if (x < mapSize - 1 && textures[y][x+1] >= 0) {
                textures[y][x-1] = -2;
            }
            else if (x > 0 && textures[y][x-1] >= 0) {
                textures[y][x+1] = -2;
            }
            else if (y < mapSize - 1 && textures[y+1][x] >= 0) {
                textures[y-1][x] = -2;
            }
            else if (y > 0 && textures[y-1][x] >= 0) {
                textures[y+1][x] = -2;
            }

            return true;
        } else {
            return false;
        }
    }

    return false;
}

function check_buy_bridge(index) {
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
            return true;
        } else {
            return false;
        }
    }

    return false;
}

function sell_stuff(index) {
    players[index].money += players[index].wood *4 + players[index].stone*4 + players[index].food*4;
    players[index].food = 0;
    players[index].wood = 0;
    players[index].stone = 0;
    if (int(inputStr[1]) >= 0 && int(inputStr[1]) < 4){
        buildStr(int(inputStr[1]), int(inputStr[2])); //send data back for client
    }
}