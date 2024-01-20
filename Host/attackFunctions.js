function checkDistance() {
    // compare if fightingpower is greater than others
    p1fp = players[0].fightingPower = 0
    p2fp = players[1].fightingPower = 0
    p3fp = players[2].fightingPower = 0
    p4fp = players[3].fightingPower = 0

    
    //placeholder for players position, would be an entry in array

    p1position = (players[0].x, players[0].y)
    p2position = (players[1].x, players[1].y)
    p2position = (players[2].x, players[2].y)
    p3position = (players[3].x, players[3].y)

    
    // (0,6), (1,6), (2,6), (3,6) examples of blocked off tiles
    // var range = [0, 1, 2] assigned to player once they purchase

    p1range = players[0].range = 0
    p2range = players[1].range = 0
    p3range = players[2].range = 0
    p4range = players[3].range = 0

    //player 1

    if (Math.abs(p1position - p2position) >= (2,0) | (0,2) | (2,2)){
        //this returns false no matter what if user is too far
        return false
    }

    //if player 1 attacks player 2 with range 0
    if (Math.abs(p1position - p2position) = (0, 0)){

        if (attack) {
            if (p1fp < p2fp) {
                p1fp = p1fp - p2fp 
                p2fp = p2fp - p2fp

                players[1].x = 1
                players[1].y = int(mapSize/2)
            } else if (p2fp > p1fp) {
                p2fp = p2fp - p2fp 
                p1fp = p1fp - p1fp

                players[0].x = int(mapSize/2)
                players[0].y = 1

                players[0].money = players[0].money - 10000000
            } else {
                p1fp = 0
                p2fp = 0

                players[0].x = int(mapSize/2)
                players[0].y = 1

                players[1].x = 1
                players[1].y = int(mapSize/2)
            }
        } 

        return false
    }

    if (Math.abs(p1position - p2position) <= (1,0) || (0,1) || (1,1)){
        // if the player has range 1
        if (p1range = 0){
            return false
        }

        if (attack) {
            if (p1fp < p2fp) {
                p1fp = p1fp - p2fp 
                p2fp = p2fp - p2fp

                players[1].x = 1
                players[1].y = int(mapSize/2)
            } else if (p2fp > p1fp) {
                p2fp = p2fp - p2fp 
                p1fp = p1fp - p1fp

                players[0].x = int(mapSize/2)
                players[0].y = 1
            } else {
                p1fp = 0
                p2fp = 0

                players[0].x = int(mapSize/2)
                players[0].y = 1

                players[1].x = 1
                players[1].y = int(mapSize/2)
            }
        }

    
        return false
    }

    if (Math.abs(p1position - p2position) <= (2,0) | (0,2) | (2,2)){
        // if the player has range 2
        if (p1range = 0){
            return false
        }
        if (p1range = 1){
            return false
        }



        return false
    }

}

function checkFightingPower(Player1, Player2, Player3, Player4) {
    // compare if fightingpower is greater than others
    var p1 = Player1
    var p2 = Player2
    var p3 = Player3
    var p4 = Player4

    // (0,6), (1,6), (2,6), (3,6) examples of blocked off tiles


}