let btns = ["Claim0", "Make Bridge0", "Upgrade0", "Range Upgrade0", "Fight Upgrade0", "000"];
let infot = ["Start", "of", "Game"];
let infop = ["Fighting Power: - Range: - ","Money: - Food: - ","Wood: - Stone: - Iron: -"];
let playerID = 0;
let serverMessage = "This is a Test Server Message";
let orientationh = 0; // 1 is vertical

let boolAddress = 1;
let inputStr = "";

function display_menu(w, h) {
    get_client_info(); //updates btns and info
    if (w > h) {
        display_infow(w, h);
        display_actionsw(w, h);
        orientationh = 0;
    } else {
        display_infoh(w, h);
        display_actionsh(w, h);
        orientationh = 1;
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

function display_infoh(w, h) {
    //display possible actions
    rectMode(CENTER);
    strokeWeight(1);
    stroke("#000000");
    textSize(15);
    fill("#FFFFFF");
    for (i = 0; i<2; i++) {
        for (j = 0; j < 3; j++) {
            fill("#CCCCCC");
            rect(w*(2*i+1)/4, h*(j+1)/16+h/20, w/3, h/18, w/70);
            fill("#000000");
            textAlign(CENTER, CENTER);
            textSize(12);
            if (i == 0){
                text(infot[j], w*(2*i+1)/4, h*(j+1)/16+h/20);
            } else {
                text(infop[j], w*(2*i+1)/4, h*(j+1)/16+h/20);
            }
        }
    }
    textSize(30);
}


function display_actionsh(w, h) {
    //display read only info
    rectMode(CENTER);
    textAlign(CENTER, CENTER);
    strokeWeight(1);
    stroke("#000000");
    fill("#FFFFFF");
    textSize(30);

    for (i = 0; i<2; i++) {
        for (j = 0; j < 3; j++) {
            if(i != 1 || j != 2) {
                fill("#CCCCCC");
                if (btns[3*i+j][btns[3*i+j].length-1] == '0' || btns[3*i+j][btns[3*i+j].length-1] == ' ') {
                    fill("#BBBBBB");
                } else {
                    fill("#FFFFFF");
                }
                rect(w*(2*i+1)/4, h*(j+1)/16+h*14/20, w/3, h/18, w/70);
                fill("#000000");
                textAlign(CENTER, CENTER);
                textSize(12);
                text(btns[3*i+j].substring(0, btns[3*i+j].length-1), w*(2*i+1)/4, h*(j+1)/16+h*14/20);
            } else {
                offsetColors = 0;
                for (k = 0; k<4;k++) {
                    if (k == playerID) {
                        continue;
                    } else {
                        if (btns[3*i+j][offsetColors] == '1') {
                            if (k == 0) {
                                fill("rgba(200,12,12, 1)");
                            }
                            else if (k == 1) {
                                fill("rgba(12,100,12,1)");
                            }
                            else if (k == 2) {
                                fill("rgba(200,12,200,1)");
                            }
                            else if (k == 3) {
                                fill("rgba(12,12,200,1)");
                            }
                            rect(w*(2*i+1)/4 -w/9 + (offsetColors *w/9), h*(j+1)/16+h*14/20, w/10, h/18, w/70);
                        } else {
                            fill("rgba(12,12,12,0.5)");
                            rect(w*(2*i+1)/4 -w/9 + (offsetColors *w/9), h*(j+1)/16+h*14/20, w/10, h/18, w/70);
                        }

                        offsetColors += 1;
                    }
                }
                fill("#FFFFFF");
            }
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
    if (orientationh == 0) {
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
    } else {
        for (i = 0; i<2; i++) {
            for (j = 0; j < 3; j++) {
                if((i != 1 || j != 2) && mouseX > w*(2*i+1)/4 - w/6 && mouseX < w*(2*i+1)/4 + w/6 && mouseY > h*(j+1)/16+h*14/20 - h/36 && mouseY < h*(j+1)/16+h*14/20 + h/36) {
                sendData("H" + playerID + "P" + (3*i+j)); //sends button selected to host
                } else {
                    for (k = 0; k<3;k++) {
                        if (k == playerID) {
                            continue;
                        } else {
                            if (mouseX > w*(2*i+1)/4 -w/9 + (k *w/9) - w/20 && mouseX < w*(2*i+1)/4 -w/9 + (k *w/9) + w/20 && mouseY > h*(j+1)/16+h*14/20 - h/36 && mouseY < h*(j+1)/16+h*14/20 + h/36) {
                                sendData("H" + playerID + "P" + (3*i+j+k));
                            }
                        }
                    }
                }
            }
        }
    }

}