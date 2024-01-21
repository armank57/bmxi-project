var flag = false;

function draw_map(w, h) {
    for(row = 0; row < mapSize; row++) {
        for (col = 0; col < mapSize; col++) {
            let currentTime = int(millis() / 1000);

            if (currentTime % 5 == 0 && ! flag) {

                if (textures[row][col] == 5 && ownership[row][col] == 0) {
                    players[0].food = players[0].food + 1;

                } else if (textures[row][col] == 5 && ownership[row][col] == 1) {
                    players[1].food = players[1].food + 1;
                    
                } else if (textures[row][col] == 5 && ownership[row][col] == 2) {
                    players[2].food = players[2].food + 1;
                    
                } else if (textures[row][col] == 5 && ownership[row][col] == 3) {
                    players[3].food = players[3].food + 1;
                }

                if (textures[row][col] == 6 && ownership[row][col] == 0) {
                    players[0].wood = players[0].wood + 1;

                } else if (textures[row][col] == 6 && ownership[row][col] == 1) {
                    players[1].wood = players[1].wood + 1;
                    
                } else if (textures[row][col] == 6 && ownership[row][col] == 2) {
                    players[2].wood = players[2].wood + 1;
                    
                } else if (textures[row][col] == 6 && ownership[row][col] == 3) {
                    players[3].wood = players[3].wood + 1;
                }

                if (textures[row][col] == 7 && ownership[row][col] == 0) {
                    players[0].stone = players[0].stone + 1;

                } else if (textures[row][col] == 7 && ownership[row][col] == 1) {
                    players[1].stone = players[1].stone + 1;
                    
                } else if (textures[row][col] == 7 && ownership[row][col] == 2) {
                    players[2].stone = players[2].stone + 1;
                    
                } else if (textures[row][col] == 7 && ownership[row][col] == 3) {
                    players[3].stone = players[3].stone + 1;
                }



                if (textures[row][col] == 1 && ownership[row][col] == 0) {
                    players[0].food = players[0].food + 2;

                } else if (textures[row][col] == 1 && ownership[row][col] == 1) {
                    players[1].food = players[1].food + 2;
                    
                } else if (textures[row][col] == 1 && ownership[row][col] == 2) {
                    players[2].food = players[2].food + 2;
                    
                } else if (textures[row][col] == 1 && ownership[row][col] == 3) {
                    players[3].food = players[3].food + 2;
                }

                if (textures[row][col] == 3 && ownership[row][col] == 0) {
                    players[0].wood = players[0].wood + 2;

                } else if (textures[row][col] == 3 && ownership[row][col] == 1) {
                    players[1].wood = players[1].wood + 2;
                    
                } else if (textures[row][col] == 3 && ownership[row][col] == 2) {
                    players[2].wood = players[2].wood + 2;
                    
                } else if (textures[row][col] == 3 && ownership[row][col] == 3) {
                    players[3].wood = players[3].wood + 2;
                }

                if (textures[row][col] == 2 && ownership[row][col] == 0) {
                    players[0].stone = players[0].stone + 2;

                } else if (textures[row][col] == 2 && ownership[row][col] == 1) {
                    players[1].stone = players[1].stone + 2;
                    
                } else if (textures[row][col] == 2 && ownership[row][col] == 2) {
                    players[2].stone = players[2].stone + 2;
                    
                } else if (textures[row][col] == 2 && ownership[row][col] == 3) {
                    players[3].stone = players[3].stone + 2;
                }



                flag = true
            } else if (currentTime % 5 != 0) {
                flag = false;
            }
            if (textures[row][col] == 0) {
                rectMode(CORNER);
                fill("#CCCCCC");
                noStroke();
                rect(w*col/mapSize, h*row/mapSize, w/mapSize, h/mapSize);
                fill("#FFFFFF");
                stroke("#000000");
            } 
            else if (textures[row][col] == 1) { //building 1 (farm)
                console.log("building");
                rectMode(CORNER);
                fill("#CCCC12");
                stroke("#121212");
                rect(w*col/mapSize, h*row/mapSize, w/mapSize, h/mapSize);
                if (ownership[row][col] == 0) {
                    fill("rgba(200,12,12, 1)");
                }
                else if (ownership[row][col] == 1) {
                    fill("rgba(12,100,12,1)");
                }
                else if (ownership[row][col] == 2) {
                    fill("rgba(200,12,200,1)");
                }
                else if (ownership[row][col] == 3) {
                    fill("rgba(12,12,200,1)");
                }
                textSize(20);
                text('F', w*(col+0.5)/mapSize, h*(row+0.6)/mapSize);
                textSize(30);
                fill("#FFFFFF");
                stroke("#000000");
            }
            else if (textures[row][col] == 2) { //building 2 (mine)
                rectMode(CORNER);
                fill("#CCCC12");
                stroke("#121212");
                rect(w*col/mapSize, h*row/mapSize, w/mapSize, h/mapSize);
                if (ownership[row][col] == 0) {
                    fill("rgba(200,12,12, 1)");
                }
                else if (ownership[row][col] == 1) {
                    fill("rgba(12,100,12,1)");
                }
                else if (ownership[row][col] == 2) {
                    fill("rgba(200,12,200,1)");
                }
                else if (ownership[row][col] == 3) {
                    fill("rgba(12,12,200,1)");
                }
                textSize(20);
                text('M', w*(col+0.5)/mapSize, h*(row+0.6)/mapSize);
                textSize(30);                
                fill("#FFFFFF");
                stroke("#000000");
            }
            else if (textures[row][col] == 3) { //building 3 (lumbermill)
                rectMode(CORNER);
                fill("#CCCC12");
                stroke("#121212");
                rect(w*col/mapSize, h*row/mapSize, w/mapSize, h/mapSize);
                if (ownership[row][col] == 0) {
                    fill("rgba(200,12,12, 1)");
                }
                else if (ownership[row][col] == 1) {
                    fill("rgba(12,100,12,1)");
                }
                else if (ownership[row][col] == 2) {
                    fill("rgba(200,12,200,1)");
                }
                else if (ownership[row][col] == 3) {
                    fill("rgba(12,12,200,1)");
                }
                textSize(20);
                text('L', w*(col+0.5)/mapSize, h*(row+0.6)/mapSize);
                textSize(30);
                fill("#FFFFFF");
                stroke("#000000");
            }


            else if (textures[row][col] == 5) { //food
                rectMode(CORNER);
                fill('#ffff00');
                noStroke();
                rect(w*col/mapSize, h*row/mapSize, w/mapSize, h/mapSize);
                fill("#FFFFFF");
                stroke("#000000");
            }

            else if (textures[row][col] == 6) { //wood
                rectMode(CORNER);
                fill('#deb887');
                noStroke();
                rect(w*col/mapSize, h*row/mapSize, w/mapSize, h/mapSize);
                fill("#FFFFFF");
                stroke("#000000");
            }

            else if (textures[row][col] == 7) { //stone
                rectMode(CORNER);
                fill('#696969');
                noStroke();
                rect(w*col/mapSize, h*row/mapSize, w/mapSize, h/mapSize);
                fill("#FFFFFF");
                stroke("#000000");
            }



            else if (textures[row][col] == -1) { //water
                rectMode(CORNER);
                fill("#586FFF");
                noStroke();
                rect(w*col/mapSize, h*row/mapSize, w/mapSize, h/mapSize);
                fill("#FFFFFF");
                stroke("#000000");
            }
            else if (textures[row][col] == -2) { //bridge
                rectMode(CORNER);
                fill("#997B3F");
                noStroke();
                rect(w*col/mapSize, h*row/mapSize, w/mapSize, h/mapSize);
                fill("#FFFFFF");
                stroke("#000000");
            }
            else if (textures[row][col] == -3) { //trading post
                rectMode(CORNER);
                fill("#8b4513");
                noStroke();
                rect(w*col/mapSize, h*row/mapSize, w/mapSize, h/mapSize);
                fill("#FFFFFF");
                stroke("#000000");
            }

            if (ownership[row][col] == 0) {
                fill("rgba(200,12,12, 0.5)");
                noStroke();
                rect(w*col/mapSize, h*row/mapSize, w/mapSize, h/mapSize);
            }
            else if (ownership[row][col] == 1) {
                fill("rgba(12,100,12,0.5)");
                noStroke();
                rect(w*col/mapSize, h*row/mapSize, w/mapSize, h/mapSize);
            }
            else if (ownership[row][col] == 2) {
                fill("rgba(200,12,200,0.5)");
                noStroke();
                rect(w*col/mapSize, h*row/mapSize, w/mapSize, h/mapSize);
            }
            else if (ownership[row][col] == 3) {
                fill("rgba(12,12,200,0.5)");
                noStroke();
                rect(w*col/mapSize, h*row/mapSize, w/mapSize, h/mapSize);
                
            }
            else if (ownership[row][col] == 10) { //center
                fill("#483d8b");
                noStroke();
                rect(w*col/mapSize, h*row/mapSize, w/mapSize, h/mapSize);
            }
            
        }
    }
    //draw selected players:
    noFill();
    strokeWeight(3);
    stroke("rgba(200,12,12, 1)");
    rect(w * players[0].x/mapSize, h * players[0].y/mapSize, w/mapSize, h/mapSize);
    stroke("rgba(12,100,12,1)");
    rect(w * players[1].x/mapSize, h * players[1].y/mapSize, w/mapSize, h/mapSize);
    stroke("rgba(200,12,200,1)");
    rect(w * players[2].x/mapSize, h * players[2].y/mapSize, w/mapSize, h/mapSize);
    stroke("rgba(12,12,200,1)");
    rect(w * players[3].x/mapSize, h * players[3].y/mapSize, w/mapSize, h/mapSize);
    strokeWeight(3);
    stroke("rgba(200,12,12,0.65)");
    rect(w * players[0].x/mapSize, h * players[0].y/mapSize, w/mapSize, h/mapSize);
    stroke("rgba(12,100,12,0.65)");
    rect(w * players[1].x/mapSize, h * players[1].y/mapSize, w/mapSize, h/mapSize);
    stroke("rgba(200,12,200,0.65)");
    rect(w * players[2].x/mapSize, h * players[2].y/mapSize, w/mapSize, h/mapSize);
    stroke("rgba(12,12,200,0.65)");
    rect(w * players[3].x/mapSize, h * players[3].y/mapSize, w/mapSize, h/mapSize);
    strokeWeight(7);
    stroke("rgba(200,12,12,0.5)");
    rect(w * players[0].x/mapSize, h * players[0].y/mapSize, w/mapSize, h/mapSize);
    stroke("rgba(12,100,12,0.5)");
    rect(w * players[1].x/mapSize, h * players[1].y/mapSize, w/mapSize, h/mapSize);
    stroke("rgba(200,12,200,0.5)");
    rect(w * players[2].x/mapSize, h * players[2].y/mapSize, w/mapSize, h/mapSize);
    stroke("rgba(12,12,200,0.5)");
    rect(w * players[3].x/mapSize, h * players[3].y/mapSize, w/mapSize, h/mapSize);
    strokeWeight(10);
    stroke("rgba(200,12,12,0.25)");
    rect(w * players[0].x/mapSize, h * players[0].y/mapSize, w/mapSize, h/mapSize);
    stroke("rgba(12,100,12,0.25)");
    rect(w * players[1].x/mapSize, h * players[1].y/mapSize, w/mapSize, h/mapSize);
    stroke("rgba(200,12,200,0.25)");
    rect(w * players[2].x/mapSize, h * players[2].y/mapSize, w/mapSize, h/mapSize);
    stroke("rgba(12,12,200,0.25)");
    rect(w * players[3].x/mapSize, h * players[3].y/mapSize, w/mapSize, h/mapSize);
    strokeWeight(1);

}

