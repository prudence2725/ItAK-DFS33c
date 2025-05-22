let containerSnake = document.querySelector(".containerSnake");
let snake = document.querySelector(".snake");
let snakeHead = document.querySelector(".segmentSnake");
let snakeSizePosition = [];
let snakeLastPosition = [snakeHead];
console.log(snakeHead.offsetParent);
console.log(snakeHead.offsetTop);
console.log(snakeHead.offsetLeft);
let positionY = snakeHead.offsetTop;
let positionX = snakeHead.offsetLeft;



function mouveSnakeDown() {
    console.log(positionY);
    positionY += 10;
    if (positionY >= 590) {
        positionY = 0;
    }
    snakeHead.style.top = positionY + "px";
}
function mouveSnakeUp() {
    console.log(positionY);
    positionY -= 10;
    if (positionY <= -5) {
        positionY = 580;
    }
    snakeHead.style.top = positionY + "px";
}
function mouveSnakeLeft() {
    positionX -= 10;
    if (positionX == -10) {
        positionX = 380;
    }
    snakeHead.style.left = positionX + "px";
}
function mouveSnakeRight() {
    console.log(positionX);
    positionX += 10;
    if (positionX == 390) {
        positionX = 0;

    }
    console.log(positionX);
    snakeHead.style.left = positionX + "px";
    
}

let keydownSave = "";
document.addEventListener('keydown', (event) => {
    keydownSave = event.key;
    setInterval(mouveSnake(keydownSave), 150);
});



function mouveSnake(keydown) {
    if (keydown == "ArrowRight") {
        mouveSnakeRight();
    }
    if (keydown == "ArrowLeft") {
        mouveSnakeLeft();
    }
    if (keydown == "ArrowUp") {
        mouveSnakeUp();

    }
    if (keydown == "ArrowDown") {
        mouveSnakeDown();
    }
    snakeEat();
    snakeMouveSize();
    snakeLastPosition[0] = [snakeHead.style.top, snakeHead.style.left];
    
}

// generation d'une pomme
let randomPositionX = [];
let randomPositionY = [];

for (let number = 0; number < 380; number+=10) {
    randomPositionX.push(number);
}

for (let number = 0; number < 580; number+=10) {
    randomPositionY.push(number);
}


 function getRandomPosition(min, max) {
        return Math.random() * (max - min + 1) + min;
    }
function genPomme() {
    let snake = document.querySelector(".snake");
    let spanPomme = document.createElement("span");
    spanPomme.classList.add("pomme");
    let randomX = parseInt(getRandomPosition(0, randomPositionX.length - 1));
    let randomY = parseInt(getRandomPosition(0, randomPositionY.length - 1));
    // spanPomme = document.querySelector(".pomme");
    console.log(spanPomme);
    spanPomme.style.top = randomPositionY[randomY] + "px";
    spanPomme.style.left = randomPositionX[randomX] + "px";
    snake.appendChild(spanPomme);
    return spanPomme;
}
genPomme();
function ajouterSegment(x, y) {
    let snake = document.querySelector(".snake");
    const segment = document.createElement("span");
    segment.classList.add("segmentSnake");
    segment.style.left = x + "px";
    segment.style.top = y + "px";
    snake.appendChild(segment);
    // snakeSizePosition.push(segment);
    return segment;
}

function snakeEat() {
    let pomme = document.querySelector(".pomme");
    if (!pomme) return;

    let pommeX = parseInt(pomme.style.left);
    let pommeY = parseInt(pomme.style.top);

    if (positionX === pommeX && positionY === pommeY) {
        console.log("le serpent a mangé la pomme");
        pomme.remove();
        genPomme();
        let newsegment = ajouterSegment(positionX, positionY);
        snakeSizePosition.push(newsegment);
        console.log(snakeSizePosition);
        
    };
    
}  
function snakeMouveSize() {
    for (let index = 0; index < snakeSizePosition.length; index++){
        const element = snakeSizePosition[index];
        if (index == snakeLastPosition.length - 1) {
            snakeLastPosition.push([element.style.top, element.style.left]);
        } else {
            snakeLastPosition[index + 1] = [element.style.top, element.style.left];
        }
        element.style.top = snakeLastPosition[index][0];
        element.style.left = snakeLastPosition[index][1];
    }
    }

