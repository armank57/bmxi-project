let btns = ["Claim0", "Make Bridge0", "Upgrade0", "Range Upgrade0", "Fight Upgrade0", "000"];
let infot = ["Start", "of", "Game"];
let infop = ["Fighting Power: - Range: - ","Money: - Food: - ","Wood: - Stone: - Iron: -"];
let playerID = 0;
let serverMessage = "This is a Test Server Message";

let boolAddress = 1;
let inputStr = "";

function display_menu(w, h) {
    get_client_info(); //updates btns and info
    if (w > h) {
        display_infow(w, h);
        display_actionsw(w, h);
    } else {
        display_info(w, h/2);
        display_actions(w, h/2, 1);
    }
    display_text(w, h);
    display_ID(w, h);
}

function get_client_info() {
    //server side asking
}

function display_actionsw(w, h) {
    //display read only info
    rectMode(CENTER);
    textAlign(CENTER, CENTER);
    strokeWeight(1);
    stroke("#000000");
    fill("#FFFFFF");
    textSize(30);
    for(i = 3; i < 14; i+=2) {
        if (i != 13) {
            if (btns[(i-3)/2][btns[(i-3)/2].length-1] == '0' || btns[(i-3)/2][btns[(i-3)/2].length-1] == ' ') {
                fill("#BBBBBB");
            } else {
                fill("#FFFFFF");
            }
            rect(w/5, h*i/16, w/5, h/9, w/70);
            fill("#000000");
            text(btns[(i-3)/2].substring(0, btns[(i-3)/2].length-1), w/5, h*i/16);
            fill("#FFFFFF");
        } else {
            offsetColors = 0;
            for (j = 0; j<4;j++) {
                if (j == playerID) {
                    continue;
                } else {
                    if (btns[(i-3)/2][offsetColors] == '1') {
                        if (j == 0) {
                            fill("rgba(200,12,12, 1)");
                        }
                        else if (j == 1) {
                            fill("rgba(12,100,12,1)");
                        }
                        else if (j == 2) {
                            fill("rgba(200,12,200,1)");
                        }
                        else if (j == 3) {
                            fill("rgba(12,12,200,1)");
                        }
                        rect(w/5- w/15 + (offsetColors *w/15), h*i/16, w/16, h/9, w/70);
                    } else {
                        fill("rgba(12,12,12,0.5)");
                        rect(w/5- w/15 + (offsetColors *w/15), h*i/16, w/16, h/9, w/70);
                    }

                    offsetColors += 1;
                }
            }
            fill("#FFFFFF");
        }
    }
}

function display_infow(w, h) {
    //display possible actions
    rectMode(CENTER);
    strokeWeight(1);
    stroke("#000000");
    textSize(15);
    fill("#FFFFFF");
    for(i = 3; i < 14; i+=2) {
        if (i == 9) {
            fill("#CCCCCC");
        }
        rect(w*4/5, h*i/16, w/5, h/9, w/70);
        if (i < 8) {
            fill("#000000");
            text(infot[(i-3)/2], w*4/5, h*i/16);
            fill("#FFFFFF");
        } else {
            fill("#000000");
            text(infop[(i-9)/2], w*4/5, h*i/16);
            fill("#CCCCCC");
        }
        
    }
}

function display_info(w, h) {
    //display read only info
    rectMode(CENTER);
    strokeWeight(1);
    stroke("#000000");
    fill("#FFFFFF");
    for(i = 1; i < 16; i+=2) {
        rect(w/4, h*i/16, w/2, h/8);
        rect(w*3/4, h*i/16, w/2, h/8);
    }
}


function display_actions(w, h, orientation) {
    //display possible actions
    if (orientation == 0) {
        offsetW = w;
        rectMode(CENTER);
        strokeWeight(1);
        stroke("#000000");
        fill("#FFFFFF");
        for(i = 1; i < 16; i+=2) {
            rect(offsetW + w/4, h*i/16, w/2, h/8);
            rect(offsetW + w*3/4, h*i/16, w/2, h/8);
        }
    }
}


function display_text(w, h) {
    rectMode(CENTER);
    textAlign(CENTER, CENTER);
    strokeWeight(1);
    stroke("#000000");
    fill("#FFFFFF");
    text(serverMessage, w/2, h *28/29);
    fill("#FFFFFF");
}

function display_ID(w, h) {
    rectMode(CENTER);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    noStroke();
    if (playerID == 0) { 
        fill("rgba(200,12,12, 1)");
        text("Red Player", w/2, h *1/25);
    } else if(playerID == 1) {
        fill("rgba(12,100,12,1)");
        text("Green Player", w/2, h *1/25);
    } else if(playerID == 2) {
        fill("rgba(200,12,200,1)");
        text("Purple Player", w/2, h *1/25);
    } else if (playerID == 3) {
        fill("rgba(12,12,200,1)");
        text("Blue Player", w/2, h *1/25);
    }
    fill("#FFFFFF");
    textStyle(NORMAL);
    stroke("#000000");
}

function tile_display_buttons() {
    for(i = 3; i < 14; i+=2) {
        if (i != 13 && mouseX > w/5- w/10 && mouseX < w/5 + w/10 && mouseY > h*i/16 - h/18 && mouseY < h*i/16 + h/18) {
            //ith button clicked
            console.log((i-3)/2);
            sendData("H" + playerID + "P" + (i-3)/2); //sends button selected to host
        } else if (i == 13) {
            for (j =0; j < 3; j++) {
                if ( mouseX > w/5- w/15 + (j*w/15) - w/32 && mouseX < w/5- w/15 + (j*w/15) + w/32 && mouseY > h*i/16 - h/18 && mouseY < h*i/16 + h/18) {
                    sendData("H" + playerID + "P" + (i-3)/2+j);
                }
            }
        }
    }

}