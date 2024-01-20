function buy_building_one(index) {
    if (index >= 0 && index < playerCount && m[index] >= buildOneCost && textures[players[index].y][players[index].x] == 0) {
        m[index] = m[index] - buildOneCost;
        ownership[players[index].y][players[index].x] = index;
        textures[players[index].y][players[index].x] = 1;
        return true;
    } else {
        return false;
    }
}