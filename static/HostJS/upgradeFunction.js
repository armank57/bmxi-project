var upattack = false

function upgradeAttack(index) {
    if (players[index].range == 0 && players[index].stone >= 10 && players[index].wheat >= 5 && players[index].money >= 15) {
        if (upattack) {
            players[index].range == 1
            players[index].stone = players[index].stone - 10
            players[index].wheat = players[index].wheat - 5
            players[index].money = players[index].money - 15
        }
    }
    if (players[index].range == 1 && players[index].iron >= 10 && players[index].cattle >= 5 && players[index].money >= 25) {
        if (upattack) {
            players[index].range == 2
            players[index].stone = players[index].iron - 10
            players[index].wheat = players[index].cattle - 5
            players[index].money = players[index].money - 25
        }
    }
}

function upgradeBuilding(index) {
    
}