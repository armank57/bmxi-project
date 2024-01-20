function draw_money(w, h, offsetw, offseth) {
    if (offsetw != 0) {
        rectMode(CENTER);
        noStroke();
        fill("#FFFFFF");
        rect(w + offsetw/2, h/2, offsetw, h);
        strokeWeight(1);
        stroke("#000000");
        fill("#000000");
        text("Red Player: $" + players[0].money, w + offsetw/2, h/5);
        text("Green Player: $" + players[1].money, w + offsetw/2, h*2/5);
        text("Pink Player: $" + players[2].money, w + offsetw/2, h*3/5);
        text("Blue Player: $" + players[3].money, w + offsetw/2, h*4/5);
    } else {
        rectMode(CENTER);
        strokeWeight(1);
        stroke("#000000");
        fill("#000000");
        text("Red Player: $" + players[0].money, w/5, h + offseth/2);
        text("Green Player: $" + players[1].money, w*2/5, h + offseth/2);
        text("Pink Player: $" + players[2].money, w*3/5, h + offseth/2);
        text("Blue Player: $" + players[3].money, w*4/5, h + offseth/2);
    }
}