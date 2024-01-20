let mapSize = 25;
let playerCount = 4;
let islandSize = 7;
let centerSize = 2; //half of size
let textures = Array(mapSize).fill(null).map(()=>Array(mapSize).fill(0));
let ownership = Array(mapSize).fill(null).map(()=>Array(mapSize).fill(0));
let players = Array(playerCount).fill(Player);
let m = Array(playerCount).fill(2000);
let debugHostSelectedPlayer = 0;

let buildOneCost = 100;
let buildTwoCost = 200;
let buildThreeCost = 300;
let brigdeCost = 10;

function init() {
    players[0] = new Player(0, int(mapSize/2), 1);
    players[1] = new Player(1, 1, int(mapSize/2));
    players[2] = new Player(2, int(mapSize/2), mapSize-2);
    players[3] = new Player(3, mapSize-2, int(mapSize/2));
    generate_map();
}

function move(index, x, y) {
    if (x >= 0 && x < mapSize && y >= 0 && y < mapSize && index >= 0 && index < playerCount) {
        players[index].x = x;
        players[index].y = y;
    }
}
function move_right(index) {
    if (index >= 0 && index < playerCount && players[index].x < mapSize -1 && textures[players[index].y][players[index].x+1] != -1) {
        players[index].x = players[index].x+1;
    }
}
function move_left(index) {
    if (index >= 0 && index < playerCount && players[index].x > 0 && textures[players[index].y][players[index].x-1] != -1) {
        players[index].x = players[index].x-1;
    }
}
function move_down(index) {
    if (index >= 0 && index < playerCount && players[index].y < mapSize-1 && textures[players[index].y-1][players[index].x] != -1) {
        players[index].y = players[index].y+1;
    }
}
function move_up(index) {
    if (index >= 0 && index < playerCount && players[index].y > 0 && textures[players[index].y+1][players[index].x] != -1) {
        players[index].y = players[index].y-1;
    }
}

function Player(index, posX, posY) {
    this.x = posX;
    this.y = posY;
    this.index = index;
    
    this.fightingPower = 0;
    this.range = 0;

    this.money = 1000;
    this.food = 0;

    this.wood = 0;
    this.stone = 0;
    this.iron = 0;
    this.wheat = 0;
    this.fish = 0;
    this.cattle = 0;
}
function generate_map() {
    //corners
    for (let i = 0; i < islandSize+1; i++) {
        textures[mapSize-1-i][islandSize] = -1;
        textures[mapSize-1-i][mapSize-1-islandSize] = -1;
        textures[i][islandSize] = -1;
        textures[i][mapSize-1-islandSize] = -1;
        textures[islandSize][mapSize-1-i] = -1;
        textures[mapSize-1-islandSize][mapSize-1-i] = -1;
        textures[islandSize][i] = -1;
        textures[mapSize-1-islandSize][i] = -1;
    }
    for (let i = 0; i < islandSize+2; i++) {
        textures[mapSize-1-i][islandSize+1] = -1;
        textures[mapSize-1-i][mapSize-2-islandSize] = -1;
        textures[i][islandSize+1] = -1;
        textures[i][mapSize-2-islandSize] = -1;
        textures[islandSize+1][mapSize-1-i] = -1;
        textures[mapSize-2-islandSize][mapSize-1-i] = -1;
        textures[islandSize+1][i] = -1;
        textures[mapSize-2-islandSize][i] = -1;
    }
    for (let i = 0; i <= centerSize; i++) {
        ms = int(mapSize/2);
        textures[ms+i][ms+centerSize] = -1;
        textures[ms-i][ms+centerSize] = -1;
        textures[ms+i][ms-centerSize] = -1;
        textures[ms-i][ms-centerSize] = -1;
        textures[ms-centerSize][ms-i] = -1;
        textures[ms+centerSize][ms-i] = -1;
        textures[ms-centerSize][ms+i] = -1;
        textures[ms+centerSize][ms+i] = -1;
    }
}