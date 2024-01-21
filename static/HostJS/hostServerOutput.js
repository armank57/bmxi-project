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
        returnStr += " , , ,"; 
    } else if (textures[y][x] == 0) {
        returnStr += "Claim"; //claim empty
        if (check_buy_tile(index)) { //check if can buy
            returnStr += "1,";
        } else {
            returnStr += "0,";
        }
        returnStr += " , , , ,"; 
    }

    returnStr += "000]"; //implement attack later each is different color
    return returnStr;
}
//formatted [,,]
function build_info(index) {
    returnStr = "[Block: ";
    x = players[index].x;
    y = players[index].y;
    if (textures[y][x] == -2) {
        returnStr += "bridge,,";
    } else if (textures[y][x] == 0) {
        returnStr += "empty,Does nothing,Yeah";
    } else if (textures[y][x] == 1) {
        returnStr += "building,efficiency,blank";
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