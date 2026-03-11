

var newCircles;
var circleArray = [];

var newSquares;
var squareArray = [];

//animation variables
var count = 0;
var idleImages = [];
var animationobj;
var idleIndex = 0;

var zombie
var zombieX = 100;
var zombieY = 100;
var walkIndex = 0;
var walkingspeed = 16;

var facingright = true;
var moving = false;

var timer = 60;
var lastUpdateTime = 0; // last time the timer was updated in milliseconds

var score = 0;
var end = false;
var health = 10;

var backgroundMusic;
var eat;
var damage;
var gameOver;

var lastDamageTime = 0;


function preload() {
    loadfont = loadFont("fonts/Chubby Relief.ttf");
    animationobj = new animations();
    backgroundMusic = loadSound("sound/BackgroundMusic.mp3");
    damage = loadSound("sound/damage.mp3");
    eat = loadSound("sound/eat.mp3");
    gameOver = loadSound("sound/gameOver.mp3");
}
function setup() {
    createCanvas(800, 600);
    setInterval(animationtime, 100);
    animationobj.resizeanimation();

    for (var i = 0; i < 20; i++) {
        newCircles = new makeNewShape(random(0, 700), random(0, 500), random(20, 50), random(0, 255), random(0, 255), random(0, 255));
        circleArray.push(newCircles);
    }

    for (var i = 0; i < 20; i++) {
        newSquares = new makeNewShape(random(0, 700), random(0, 500), random(20, 50), 255, 0, 0);
        squareArray.push(newSquares);
    }

}


function animationtime() {

    if (moving) {
        walkIndex++;
        if (walkIndex >= animationobj.walkImages.length) {
            walkIndex = 0;
        }
    } else {
        idleIndex++;
        if (idleIndex >= animationobj.idleImages.length) {
            idleIndex = 0;
        }
    }
}


function draw() {
    background(200);

    if (millis() - lastUpdateTime >= 1000) {
        timer--;
        lastUpdateTime = millis();
    }

    // stop timer at 0
    if (timer < 0) {
        timer = 0;
        end = true;
    }
    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].drawCircle();
    }


    fill(0);
    textSize(32);
    //textFont(loadfont);
    text("Time: " + timer, 20, 40);
    text("Health: " + health, 20, 580);

    idleIndex++;

    if (idleIndex >= animationobj.idleImages.length) {
        idleIndex = 0;
    }
    moving = false;

    if (keyIsDown(LEFT_ARROW)) {
        zombieX -= walkingspeed;
        facingright = false;
        moving = true;
    }

    if (keyIsDown(RIGHT_ARROW)) {
        zombieX += walkingspeed;
        facingright = true;
        moving = true;
    }

    if (keyIsDown(UP_ARROW)) {
        zombieY -= walkingspeed;
        moving = true;
    }

    if (keyIsDown(DOWN_ARROW)) {
        zombieY += walkingspeed;
        moving = true;
    }
    let zombieWidth = animationobj.walkImages[0].width;
    let zombieHeight = animationobj.walkImages[0].height;

   for (var i = circleArray.length - 1; i >= 0; i--) {

    circleArray[i].drawCircle();

    if (circleArray[i].checkCollision(zombieX, zombieY, zombieWidth, zombieHeight)) {
        circleArray.splice(i, 1);
        score++;
        eatSound();
    }
   
        fill(0);
        textSize(32);
        //textFont(loadfont);
        text("Score: " + score, 20, 80); 

    for (var j = squareArray.length - 1; j >= 0; j--) {

    squareArray[j].drawSquare();

    /*if (squareArray[j].checkSquareCollision(zombieX, zombieY, zombieWidth, zombieHeight)) {
        health--;
        damageSound();
        if (health <= 0) {
            end = true;
            gameOverSound();
        }
    }
    } */
   if (squareArray[j].checkSquareCollision(zombieX, zombieY, zombieWidth, zombieHeight)) {

    if (millis() - lastDamageTime > 1000) { // 1 second cooldown
        health--;
        damageSound();
        if (health <= 0) {
            end = true;
            gameOverSound();
        }
        lastDamageTime = millis();
    }

}
}
    if (end == true) {
        fill(0);
        textSize(64);
        // textFont(loadfont);
        text("Game Over", 250, 300);
        checkCollision() == false;
    }
    //flip
    push();

    // Move to zombie position
    translate(zombieX, zombieY);

    // Flip if facing left
    if (!facingright) {
        scale(-1, 1);
    }

    // Get current frame
    let img;
    if (moving) {
        img = animationobj.walkImages[walkIndex];
    } else {
        img = animationobj.idleImages[idleIndex];
    }

    // Draw centered
    imageMode(CENTER);
    image(img, 0, 0);

    pop();
}

// Restore default mode
imageMode(CORNER);

function mousePressed() {
    backgroundMusic.play();
    backgroundMusic.setVolume(0.2);
    backgroundMusic.loop();
}

function damageSound() {
    damage.play();
    damage.setVolume(0.1);
}

function gameOverSound() {
    gameOver.play();
    gameOver.setVolume(0.2);
}

function eatSound() {
    eat.play();
    eat.setVolume(0.1);
}
}