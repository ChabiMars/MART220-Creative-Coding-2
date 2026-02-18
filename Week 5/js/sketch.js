/* let frames = [];
let totalFrames = 15;
let folder = "images/sprites/zombie female/idle/";
let frameIndex = 0;

var idle1;
var count = 0;
var idleImages = [];

function preload() {
    idle1 = loadImage("images/sprites/zombie female/idle/Idle (1).png");
    for (var i = 0; i < 10; i++) {
    idleImages[i] = loadImage("assets/images/Idle (" + (i + 1) + ").png");
  }
    }


function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(0);
 
}
    */
//was going to use images for the food, but I couldn't figure out how to display them correctly, so I used circles for now.
var foodXarray = [];
var foodYarray = [];
var numberoffood = 3;

//animation variables
var count = 0;
var idleImages = [];

function preload() {
    for (var i = 0; i < 15; i++) {
        idleImages[i] = loadImage("images/sprites/zombie female/idle/Idle (" + (i + 1) + ").png");
    }
}
function setup() {
    createCanvas(800, 600);
    for (var i = 0; i < numberoffood; i++) {
        foodXarray[i] = random(0, 700);
        foodYarray[i] = random(0, 500);
    }
}

function draw() {
    background(200);
    fill(250, 0, 0);
    for (var i = 0; i < numberoffood; i++) {
        ellipse(foodXarray[i], foodYarray[i], 50, 50);
    }

    for (var i = 0; i < idleImages.length; i++) {
        idleImages[i].resize(0, 200);
    }
    image(idleImages[count], 0, 0);

    count++;
    if (count >= idleImages.length) {
        count = 0;

    }
}