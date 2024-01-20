let mapSize = 17;
let playerCount = 4;
let textures = Array(mapSize).fill(null).map(()=>Array(mapSize).fill(0));
let ownership = Array(mapSize).fill(null).map(()=>Array(mapSize).fill(0));
let players = Array(playerCount).fill(Player);
let m = Array(playerCount).fill(2000);
let debugHostSelectedPlayer = 0;

let buildOneCost = 100;
let buildTwoCost = 200;
let buildThreeCost = 300;

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
function move_right(index) {
    if (index >= 0 && index < playerCount && players[index].x < mapSize -1 && textures[players[index].x+1][players[index].y] != -1) {
        players[index].x = players[index].x+1;
    }
}
function move_left(index) {
    if (index >= 0 && index < playerCount && players[index].x > 0 && textures[players[index].x-1][players[index].y] != -1) {
        players[index].x = players[index].x-1;
    }
}
function move_down(index) {
    if (index >= 0 && index < playerCount && players[index].y < mapSize-1 && textures[players[index].x][players[index].y+1] != -1) {
        players[index].y = players[index].y+1;
    }
}
function move_up(index) {
    if (index >= 0 && index < playerCount && players[index].y > 0 && textures[players[index].x][players[index].y-1] != -1) {
        players[index].y = players[index].y-1;
    }
}

function Player(index, posX, posY) {
    this.x = posX;
    this.y = posY;
    this.index = index;
    
    this.fightingPower = 0
    this.range = 0

    this.money = 0
    this.food = 0

    this.wood = 0
    this.stone = 0
    this.iron = 0
    this.wheat = 0
    this.fish = 0
    this.cattle = 0
}