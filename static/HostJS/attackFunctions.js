function calculateDistance(a, b) {
    if (Math.abs(a[0] - b[0]) == 2 && Math.abs(a[1] - b[1]) == 2) { // account for diagonal movement
        return 2;
    }
    if (Math.abs(a[0] - b[0]) == 1 && Math.abs(a[1] - b[1]) == 1) { // account for diagonal movement
        return 1;
    }
    var dx = a[0] - b[0];
    var dy = a[1] - b[1];
    return Math.sqrt(dx * dx + dy * dy);
}


/*
 * @brief Checks if the player is able to attack the target
 *
 * @param player The player that is attacking
 * @param target The player that could be attacked
 * 
 * @return True if the player is able to attack the target, False otherwise
 */ 
function checkAttack(player, target) {
    if (player == target) { // player is attacking themselves
        return false;
    }

    p1position = [players[0].x, players[0].y];
    p2position = [players[1].x, players[1].y];
    p3position = [players[2].x, players[2].y];
    p4position = [players[3].x, players[3].y];

    p1range = players[0].range;
    p2range = players[1].range;
    p3range = players[2].range;
    p4range = players[3].range;

    positions = [p1position, p2position, p3position, p4position];
    ranges = [p1range, p2range, p3range, p4range];

    switch(calculateDistance(positions[player], positions[target])) {
        case 0: // player and target are on the same tile
            return true;
        case 1: // player and target are 1 tile away
            if (ranges[player] == 0) {
                return false;
            }
            return true;
        case 2: // player and target are 2 tiles away
            if (ranges[player] == 0 || ranges[player] == 1) {
                return false;
            }
            return true;
        default: // the player is too far away
            return false;
    }

}

/*
 * @brief Checks if the player is close enough to attack the target and then attacks
 *
 * @param player The player that is attacking
 * @param target The player that is being attacked
 * 
 * @return True if the player is close enough to attack the target and attack is successful, False otherwise
 */ 
function attack(player, target) {
    if (player == target) { // player is attacking themselves
        return false;
    }
    
    attack = 1; // TODO: use this properly
    // compare if fightingpower is greater than others
    p1fp = players[0].fightingPower;
    p2fp = players[1].fightingPower;
    p3fp = players[2].fightingPower;
    p4fp = players[3].fightingPower;


    //placeholder for players position, would be an entry in array

    p1position = [players[0].x, players[0].y];
    p2position = [players[1].x, players[1].y];
    p3position = [players[2].x, players[2].y];
    p4position = [players[3].x, players[3].y];

    // (0,6), (1,6), (2,6), (3,6) examples of blocked off tiles
    // var range = [0, 1, 2] assigned to player once they purchase

    p1range = players[0].range;
    p2range = players[1].range;
    p3range = players[2].range;
    p4range = players[3].range;

    startX = [int(mapSize / 2), 1, int(mapSize / 2), mapSize - 2];
    startY = [1, int(mapSize / 2), mapSize - 2, int(mapSize / 2)];

    fightingPowers = [p1fp, p2fp, p3fp, p4fp];
    positions = [p1position, p2position, p3position, p4position];
    ranges = [p1range, p2range, p3range, p4range];

    console.log("player: " + player);
    console.log("target: " + target);

    switch(calculateDistance(positions[player], positions[target])) {
        case 0: // player and target are on the same tile
            console.log("range 0");
            if (attack) {
                if (fightingPowers[player] > fightingPowers[target]) {
                    console.log("player wins");
                    fightingPowers[player] = fightingPowers[player] - fightingPowers[target];
                    fightingPowers[target] = fightingPowers[target] - fightingPowers[target];

                    positions[target][0] = startX[target];
                    positions[target][1] = startY[target];
                } else if (fightingPowers[target] > fightingPowers[player]) {
                    console.log("target wins");
                    fightingPowers[target] = fightingPowers[target] - fightingPowers[player];
                    fightingPowers[player] = fightingPowers[player] - fightingPowers[player];

                    positions[player][0] = startX[player];
                    positions[player][1] = startY[player];

                    players[player].money = players[player].money - 10000000;
                } else {
                    console.log("tie");
                    fightingPowers[player] = 0;
                    fightingPowers[target] = 0;

                    positions[player][0] = startX[player];
                    positions[player][1] = startY[player];

                    positions[target][0] = startX[target];
                    positions[target][1] = startY[target];

                    players[player].money = 0;
                }
            }
            break;
        case 1: // player and target are 1 tile away
            console.log("range 1");
            if (ranges[player] == 0) { // player has range 0 can't attack range 1
                return false;
            }
            if (attack) {
                if (fightingPowers[player] > fightingPowers[target]) { // player wins
                    fightingPowers[player] = fightingPowers[player] - fightingPowers[target];
                    fightingPowers[target] = fightingPowers[target] - fightingPowers[target];

                    positions[target][0] = startX[target];
                    positions[target][1] = startY[target];
                } else if (fightingPowers[target] > fightingPowers[player]) { // target wins
                    fightingPowers[target] = fightingPowers[target] - fightingPowers[target];
                    fightingPowers[player] = fightingPowers[player] - fightingPowers[player];

                    positions[player][0] = startX[player];
                    positions[player][1] = startY[player];
                } else { // tie
                    fightingPowers[player] = 0;
                    fightingPowers[target] = 0;

                    positions[player][0] = startX[player];
                    positions[player][1] = startY[player];

                    positions[target][0] = startX[target];
                    positions[target][1] = startY[target];
                }
            }
            break;
        case 2: // player and target are 2 tiles away
            console.log("range 2");
            if (ranges[player] == 0 || ranges[player] == 1) { // player has range 0 or 1 can't attack range 2
                return false;
            }
            if (attack) {
                if (fightingPowers[player] > fightingPowers[target]) { // player wins
                    fightingPowers[player] = fightingPowers[player] - fightingPowers[target];
                    fightingPowers[target] = fightingPowers[target] - fightingPowers[target];

                    positions[target][0] = startX[target];
                    positions[target][1] = startY[target];
                } else if (fightingPowers[target] > fightingPowers[player]) { // target wins
                    fightingPowers[target] = fightingPowers[target] - fightingPowers[target];
                    fightingPowers[player] = fightingPowers[player] - fightingPowers[player];

                    positions[player][0] = startX[player];
                    positions[player][1] = startY[player];
                } else { // tie
                    fightingPowers[player] = 0;
                    fightingPowers[target] = 0;

                    positions[player][0] = startX[player];
                    positions[player][1] = startY[player];

                    positions[target][0] = startX[target];
                    positions[target][1] = startY[target];
                }
            }
            break;
        default: // the player is too far away
            console.log("too far");
            return false;
    }
    players[player].x = positions[player][0];
    players[player].y = positions[player][1];

    players[target].x = positions[target][0];
    players[target].y = positions[target][1]; 
    return true;
}
/*
    // PLAYER ONE...

    // vs PLAYER TWO
    if (player == 0) {
        console.log("p1 attacking...");
        if (target == 1) {
            console.log("p2 being attacked...");
            console.log("p1 position: " + p1position);
            console.log("p2 position: " + p2position);
            if (calculateDistance(p1position, p2position) >= 2) {
                //this returns false no matter what if user is too far
                console.log("too far");
                return false;
            }

            console.log(p1position - p2position);
            //if player 1 attacks player 2 with range 0
            if (calculateDistance(p1position, p2position) == 0) {
                console.log("range 0");
                if (attack) {
                    if (p1fp > p2fp) {
                        console.log("p1 wins");
                        p1fp = p1fp - p2fp;
                        p2fp = p2fp - p2fp;

                        players[1].x = 1;
                        players[1].y = int(mapSize / 2);
                    } else if (p2fp > p1fp) {
                        console.log("p2 wins");
                        p2fp = p2fp - p1fp;
                        p1fp = p1fp - p1fp;

                        players[0].x = int(mapSize / 2);
                        players[0].y = 1;

                        players[0].money = players[0].money - 10000000;
                    } else {
                        console.log("tie");
                        p1fp = 0;
                        p2fp = 0;

                        players[0].x = int(mapSize / 2);
                        players[0].y = 1;

                        players[1].x = 1;
                        players[1].y = int(mapSize / 2);
                        players[0].money = 0;
                    }
                }

                return false;
            }

            if (calculateDistance(p1position, p2position) == 1) {
                // if the player has range 1
                console.log("range 1");
                if (p1range == 0) {
                    return false;
                }

                if (attack) {
                    if (p1fp < p2fp) { // p1 wins
                        p1fp = p1fp - p2fp;
                        p2fp = p2fp - p2fp;

                        players[1].x = 1;
                        players[1].y = int(mapSize / 2);
                    } else if (p2fp > p1fp) { // p2 wins
                        p2fp = p2fp - p2fp;
                        p1fp = p1fp - p1fp;

                        players[0].x = int(mapSize / 2);
                        players[0].y = 1;
                    } else { // tie
                        p1fp = 0;
                        p2fp = 0;

                        players[0].x = int(mapSize / 2);
                        players[0].y = 1;

                        players[1].x = 1;
                        players[1].y = int(mapSize / 2);
                    }
                }


                return false;
            }

            if (Math.abs(p1position - p2position) <= (2, 0) | (0, 2) | (2, 2)) {
                console.log("range 2");
                // if the player has range 2
                if (p1range == 0) {
                    return false;
                }
                if (p1range == 1) {
                    return false;
                }



                return false;
            }
        }

        // VS PLAYER THREE
        if (Math.abs(p1position - p3position) >= (2, 0) | (0, 2) | (2, 2)) {
            //this returns false no matter what if user is too far
            return false;
        }


        //if player 1 attacks player 3 with range 0
        if (Math.abs(p1position - p3position) = (0, 0)) {


            if (attack) {
                if (p1fp > p3fp) {
                    p1fp = p1fp - p3fp;
                    p3fp = p3fp - p3fp;


                    players[2].x = int(mapSize / 2);
                    players[2].y = mapSize - 2;
                } else if (p3fp > p1fp) {
                    p3fp = p3fp - p1fp;
                    p1fp = p1fp - p1fp;


                    players[0].x = int(mapSize / 2);
                    players[0].y = 1;


                    players[0].money = players[0].money - 10000000;
                } else {
                    p1fp = 0;
                    p3fp = 0;


                    players[0].x = int(mapSize / 2);
                    players[0].y = 1;


                    players[2].x = int(mapSize / 2);
                    players[2].y = mapSize - 2;
                }
            }


            return false;
        }


        if (Math.abs(p1position - p3position) <= (1, 0) || (0, 1) || (1, 1)) {
            // if the player has range 1
            if (p1range == 0) {
                return false;
            }


            if (attack) {
                if (p1fp < p3fp) { // p1 wins
                    p1fp = p1fp - p3fp;
                    p3fp = p3fp - p3fp;


                    players[2].x = int(mapSize / 2);
                    players[2].y = mapSize - 2;
                } else if (p3fp > p1fp) { // p3 wins
                    p3fp = p3fp - p3fp;
                    p1fp = p1fp - p1fp;


                    players[0].x = int(mapSize / 2);
                    players[0].y = 1;
                } else { // tie
                    p1fp = 0;
                    p3fp = 0;


                    players[0].x = int(mapSize / 2);
                    players[0].y = 1;


                    players[2].x = int(mapSize / 2);
                    players[2].y = mapSize - 2;
                }
            }




            return false;
        }


        if (Math.abs(p1position - p3position) <= (2, 0) | (0, 2) | (2, 2)) {
            // if the player has range 2
            if (p1range == 0) {
                return false;
            }
            if (p1range == 1) {
                return false;
            }
            return false;
        }

        // vs PLAYER FOUR    

        if (Math.abs(p1position - p4position) >= (2, 0) | (0, 2) | (2, 2)) {
            //this returns false no matter what if user is too far
            return false;
        }


        //if player 1 attacks player 4 with range 0
        if (Math.abs(p1position - p4position) = (0, 0)) {


            if (attack) {
                if (p1fp > p4fp) {
                    p1fp = p1fp - p4fp;
                    p4fp = p4fp - p4fp;


                    players[3].x = mapSize - 2;
                    players[3].y = int(mapSize / 2);
                } else if (p4fp > p1fp) {
                    p4fp = p4fp - p1fp;
                    p1fp = p1fp - p1fp;


                    players[0].x = int(mapSize / 2);
                    players[0].y = 1;


                    players[0].money = players[0].money - 10000000;
                } else {
                    p1fp = 0;
                    p4fp = 0;


                    players[0].x = int(mapSize / 2);
                    players[0].y = 1;


                    players[3].x = mapSize - 2;
                    players[3].y = int(mapSize / 2);
                }
            }


            return false;
        }


        if (Math.abs(p1position - p4position) <= (1, 0) || (0, 1) || (1, 1)) {
            // if the player has range 1
            if (p1range == 0) {
                return false;
            }


            if (attack) {
                if (p1fp < p4fp) { // p1 wins
                    p1fp = p1fp - p4fp;
                    p4fp = p4fp - p4fp;


                    players[3].x = mapSize - 2;
                    players[3].y = int(mapSize / 2);
                } else if (p4fp > p1fp) { // p4 wins
                    p4fp = p4fp - p4fp;
                    p1fp = p1fp - p1fp;


                    players[0].x = int(mapSize / 2);
                    players[0].y = 1;
                } else { // tie
                    p1fp = 0;
                    p4fp = 0;


                    players[0].x = int(mapSize / 2);
                    players[0].y = 1;


                    players[3].x = mapSize - 2;
                    players[3].y = int(mapSize / 2);
                }
            }




            return false;
        }


        if (Math.abs(p1position - p4position) <= (2, 0) | (0, 2) | (2, 2)) {
            // if the player has range 2
            if (p1range == 0) {
                return false;
            }
            if (p1range == 1) {
                return false;
            }






            return false;
        }
    }

    // PLAYER TWO...

    // vs PLAYER ONE

    if (Math.abs(p2position - p1position) >= (2, 0) | (0, 2) | (2, 2)) {
        //this returns false no matter what if user is too far
        return false;
    }

    //if player 2 attacks player 1 with range 0
    if (Math.abs(p2position - p1position) = (0, 0)) {

        if (attack) {
            if (p2fp > p1fp) {
                p2fp = p2fp - p1fp;
                p1fp = p1fp - p1fp;




                players[0].x = int(mapSize / 2);
                players[0].y = 1;
            } else if (p1fp > p2fp) {
                p1fp = p1fp - p2fp;
                p2fp = p2fp - p2fp;




                players[1].x = 1;
                players[1].y = int(mapSize / 2);




                players[1].money = players[1].money - 10000000;
            } else {
                p2fp = 0;
                p1fp = 0;




                players[1].x = 1;
                players[1].y = int(mapSize / 2);




                players[0].x = int(mapSize / 2);
                players[0].y = 1;
            }
        }




        return false;
    }




    if (Math.abs(p2position - p1position) <= (1, 0) || (0, 1) || (1, 1)) {
        // if the player has range 1
        if (p2range == 0) {
            return false;
        }




        if (attack) {
            if (p2fp < p1fp) { // p2 wins
                p2fp = p2fp - p1fp;
                p1fp = p1fp - p1fp;




                players[0].x = int(mapSize / 2);
                players[0].y = 1;
            } else if (p1fp > p2fp) { // p1 wins
                p1fp = p1fp - p1fp;
                p2fp = p2fp - p2fp;




                players[1].x = 1;
                players[1].y = int(mapSize / 2);
            } else { // tie
                p2fp = 0;
                p1fp = 0;




                players[1].x = 1;
                players[1].y = int(mapSize / 2);




                players[0].x = int(mapSize / 2);
                players[0].y = 1;
            }
        }
        return false;
    }
    if (Math.abs(p2position - p1position) <= (2, 0) | (0, 2) | (2, 2)) {
        // if the player has range 2
        if (p2range == 0) {
            return false;
        }
        if (p2range == 1) {
            return false;
        }


        return false;
    }






    // vs PLAYER THREE

    if (Math.abs(p2position - p3position) >= (2, 0) | (0, 2) | (2, 2)) {
        //this returns false no matter what if user is too far
        return false;
    }




    //if player 2 attacks player 3 with range 0
    if (Math.abs(p2position - p3position) = (0, 0)) {




        if (attack) {
            if (p2fp > p3fp) {
                p2fp = p2fp - p3fp;
                p3fp = p3fp - p3fp;




                players[2].x = int(mapSize / 2);
                players[2].y = mapSize - 2;
            } else if (p3fp > p2fp) {
                p3fp = p3fp - p2fp;
                p2fp = p2fp - p2fp;




                players[1].x = 1;
                players[1].y = int(mapSize / 2);




                players[1].money = players[1].money - 10000000;
            } else {
                p2fp = 0;
                p3fp = 0;




                players[1].x = 1;
                players[1].y = int(mapSize / 2);




                players[2].x = int(mapSize / 2);
                players[2].y = mapSize - 2;
            }
        }




        return false;
    }




    if (Math.abs(p2position - p3position) <= (1, 0) || (0, 1) || (1, 1)) {
        // if the player has range 1
        if (p2range == 0) {
            return false;
        }




        if (attack) {
            if (p2fp < p3fp) { // p2 wins
                p2fp = p2fp - p3fp;
                p3fp = p3fp - p3fp;




                players[2].x = int(mapSize / 2);
                players[2].y = mapSize - 2;
            } else if (p3fp > p2fp) { // p3 wins
                p3fp = p3fp - p3fp;
                p2fp = p2fp - p2fp;




                players[1].x = 1;
                players[1].y = int(mapSize / 2);
            } else { // tie
                p2fp = 0;
                p3fp = 0;




                players[1].x = 1;
                players[1].y = int(mapSize / 2);




                players[2].x = int(mapSize / 2);
                players[2].y = mapSize - 2;
            }
        }
        return false;
    }
    if (Math.abs(p2position - p3position) <= (2, 0) | (0, 2) | (2, 2)) {
        // if the player has range 2
        if (p2range == 0) {
            return false;
        }
        if (p2range == 1) {
            return false;
        }


        return false;
    }


    // vs PLAYER FOUR

    if (Math.abs(p2position - p4position) >= (2, 0) | (0, 2) | (2, 2)) {
        //this returns false no matter what if user is too far
        return false;
    }


    //if player 2 attacks player 4 with range 0
    if (Math.abs(p2position - p4position) = (0, 0)) {


        if (attack) {
            if (p2fp > p4fp) {
                p2fp = p2fp - p4fp;
                p4fp = p4fp - p4fp;


                players[3].x = mapSize - 2;
                players[3].y = int(mapSize / 2);
            } else if (p4fp > p2fp) {
                p4fp = p4fp - p2fp;
                p2fp = p2fp - p2fp;


                players[1].x = 1;
                players[1].y = int(mapSize / 2);


                players[1].money = players[1].money - 10000000;
            } else {
                p2fp = 0;
                p4fp = 0;


                players[1].x = 1;
                players[1].y = int(mapSize / 2);


                players[3].x = mapSize - 2;
                players[3].y = int(mapSize / 2);
            }
        }


        return false;
    }


    if (Math.abs(p2position - p4position) <= (1, 0) || (0, 1) || (1, 1)) {
        // if the player has range 1
        if (p2range == 0) {
            return false;
        }


        if (attack) {
            if (p2fp < p4fp) { // p2 wins
                p2fp = p2fp - p4fp;
                p4fp = p4fp - p4fp;


                players[3].x = mapSize - 2;
                players[3].y = int(mapSize / 2);
            } else if (p4fp > p2fp) { // p4 wins
                p4fp = p4fp - p4fp;
                p2fp = p2fp - p2fp;


                players[1].x = 1;
                players[1].y = int(mapSize / 2);
            } else { // tie
                p2fp = 0;
                p4fp = 0;


                players[1].x = 1;
                players[1].y = int(mapSize / 2);


                players[3].x = mapSize - 2;
                players[3].y = int(mapSize / 2);
            }
        }
        return false;
    }
    if (Math.abs(p2position - p4position) <= (2, 0) | (0, 2) | (2, 2)) {
        // if the player has range 2
        if (p2range == 0) {
            return false;
        }
        if (p2range == 1) {
            return false;
        }

        return false;
    }

    // PLAYER THREE...

    // vs PLAYER ONE

    if (Math.abs(p3position - p1position) >= (2, 0) | (0, 2) | (2, 2)) {
        //this returns false no matter what if user is too far
        return false;
    }


    //if player 2 attacks player 1 with range 0
    if (Math.abs(p3position - p1position) = (0, 0)) {


        if (attack) {
            if (p3fp > p1fp) {
                p3fp = p3fp - p1fp;
                p1fp = p1fp - p1fp;








                players[0].x = int(mapSize / 2);
                players[0].y = 1;
            } else if (p1fp > p3fp) {
                p1fp = p1fp - p3fp;
                p3fp = p3fp - p3fp;








                players[2].x = int(mapSize / 2);
                players[2].y = mapSize - 2;








                players[2].money = players[2].money - 10000000;
            } else {
                p3fp = 0;
                p1fp = 0;








                players[2].x = int(mapSize / 2);
                players[2].y = mapSize - 2;








                players[0].x = int(mapSize / 2);
                players[0].y = 1;
            }
        }








        return false;
    }








    if (Math.abs(p3position - p1position) <= (1, 0) || (0, 1) || (1, 1)) {
        // if the player has range 1
        if (p3range == 0) {
            return false;
        }








        if (attack) {
            if (p3fp < p1fp) { // p3 wins
                p3fp = p3fp - p1fp;
                p1fp = p1fp - p1fp;








                players[0].x = int(mapSize / 2);
                players[0].y = 1;
            } else if (p1fp > p3fp) { // p1 wins
                p1fp = p1fp - p1fp;
                p3fp = p3fp - p3fp;








                players[2].x = int(mapSize / 2);
                players[2].y = mapSize - 2;
            } else { // tie
                p3fp = 0;
                p1fp = 0;








                players[2].x = int(mapSize / 2);
                players[2].y = mapSize - 2;








                players[0].x = int(mapSize / 2);
                players[0].y = 1;
            }
        }
        return false;
    }
    if (Math.abs(p3position - p1position) <= (2, 0) | (0, 2) | (2, 2)) {
        // if the player has range 2
        if (p3range == 0) {
            return false;
        }
        if (p3range == 1) {
            return false;
        }




        return false;
    }





    // vs PLAYER TWO

    if (Math.abs(p3position - p2position) >= (2, 0) | (0, 2) | (2, 2)) {
        //this returns false no matter what if user is too far
        return false;
    }


    //if player 2 attacks player 1 with range 0
    if (Math.abs(p3position - p2position) = (0, 0)) {


        if (attack) {
            if (p3fp > p2fp) {
                p3fp = p3fp - p2fp;
                p2fp = p2fp - p2fp;








                players[1].x = 1;
                players[1].y = int(mapSize / 2);
            } else if (p2fp > p3fp) {
                p2fp = p2fp - p3fp;
                p3fp = p3fp - p3fp;








                players[2].x = int(mapSize / 2);
                players[2].y = mapSize - 2;








                players[2].money = players[2].money - 10000000;
            } else {
                p3fp = 0;
                p2fp = 0;








                players[2].x = int(mapSize / 2);
                players[2].y = mapSize - 2;








                players[1].x = 1;
                players[1].y = int(mapSize / 2);
            }
        }








        return false;
    }








    if (Math.abs(p3position - p2position) <= (1, 0) || (0, 1) || (1, 1)) {
        // if the player has range 1
        if (p3range == 0) {
            return false;
        }








        if (attack) {
            if (p3fp < p2fp) { // p3 wins
                p3fp = p3fp - p2fp;
                p2fp = p2fp - p2fp;








                players[1].x = 1;
                players[1].y = int(mapSize / 2);
            } else if (p2fp > p3fp) { // p2 wins
                p2fp = p2fp - p2fp;
                p3fp = p3fp - p3fp;








                players[2].x = int(mapSize / 2);
                players[2].y = mapSize - 2;
            } else { // tie
                p3fp = 0;
                p2fp = 0;








                players[2].x = int(mapSize / 2);
                players[2].y = mapSize - 2;








                players[1].x = 1;
                players[1].y = int(mapSize / 2);
            }
        }
        return false;
    }
    if (Math.abs(p3position - p2position) <= (2, 0) | (0, 2) | (2, 2)) {
        // if the player has range 2
        if (p3range == 0) {
            return false;
        }
        if (p3range == 1) {
            return false;
        }




        return false;
    }

    // vs PLAYER FOUR

    if (Math.abs(p3position - p4position) >= (2, 0) | (0, 2) | (2, 2)) {
        //this returns false no matter what if user is too far
        return false;
    }


    //if player 2 attacks player 1 with range 0
    if (Math.abs(p3position - p4position) = (0, 0)) {


        if (attack) {
            if (p3fp > p4fp) {
                p3fp = p3fp - p4fp;
                p4fp = p4fp - p4fp;








                players[4].x = mapSize - 2;
                players[4].y = int(mapSize / 2);
            } else if (p4fp > p3fp) {
                p4fp = p4fp - p3fp;
                p3fp = p3fp - p3fp;








                players[2].x = int(mapSize / 2);
                players[2].y = mapSize - 2;








                players[2].money = players[2].money - 10000000;
            } else {
                p3fp = 0;
                p4fp = 0;








                players[2].x = int(mapSize / 2);
                players[2].y = mapSize - 2;








                players[4].x = mapSize - 2;
                players[4].y = int(mapSize / 2);
            }
        }








        return false;
    }








    if (Math.abs(p3position - p4position) <= (1, 0) || (0, 1) || (1, 1)) {
        // if the player has range 1
        if (p3range == 0) {
            return false;
        }








        if (attack) {
            if (p3fp < p4fp) { // p3 wins
                p3fp = p3fp - p4fp;
                p4fp = p4fp - p4fp;








                players[4].x = mapSize - 2;
                players[4].y = int(mapSize / 2);
            } else if (p4fp > p3fp) { // p4 wins
                p4fp = p4fp - p4fp;
                p3fp = p3fp - p3fp;








                players[2].x = int(mapSize / 2);
                players[2].y = mapSize - 2;
            } else { // tie
                p3fp = 0;
                p4fp = 0;








                players[2].x = int(mapSize / 2);
                players[2].y = mapSize - 2;








                players[4].x = mapSize - 2;
                players[4].y = int(mapSize / 2);
            }
        }
        return false;
    }
    if (Math.abs(p3position - p4position) <= (2, 0) | (0, 2) | (2, 2)) {
        // if the player has range 2
        if (p3range == 0) {
            return false;
        }
        if (p3range == 1) {
            return false;
        }

        return false;
    }

    // PLAYER FOUR...

    // vs PLAYER ONE

    if (Math.abs(p4position - p1position) >= (2, 0) | (0, 2) | (2, 2)) {
        //this returns false no matter what if user is too far
        return false;
    }


    //if player 2 attacks player 1 with range 0
    if (Math.abs(p4position - p1position) = (0, 0)) {


        if (attack) {
            if (p4fp > p1fp) {
                p4fp = p4fp - p1fp;
                p1fp = p1fp - p1fp;


                players[0].x = int(mapSize / 2);
                players[0].y = 1;
            } else if (p1fp > p4fp) {
                p1fp = p1fp - p4fp;
                p4fp = p4fp - p4fp;
















                players[3].x = mapSize - 2;
                players[3].y = int(mapSize / 2);
















                players[3].money = players[3].money - 10000000;
            } else {
                p4fp = 0;
                p1fp = 0;
















                players[3].x = mapSize - 2;
                players[3].y = int(mapSize / 2);
















                players[0].x = int(mapSize / 2);
                players[0].y = 1;
            }
        }
















        return false;
    }
















    if (Math.abs(p4position - p1position) <= (1, 0) || (0, 1) || (1, 1)) {
        // if the player has range 1
        if (p4range == 0) {
            return false;
        }




        if (attack) {
            if (p4fp < p1fp) { // p4 wins
                p4fp = p4fp - p1fp;
                p1fp = p1fp - p1fp;




                players[0].x = int(mapSize / 2);
                players[0].y = 1;
            } else if (p1fp > p4fp) { // p1 wins
                p1fp = p1fp - p1fp;
                p4fp = p4fp - p4fp;




                players[3].x = mapSize - 2;
                players[3].y = int(mapSize / 2);
            } else { // tie
                p4fp = 0;
                p1fp = 0;


                players[3].x = mapSize - 2;
                players[3].y = int(mapSize / 2);


                players[0].x = int(mapSize / 2);
                players[0].y = 1;
            }
        }
        return false;
    }
    if (Math.abs(p4position - p1position) <= (2, 0) | (0, 2) | (2, 2)) {
        // if the player has range 2
        if (p4range == 0) {
            return false;
        }
        if (p4range == 1) {
            return false;
        }








        return false;
    }

    // vs PLAYER TWO

    if (Math.abs(p4position - p2position) >= (2, 0) | (0, 2) | (2, 2)) {
        //this returns false no matter what if user is too far
        return false;
    }


    //if player 2 attacks player 1 with range 0
    if (Math.abs(p4position - p2position) = (0, 0)) {


        if (attack) {
            if (p4fp > p2fp) {
                p4fp = p4fp - p2fp;
                p2fp = p2fp - p2fp;


                players[1].x = 1;
                players[1].y = int(mapSize / 2);
            } else if (p2fp > p4fp) {
                p2fp = p2fp - p4fp;
                p4fp = p4fp - p4fp;
















                players[3].x = mapSize - 2;
                players[3].y = int(mapSize / 2);
















                players[3].money = players[3].money - 10000000;
            } else {
                p4fp = 0;
                p2fp = 0;
















                players[3].x = mapSize - 2;
                players[3].y = int(mapSize / 2);
















                players[1].x = 1;
                players[1].y = int(mapSize / 2);
            }
        }
















        return false;
    }
















    if (Math.abs(p4position - p2position) <= (1, 0) || (0, 1) || (1, 1)) {
        // if the player has range 1
        if (p4range == 0) {
            return false;
        }




        if (attack) {
            if (p4fp < p2fp) { // p4 wins
                p4fp = p4fp - p2fp;
                p2fp = p2fp - p2fp;




                players[1].x = 1;
                players[1].y = int(mapSize / 2);
            } else if (p2fp > p4fp) { // p2 wins
                p2fp = p2fp - p2fp;
                p4fp = p4fp - p4fp;




                players[3].x = mapSize - 2;
                players[3].y = int(mapSize / 2);
            } else { // tie
                p4fp = 0;
                p2fp = 0;


                players[3].x = mapSize - 2;
                players[3].y = int(mapSize / 2);


                players[1].x = 1;
                players[1].y = int(mapSize / 2);
            }
        }
        return false;
    }
    if (Math.abs(p4position - p2position) <= (2, 0) | (0, 2) | (2, 2)) {
        // if the player has range 2
        if (p4range == 0) {
            return false;
        }
        if (p4range == 1) {
            return false;
        }








        return false;
    }

    // vs PLAYER THREE

    if (Math.abs(p4position - p3position) >= (2, 0) | (0, 2) | (2, 2)) {
        //this returns false no matter what if user is too far
        return false;
    }


    //if player 2 attacks player 1 with range 0
    if (Math.abs(p4position - p3position) = (0, 0)) {


        if (attack) {
            if (p4fp > p3fp) {
                p4fp = p4fp - p3fp;
                p3fp = p3fp - p3fp;


                players[2].x = int(mapSize / 2);
                players[2].y = mapSize - 2;
            } else if (p3fp > p4fp) {
                p3fp = p3fp - p4fp;
                p4fp = p4fp - p4fp;


                players[3].x = mapSize - 2;
                players[3].y = int(mapSize / 2);


                players[3].money = players[3].money - 10000000;
            } else {
                p4fp = 0;
                p3fp = 0;


                players[3].x = mapSize - 2;
                players[3].y = int(mapSize / 2);


                players[2].x = int(mapSize / 2);
                players[2].y = mapSize - 2;
            }
        }


        return false;
    }


    if (Math.abs(p4position - p3position) <= (1, 0) || (0, 1) || (1, 1)) {
        // if the player has range 1
        if (p4range == 0) {
            return false;
        }




        if (attack) {
            if (p4fp < p3fp) { // p4 wins
                p4fp = p4fp - p3fp;
                p3fp = p3fp - p3fp;




                players[2].x = int(mapSize / 2);
                players[2].y = mapSize - 2;
            } else if (p3fp > p4fp) { // p3 wins
                p3fp = p3fp - p3fp;
                p4fp = p4fp - p4fp;




                players[3].x = mapSize - 2;
                players[3].y = int(mapSize / 2);
            } else { // tie
                p4fp = 0;
                p3fp = 0;


                players[3].x = mapSize - 2;
                players[3].y = int(mapSize / 2);


                players[2].x = int(mapSize / 2);
                players[2].y = mapSize - 2;
            }
        }
        return false;
    }
    if (Math.abs(p4position - p3position) <= (2, 0) | (0, 2) | (2, 2)) {
        // if the player has range 2
        if (p4range == 0) {
            return false;
        }
        if (p4range == 1) {
            return false;
        }


        return false;
    }


}

function checkFightingPower(Player1, Player2, Player3, Player4) {
    // compare if fightingpower is greater than others
    var p1 = Player1;
    var p2 = Player2;
    var p3 = Player3;
    var p4 = Player4;

    // (0,6), (1,6), (2,6), (3,6) examples of blocked off tiles


}
*/