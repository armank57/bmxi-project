let mapSize = 25;
// 0 = blank, -1 = ocean, -2 = bridge, 1 -3 buildings farm mine lumber, 4 = tiles, food = 5, wood = 6, stone = 7, 
// trading post = -3, center=10(no building)
let playerCount = 4;
let islandSize = 7;
let centerSize = 2; //half of size
let textures = Array(mapSize).fill(null).map(()=>Array(mapSize).fill(0));
// changed ownership from 0
let ownership = Array(mapSize).fill(null).map(()=>Array(mapSize).fill(-1));
let players = Array(playerCount).fill(Player);
let debugHostSelectedPlayer = 0;

let buildOneCost = 12; //farm
let buildTwoCost = 12; // lumbermill
let buildThreeCost = 15; //mine

let brigdeCost = 7;
let tileCost = 5;

let boolAddress = 1;
let inputStr = "";

let bridgeSprite;
let farmSprite;
let grassSprite;
let lumbermillSprite;
let mineSprite;
let resourcetilefoodSprite;
let resourcetilestoneSprite;
let resourcetilewoodSprite;
let tradingpostSprite;
let waterSprite;

let highestPlayer = 0;
let roomNum;

function preload() {
    bridgeSprite = loadImage('static/HostJS/sprites/bridge.png')
    farmSprite = loadImage('static/HostJS/sprites/farm.png')
    lumbermillSprite = loadImage('static/HostJS/sprites/lumbermill.png')
    mineSprite = loadImage('static/HostJS/sprites/mine.png')
    resourcetilefoodSprite = loadImage('static/HostJS/sprites/resourcetile - food.png')
    resourcetilestoneSprite = loadImage('static/HostJS/sprites/resourcetile - stone.png')
    resourcetilewoodSprite = loadImage('static/HostJS/sprites/resourcetile - wood.png')
    tradingpostSprite = loadImage('static/HostJS/sprites/trading post.png')
    waterSprite = loadImage('static/HostJS/sprites/water.png')
    grassSprite = loadImage('static/HostJS/sprites/grass.png')

}

function victoryPoints(index) {

    var thePoints = 0

    if (players[index].vp >= 1) {
        for(ro = 0; ro < mapSize; ro++) {
            for (co = 0; co < mapSize; co++) {
                if (ownership[ro][co] == index) {
                    thePoints = thePoints + 1
                }
                if (textures[ro][co] == 1 && ownership[ro][co] == index) {
                    thePoints = thePoints + 1
                }
                if (textures[ro][co] == 2 && ownership[ro][co] == index) {
                    thePoints = thePoints + 1
                }
                if (textures[ro][co] == 3 && ownership[ro][co] == index) {
                    thePoints = thePoints + 1
                }
            }
        }
        players[index].vp = thePoints
        thePoints = 0
    }

    if (players[index].vp >= 50) {
        printf("Player %d has won!", index);
    }
}



function init() {
    players[0] = new Player(0, 3, 3);
    players[1] = new Player(1, 3, int(mapSize-4));
    players[2] = new Player(2, int(mapSize-4), 3);
    players[3] = new Player(3, int(mapSize-4),  int(mapSize-4));
    generate_map();
}

function move(index, x, y) {
    if (x >= 0 && x < mapSize && y >= 0 && y < mapSize && index >= 0 && index < playerCount) {
        players[index].x = x;
        players[index].y = y;
    }
}
function move_right(index) {
    if (index+1 > highestPlayer) {
        highestPlayer = index+1;
    }
    if (index >= 0 && index < playerCount && players[index].x < mapSize -1 && textures[players[index].y][players[index].x+1] != -1) {
        players[index].x = players[index].x+1;
    }
}
function move_left(index) {
    if (index+1 > highestPlayer) {
        highestPlayer = index+1;
    }
    if (index >= 0 && index < playerCount && players[index].x > 0 && textures[players[index].y][players[index].x-1] != -1) {
        players[index].x = players[index].x-1;
    }
}
function move_up(index) {
    if (index+1 > highestPlayer) {
        highestPlayer = index+1;
    }
    if (index >= 0 && index < playerCount && players[index].y > 0 && textures[players[index].y-1][players[index].x] != -1) {
        players[index].y = players[index].y-1;
    }
}
function move_down(index) {
    if (index+1 > highestPlayer) {
        highestPlayer = index+1;
    }
    if (index >= 0 && index < playerCount && players[index].y < mapSize-1 && textures[players[index].y+1][players[index].x] != -1) {
        players[index].y = players[index].y+1;
    }
}

function Player(index, posX, posY) {
    this.x = posX;
    this.y = posY;
    this.index = index;
    
    this.fightingPower = 0;
    this.range = 0;

    this.money = 100;
    this.food = 5;

    this.wood = 5;
    this.stone = 5;

    this.vp = 1
}
function generate_map() {
    //corners

    textures[0][0] = -3
    textures[mapSize-1][0] = -3
    textures[0][mapSize-1] = -3
    textures[mapSize-1][mapSize-1] =-3

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

    //center
    ownership[13][13] = 10
    ownership[12][12] = 10
    ownership[11][11] = 10
    ownership[13][12] = 10
    ownership[13][11] = 10
    ownership[12][13] = 10
    ownership[11][12] = 10
    ownership[12][11] = 10
    ownership[11][13] = 10

    
    // starting squares 
    ownership[3][3] = 0
    ownership[mapSize-4][3] = 1
    ownership[3][mapSize-4] = 2
    ownership[mapSize-4][mapSize-4] = 3
    
    //food
    var openCoordinates = []

    for (let i = 0; i < mapSize; i++) {
        for (let j = 0; j < mapSize; j++) {
            if (textures[i][j] == 0) {
                openCoordinates.push([[i], [j]])
            }
        }
    }
    var randElement = []

    for (let i = 0; i < openCoordinates.length; i++) {
        randElement.push(openCoordinates[Math.floor(Math.random() * (openCoordinates.length-1))])
    }

    for (let i = 0; i <= 22; i++) {
        if (i < 22) {
            textures[randElement[i][0]][randElement[i][1]] = 5
            randElement.splice(i, 1)
        }
    }




    //wood
    var openCoordinates = []

    for (let i = 0; i < mapSize; i++) {
        for (let j = 0; j < mapSize; j++) {
            if (textures[i][j] == 0) {
                openCoordinates.push([[i], [j]])
            }
        }
    }

    var randElement = []

    for (let i = 0; i < openCoordinates.length; i++) {
        randElement.push(openCoordinates[Math.floor(Math.random() * (openCoordinates.length-1))])
    }

    for (let i = 0; i <= 15; i++) {
        if (i < 15) {
            textures[randElement[i][0]][randElement[i][1]] = 6
            randElement.splice(i, 1)
        }
    }





    //stone
    var openCoordinates = []

    for (let i = 0; i < mapSize; i++) {
        for (let j = 0; j < mapSize; j++) {
            if (textures[i][j] == 0) {
                openCoordinates.push([[i], [j]])
            }
        }
    }

    var randElement = []

    for (let i = 0; i < openCoordinates.length; i++) {
        randElement.push(openCoordinates[Math.floor(Math.random() * (openCoordinates.length-1))])
    }

    for (let i = 0; i <= 15; i++) {
        if (i < 15) {
            textures[randElement[i][0]][randElement[i][1]] = 7
            randElement.splice(i, 1)
        }
    }
    
    
    
    
    
    
    

}