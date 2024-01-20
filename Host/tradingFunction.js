var market = [0, 0, 0, 0, 0, 0];

// wood = 0, stone = 1, iron = 2, wheat =3, fish = 4, cattle = 5

var sell = false
var buy = false

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
            players[index].money = players[index].money  - 8
            market[2] = market[2] - 1
        }
    }
    if (market[3] >= 1 && item == 3 && player[index].money >= 3) {
        if (buy) {
            players[index].wheat = players[index].wheat + 1
            players[index].money = players[index].money - 3
            market[3] = market[3] - 1
        }
    }
    if (market[4] >= 1 && item == 4 && player[index].money >= 4) {
        if (buy) {
            players[index].fish = players[index].fish + 1
            players[index].money = players[index].money - 4
            market[4] = market[4] - 1
        }
    }
    if (market[5] >= 1 && item == 5 && player[index].money >= 5) {
        if (buy) {
            players[index].cattle = players[index].cattle + 1
            players[index].money = players[index].money - 5
            market[5] = market[5] - 1
        }
    }
}

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
    if (players[index].iron >= 1 && item == 2) {
        if (sell) {
            players[index].iron = players[index].iron - 1
            players[index].money = players[index].money + 7
            market[2] = market[2] + 1
        }
    }
    if (players[index].wheat >= 1 && item == 3) {
        if (sell) {
            players[index].wheat = players[index].wheat - 1
            players[index].money = players[index].money + 2
            market[3] = market[3] + 1
        }
    }
    if (players[index].fish >= 1 && item == 4) {
        if (sell) {
            players[index].fish = players[index].fish - 1
            players[index].money = players[index].money + 3
            market[4] = market[4] + 1
        }
    }
    if (players[index].cattle >= 1 && item == 5) {
        if (sell) {
            players[index].cattle = players[index].cattle - 1
            players[index].money = players[index].money + 4
            market[5] = market[5] + 1
        }
    }
}