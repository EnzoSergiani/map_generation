/**ALGORYTHME**/
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function setMap(size) {
    map = createMap(size);
    displayMap(map);
}

function createMap(n) {
    // Get the size of the map
    let mapSize = 2 ** n + 1;

    // Initiate the map
    let map = [];
    for (i = 0; i < mapSize; i++) {
        map[i] = [];
        for (j = 0; j < mapSize; j++) {
            map[i][j] = "";
        }
    }

    size = Math.floor(Math.log(mapSize + 1)/Math.log(2));
    console.log(size);
    let length = mapSize;
    i = 0;
    startX = 0;
    startY = 0;
    end = length-1;
    //squareStep(map, start, end);
    /****/
    squareStep(map, 0, 0, 4);
    squareStep(map, 0, 0, 2);
    squareStep(map, 0, 4, 2);

    /****/


    return map;
}

function squareStep(map, startX, startY, end) {
    // Set the value of the corner
    let corner = null;
    corner = getRandom(1, 9);
    map[startX][startY] = corner;

    corner = getRandom(1, 9);
    map[end][startY] = corner;

    corner = getRandom(1, 9);
    map[startX][end] = corner;

    corner = getRandom(1, 9);
    map[end][end] = corner;

    // Set the value of the center
    let centerPos = Math.floor((end-startX) / 2);
    let x = map[startX][startY];
    let y = map[startX][end];
    let z = map[end][startY];
    let w = map[end][end];

    let average = (x + y + z + w) / 4;
    let random = getRandom(-2, 2);
    let centerValue = average + random;

    map[centerPos][centerPos] = Math.floor(centerValue);
}

function diamondStep(map, length) {

    // Set the the new value
    let centerPos = Math.floor(length / 2);

    let x = map[0][0];
    let y = map[0][length - 1];
    let z = map[length - 1][0];
    let w = map[length - 1][length - 1];

    let average = (x + y + z) / 3;
    let random = getRandom(-2, 2);
    let centerValue = average + random;

    map[0][centerPos] = Math.floor(centerValue);
}
/**KEY**/
document.addEventListener("keydown", function (event) {
    if (event.key == 'r' || event.key == 'R') {
        console.log('Program restart');
        location.reload();
    }
});

/**DISPLAY**/
const canvasSize = 700;

function setColor(value) {
    switch (value) {
        case 0:
            color = '#00008b';
            break;
        case 1:
            color = '#2986cc';
            break;
        case 2:
            color = '#ffdc73';
            break;
        case 3:
            color = '#93c47d';
            break;
        case 4:
            color = '#38761d';
            break;
        case 5:
            color = '#004444';
            break;
        case 6:
            color = '#7c818c';
            break;
        case 7:
            color = '#4b5162';
            break;
        case 8:
            color = '#383c4a';
            break;
        case 9:
            color = '#dadae3'
            break;
        default:
            color = '#000000'
            break;
    }
}

function setPixel(map, x, y, i, j) {
    let mapSize = map.length;
    let pixelSize = canvasSize / mapSize;
    let value = map[i][j];

    let canvas = document.querySelector('canvas')
    let pixel = canvas.getContext("2d");

    setColor(value);
    pixel.fillStyle = color;
    pixel.fillRect(x, y, pixelSize, pixelSize);
}

function displayMap(map) {
    x = 0;
    y = 0;
    i = 0;
    j = 0;
    mapSize = map.length;
    pixelSize = canvasSize / mapSize;
    while (x != 700 && y != 700) {
        for (j; j < mapSize; j++) {
            setPixel(map, x, y, i, j);
            x += pixelSize;
        }
        x = 0;
        y += pixelSize;
        i++;
        j = 0;
    }
}

function displayColor() {
    let map = [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    ];
    displayMap(map);
}

/**PROGRAM**/
setMap(2);