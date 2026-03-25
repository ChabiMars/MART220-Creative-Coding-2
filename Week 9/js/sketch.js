let idlePaths = [];
let walkPaths = [];
let myAnimation;
let obstacles;
let score = 0;
let food;
let health = 5;

function preload() {
    for (let i = 0; i < 15; i++) {
        idlePaths[i] = "images/sprites/zombie female/idle/Idle (" + (i + 1) + ").png";
    }
    for (let j = 0; j < 10; j++) {
        walkPaths[j] = "images/sprites/zombie female/Walk/Walk (" + (j + 1) + ").png";
    }
}

function setup() {
    new Canvas(800, 600);

    myAnimation = new animationImage(200, 200, 200, 200);
    myAnimation.loadAnimation('idle', idlePaths);
    myAnimation.loadAnimation('walk', walkPaths);
    myAnimation.debug = true;

    food = new Group();
    for (let i = 0; i < 20; i++) {
        let f = new food.Sprite(
            random(50, 750),
            random(50, 550),
            20
        ); 
    f.shape = 'circle';
    f.color = 'green';
    f.collider = 'static';
    }

    obstacles = new Group();
    for (let i = 0; i < 10; i++) {
        let c = new obstacles.Sprite(
            random(50, 750),
            random(50, 550),
            40
        ); 
    c.shape = 'circle';
    c.color = 'red';
    c.collider = 'static';
    } 
}


function update() {
    background(200); // clearing previous frames
    fill(0);
    textSize(20);
    text("Score: " + score, 20, 30);

    textSize(15);
    text("Health: " + health, 20, 50);

  if (score >= 10) {
    textSize(50);
    fill('green');
    text("You Win!", 300, 300);
    noLoop();
}


    // movement controls
    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) { // D key also
        myAnimation.updatePosition('forward');
        myAnimation.drawAnimation('walk');
    } else if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) { // A key also
        myAnimation.updatePosition('reverse');
        myAnimation.drawAnimation('walk');
    } else if (keyIsDown(UP_ARROW) || keyIsDown(87)) { // W key also
        myAnimation.updatePosition('up');
        myAnimation.drawAnimation('walk');
    } else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) { // S key also
        myAnimation.updatePosition('down');
        myAnimation.drawAnimation('walk');
    } else {
        myAnimation.drawAnimation('idle');
    }

// food
myAnimation.currentAnimation.overlaps(food, (player, f) => {
    f.remove();   // remove that specific food
    score++;      // add point
    health++;     // increase health
});

// obstacles
myAnimation.currentAnimation.overlaps(obstacles, (player, o) => {
    o.remove();   // remove that specific obstacle
    score--;      // lose point
    health--;     // decrease health
});

    allSprites.draw(); // Render all sprites
}
