function draw_money(w, h, offsetw, offseth) {
    if (offsetw != 0) {
        rectMode(CENTER);
        strokeWeight(1);
        stroke("#000000");
        fill("#000000");
        text("Red Player: $" + m[0], w + offsetw/2, h/5);
        text("Green Player: $" + m[1], w + offsetw/2, h*2/5);
        text("Pink Player: $" + m[2], w + offsetw/2, h*3/5);
        text("Blue Player: $" + m[3], w + offsetw/2, h*4/5);
    } else {
        rectMode(CENTER);
        strokeWeight(1);
        stroke("#000000");
        fill("#000000");
        text("Red Player: $" + m[0], w/5, h + offseth/2);
        text("Green Player: $" + m[1], w*2/5, h + offseth/2);
        text("Pink Player: $" + m[2], w*3/5, h + offseth/2);
        text("Blue Player: $" + m[3], w*4/5, h + offseth/2);
    }
}