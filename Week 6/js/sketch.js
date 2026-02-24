

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
var walkingspeed = 5;



function preload() {
   animationobj = new animations();
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
        newSquares = new makeNewShape(random(0, 700), random(0, 500), random(20, 50), random(0, 255), random(0, 255), random(0, 255));
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
    let moving = false;
    //fill(250, 0, 0);
    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].drawCircle();
    }
    for (var i = 0; i < squareArray.length; i++) {
        squareArray[i].drawSquare();
    }

    idleIndex++;

    if (idleIndex >= animationobj.idleImages.length) {
        idleIndex = 0;
    }

     if (keyIsDown(LEFT_ARROW)) {
        zombieX -= walkingspeed;
        moving = true;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        zombieX += walkingspeed;
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
    if (moving) {
        image(animationobj.walkImages[walkIndex], zombieX, zombieY);
        walkIndex++;
    } else {
        image(animationobj.idleImages[idleIndex], zombieX, zombieY);
    }
if (walkIndex >= animationobj.walkImages.length) {
    walkIndex = 0;
}
}
