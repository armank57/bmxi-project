let btns = ["a", "b", "c", "d", "e", "f"];
let infot = ["info", "for", "tile"];
let infop = ["info","for","player"];

function display_menu(w, h) {
    get_client_info(); //updates btns and info
    if (w > h) {
        display_infow(w, h);
        display_actionsw(w, h, 0);
    } else {
        display_info(w, h/2);
        display_actions(w, h/2, 1);
    }
}

function get_client_info() {
    //server side asking
}

function display_infow(w, h) {
    //display read only info
    rectMode(CENTER);
    strokeWeight(1);
    stroke("#000000");
    fill("#FFFFFF");
    for(i = 3; i < 14; i+=2) {
        rect(w/5, h*i/16, w/5, h/9);
        fill("#000000");
        text(btns[(i-3)/2], w/5, h*i/16);
        fill("#FFFFFF");
    }
}

function display_actionsw(w, h) {
    //display possible actions
    rectMode(CENTER);
    strokeWeight(1);
    stroke("#000000");
    fill("#FFFFFF");
    for(i = 3; i < 14; i+=2) {
        if (i == 9) {
            fill("#CCCCCC");
        }
        rect(w*4/5, h*i/16, w/5, h/9);
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

function tile_display_buttons() {
    for(i = 3; i < 14; i+=2) {
        if (mouseX > w/5- w/10 && mouseX < w/5 + w/10 && mouseY > h*i/16 - h/18 && mouseY < h*i/16 + h/18) {
            //ith button clicked
            console.log((i-3)/2);
        }
    }

}