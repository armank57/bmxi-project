function checkDistance(player, target) {
    // compare if fightingpower is greater than others
    p1fp = players[0].fightingPower = 0;
    p2fp = players[1].fightingPower = 0;
    p3fp = players[2].fightingPower = 0;
    p4fp = players[3].fightingPower = 0;


    //placeholder for players position, would be an entry in array

    p1position = (players[0].x, players[0].y);
    p2position = (players[1].x, players[1].y);
    p2position = (players[2].x, players[2].y);
    p3position = (players[3].x, players[3].y);


    // (0,6), (1,6), (2,6), (3,6) examples of blocked off tiles
    // var range = [0, 1, 2] assigned to player once they purchase

    p1range = players[0].range = 0;
    p2range = players[1].range = 0;
    p3range = players[2].range = 0;
    p4range = players[3].range = 0;

    // PLAYER ONE...

    // vs PLAYER TWO
if (player == 0) {
    console.log("p1 attacking...");
    if (target == 1) {
    console.log("p2 being attacked...");
    if (Math.abs(p1position - p2position) >= (2, 0) | (0, 2) | (2, 2)) {
        //this returns false no matter what if user is too far
        return false;
    }

    //if player 1 attacks player 2 with range 0
    if (Math.abs(p1position - p2position) = (0, 0)) {

        if (attack) {
            if (p1fp > p2fp) {
                p1fp = p1fp - p2fp;
                p2fp = p2fp - p2fp;

                players[1].x = 1;
                players[1].y = int(mapSize / 2);
            } else if (p2fp > p1fp) {
                p2fp = p2fp - p1fp;
                p1fp = p1fp - p1fp;

                players[0].x = int(mapSize / 2);
                players[0].y = 1;

                players[0].money = players[0].money - 10000000;
            } else {
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

    if (Math.abs(p1position - p2position) <= (1, 0) || (0, 1) || (1, 1)) {
        // if the player has range 1
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