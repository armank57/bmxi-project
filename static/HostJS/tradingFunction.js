var market = [0, 0, 0];
var sell = false
var buy = false

// wood = 0, stone = 1, food = 2
/*
function buyItem(index, item) {
    if (market[0] >= 1 && item == 0 && player[index].money >= 4) {
        if (buy) {
            players[index].wood = players[index].wood + 1
            players[index].money = players[index].money - 4
            market[0] = market[0] - 1
        }
    }
    if (market[1] >= 1 && item == 1 && player[index].money >= 6) {
        if (buy) {
            players[index].stone = players[index].stone + 1
            players[index].money = players[index].money - 6
            market[1] = market[1] - 1
        }
    }
    if (market[2] >= 1 && item == 2 && player[index].money >= 8) {
        if (buy) {
            players[index].iron = players[index].iron + 1
            players[index].money = players[index].money - 8
            market[2] = market[2] - 1
        }
    }
    if (market[3] >= 1 && item == 3 && player[index].money >= 3) {
        if (buy) {
            players[index].food = players[index].food + 1
            players[index].money = players[index].money - 3
            market[3] = market[3] - 1
        }
    }
}
*/

function sellItem(index, item){
    if (players[index].wood >= 1 && item == 0) {
        if (sell) {
            players[index].wood = players[index].wood - 1
            players[index].money = players[index].money + 3
            market[0] = market[0] + 1
        }
    }
    if (players[index].stone >= 1 && item == 1) {
        if (sell) {
            players[index].stone = players[index].stone - 1
            players[index].money = players[index].money + 5
            market[1] = market[1] + 1
        }
    }
    if (players[index].food >= 1 && item == 2) {
        if (sell) {
            players[index].food = players[index].food - 1
            players[index].money = players[index].money + 2
            market[3] = market[3] + 1
        }
    }
}