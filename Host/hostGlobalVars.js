let mapSize = 17;
let playerCount = 4;
let textures = Array(mapSize).fill(null).map(()=>Array(mapSize).fill(0));
let players = Array(playerCount).fill(Player);

function init() {
    players[0] = new Player(0, int(mapSize/2), 1);
    players[1] = new Player(1, 1, int(mapSize/2));
    players[2] = new Player(2, int(mapSize/2), mapSize-2);
    players[3] = new Player(3, mapSize-2, int(mapSize/2));
}

function move(index, x, y) {
    if (x >= 0 && x < mapSize && y >= 0 && y < mapSize && index >= 0 && index < playerCount) {
        players[index].x = x;
        players[index].y = y;
    }
}

function Player(index, posX, posY) {
    this.x = posX;
    this.y = posY;
    this.index = index;
}