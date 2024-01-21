function buildStr(index) {
    console.log(index);
    outputStr = "C" + index;
    outputStr += build_actions(index);
    outputStr += build_info(index);
    outputStr += build_player(index);
    outputStr += "Server Message Test";
    sendData(outputStr);
}

//lists actions like so [action1, action0,,,,attack0] where 1 means it is available and 0 is not (ie no money)
function build_actions(index) {
    returnStr = "[";
    x = players[index].x;
    y = players[index].y;
    if (textures[y][x] == -2) { //bridge
        returnStr += "Claim0,"; //can't claim bridge
        returnStr += "Make Bridge"; //make bridge
        if (check_buy_bridge(index)) {
            returnStr += "1,";
        } else {
            returnStr += "0,";
        }
        returnStr += "Upgrade0,"; 
    } else if (textures[y][x] == 0) {
        returnStr += "Claim"; //claim empty
        if (check_buy_tile(index)) { //check if can buy
            returnStr += "1,";
        } else {
            returnStr += "0,";
        }
        returnStr += "Make Bridge"; //make bridge
        if (check_buy_bridge(index)) {
            returnStr += "1,";
        } else {
            returnStr += "0,";
        }
        returnStr += "Upgrade0,"; 
    } else if (textures[y][x] == 1) {
        returnStr += "Claim"; //claim empty
        if (check_buy_tile(index)) { //check if can buy
            returnStr += "1,";
        } else {
            returnStr += "0,";
        }
        returnStr += "Make Bridge"; //make bridge
        if (check_buy_bridge(index)) {
            returnStr += "1,";
        } else {
            returnStr += "0,";
        }
        returnStr += "Upgrade0,";
    } else if (textures[y][x] == 2) {
        returnStr += "Claim"; //claim empty
        if (check_buy_tile(index)) { //check if can buy
            returnStr += "1,";
        } else {
            returnStr += "0,";
        }
        returnStr += "Make Bridge"; //make bridge
        if (check_buy_bridge(index)) {
            returnStr += "1,";
        } else {
            returnStr += "0,";
        }
        returnStr += "Upgrade0,";
    } else if (textures[y][x] == 3) {
        returnStr += "Claim"; //claim empty
        if (check_buy_tile(index)) { //check if can buy
            returnStr += "1,";
        } else {
            returnStr += "0,";
        }
        returnStr += "Make Bridge"; //make bridge
        if (check_buy_bridge(index)) {
            returnStr += "1,";
        } else {
            returnStr += "0,";
        }
        returnStr += "Upgrade0,";
    } else if (textures[y][x] == 4) {
        returnStr += "Claim"; //claim empty
        if (check_buy_tile(index)) { //check if can buy
            returnStr += "1,";
        } else {
            returnStr += "0,";
        }
        returnStr += "Make Bridge"; //make bridge
        if (check_buy_bridge(index)) {
            returnStr += "1,";
        } else {
            returnStr += "0,";
        }
        returnStr += "Upgrade0,";
    } else if (textures[y][x] == 5) {
        returnStr += "Claim"; //claim empty
        if (check_buy_tile(index)) { //check if can buy
            returnStr += "1,";
        } else {
            returnStr += "0,";
        }
        returnStr += "Make Bridge"; //make bridge
        if (check_buy_bridge(index)) {
            returnStr += "1,";
        } else {
            returnStr += "0,";
        }
        returnStr += "Upgrade"; //make upgrade
        if (check_building_one(index)) {
            returnStr += "1,";
        } else {
            returnStr += "0,";
        }
    } else if (textures[y][x] == 6) {
        returnStr += "Claim"; //claim empty
        if (check_buy_tile(index)) { //check if can buy
            returnStr += "1,";
        } else {
            returnStr += "0,";
        }
        returnStr += "Make Bridge"; //make bridge
        if (check_buy_bridge(index)) {
            returnStr += "1,";
        } else {
            returnStr += "0,";
        }
        returnStr += "Upgrade"; //make upgrade
        if (check_building_three(index)) {
            returnStr += "1,";
        } else {
            returnStr += "0,";
        }
    } else if (textures[y][x] == 7) {
        returnStr += "Claim"; //claim empty
        if (check_buy_tile(index)) { //check if can buy
            returnStr += "1,";
        } else {
            returnStr += "0,";
        }
        returnStr += "Make Bridge"; //make bridge
        if (check_buy_bridge(index)) {
            returnStr += "1,";
        } else {
            returnStr += "0,";
        }
        returnStr += "Upgrade"; //make upgrade
        if (check_building_two(index)) {
            returnStr += "1,";
        } else {
            returnStr += "0,";
        }
    } else if (textures[y][x] == -3) {
        returnStr += "Claim0,";
        returnStr += "Make Bridge"; //make bridge
        if (check_buy_bridge(index)) {
            returnStr += "1,";
        } else {
            returnStr += "0,";
        }
        returnStr += "Upgrade0,";
    } else if (textures[y][x] == 10) {
        returnStr += "Claim0,"; //claim empty
        returnStr += "Make Bridge"; //make bridge
        if (check_buy_bridge(index)) {
            returnStr += "1,";
        } else {
            returnStr += "0,";
        }
        returnStr += "Upgrade0,";
    }
    returnStr += "Range Upgrade0,Fight Upgrade0,";
    returnStr += "000]"; //implement attack later each is different color
    return returnStr;
}
//formatted [,,]
function build_info(index) {
    returnStr = "[Block: ";
    x = players[index].x;
    y = players[index].y;
    if (textures[y][x] == -2) {
        returnStr += "Bridge,This Goes Over Water,Don't Drown";
    } else if (textures[y][x] == 0) {
        returnStr += "Empty,Desert,You Can Claim It";
    } else if (textures[y][x] == 1) {
        returnStr += "Farm,Higher Efficiency,+2 food";
    } else if (textures[y][x] == 2) {
        returnStr += "Mine,Higher Efficiency,+2 stone";
    } else if (textures[y][x] == 3) {
        returnStr += "Lumbermill,Higher Efficiency,+2 wood";
    } else if (textures[y][x] == 5) {
        returnStr += "Food,Natural Resource,+1 food";
    } else if (textures[y][x] == 6) {
        returnStr += "Wood,Natural Resource,+1 wood";
    } else if (textures[y][x] == 7) {
        returnStr += "Stone,Natural Resource,+1 stone";
    } else if (textures[y][x] == 10) {
        returnStr += "Center,power ups in the future,TODO";
    } else if (textures[y][x] == -3) {
        returnStr += "Trading Post,Trade Stuff,Talk to Others";
    } else {
        returnStr += "TODO,y,n";
    }
    returnStr += "]";
    return returnStr;
}
//formatted [,,,]
function build_player(index) {
    returnStr = "[";
    returnStr += "Fighting Power: " + players[index].fightingPower;
    returnStr += " Range: " + players[index].range + ",";
    returnStr += "Money: " + players[index].money;
    returnStr += " Food: " + players[index].food + ",";
    returnStr += "Wood: " + players[index].wood;
    returnStr += " Stone: " + players[index].stone;
    returnStr += " Iron: " + players[index].iron + "]";
    return returnStr;
}

function perform_action(index, action) {
    console.log("performed" + index + " " + action);
    x = players[index].x;
    y = players[index].y;
    if (textures[y][x] == -2) { //bridge
        if (check_buy_bridge(index)) {
            if(action == 1) {
                buy_bridge(index);
                return;
            }
        }
    } else if (textures[y][x] == 0) { //empty
        if (action == 0) {
            buy_tile(index);
            return;
        }
        if (check_buy_bridge(index)) {
            if(action == 1) {
                buy_bridge(index);
                return;
            }
        }
    }  else if (textures[y][x] == 1) { //empty
        if (action == 0) {
            buy_tile(index);
            return;
        }
        if (check_buy_bridge(index)) {
            if(action == 1) {
                buy_bridge(index);
                return;
            }
        }
    }  else if (textures[y][x] == 2) { //empty
        if (action == 0) {
            buy_tile(index);
            return;
        }
        if (check_buy_bridge(index)) {
            if(action == 1) {
                buy_bridge(index);
                return;
            }
        }
    } else if (textures[y][x] == 3) { //empty
        if (action == 0) {
            buy_tile(index);
            return;
        }
        if (check_buy_bridge(index)) {
            if(action == 1) {
                buy_bridge(index);
                return;
            }
        }
    } else if (textures[y][x] == 5) { //empty
        if (action == 0) {
            buy_tile(index);
            return;
        }
        if (check_buy_bridge(index)) {
            if(action == 1) {
                buy_bridge(index);
                return;
            }
        }
        if (check_building_one(index)) {
            if(action == 2) {
                buy_building_one(index);
                return;
            }
        }
    } else if (textures[y][x] == 6) { //empty
        if (action == 0) {
            buy_tile(index);
            return;
        }
        if (check_buy_bridge(index)) {
            if(action == 1) {
                buy_bridge(index);
                return;
            }
        }
        if (check_building_three(index)) {
            if(action == 2) {
                buy_building_three(index);
                return;
            }
        }
    } else if (textures[y][x] == 7) { //empty
        if (action == 0) {
            buy_tile(index);
            return;
        }
        if (check_buy_bridge(index)) {
            if(action == 1) {
                buy_bridge(index);
                return;
            }
        }
        if (check_building_two(index)) {
            if(action == 2) {
                buy_building_two(index);
                return;
            }
        }
    } else if (textures[y][x] == 10) { //empty
        if (action == 0) {
            buy_tile(index);
            return;
        }
        if (check_buy_bridge(index)) {
            if(action == 1) {
                buy_bridge(index);
                return;
            }
        }
    } else if (textures[y][x] == -3) { //empty
        if (action == 0) {
            buy_tile(index);
            return;
        }
        if (check_buy_bridge(index)) {
            if(action == 1) {
                buy_bridge(index);
                return;
            }
        }
    }
}