let idlePaths = [];
let walkPaths = [];
let myAnimation;
let obstacles;
let score = 0;
let food;
let health = 5;
let newFood;
let particles = [];
let bullets = [];
let canShoot = true;
let shootCooldown = 0;
let playerX = 200;
let playerY = 200;


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

let f = new food.Sprite(random(50, 750), random(50, 550), 20);
f.shape = 'circle';
f.color = 'green';

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

    c.health = 3;
    c.hitCooldown = 0;
}
}


function update() {
    console.log("running");
    background(200); 
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
   let moving = false;

if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
    playerX += 3;
    myAnimation.updatePosition('forward');
    moving = true;
} 
if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
    playerX -= 3;
    myAnimation.updatePosition('reverse');
    moving = true;
} 
if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
    playerY -= 3;
    myAnimation.updatePosition('up');
    moving = true;
} 
if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
    playerY += 3;
    myAnimation.updatePosition('down');
    moving = true;
}

myAnimation.x = playerX;
myAnimation.y = playerY;

if (moving) {
    myAnimation.drawAnimation('walk');
} else {
    myAnimation.drawAnimation('idle');
}

myAnimation.x = playerX;
myAnimation.y = playerY;

     if (shootCooldown > 0) shootCooldown--; 
    if (keyIsDown(67) && canShoot && shootCooldown === 0) {
        shoot();
        canShoot = false;
        shootCooldown = 15;
    }
    if (!keyIsDown(67)) {
        canShoot = true;
    }

    for (let i = bullets.length - 1; i >= 0; i--) {
    let b = bullets[i];

    b.overlaps(obstacles, (bullet, o) => {

        for (let k = 0; k < 20; k++) {
            particles.push(new Particle(o.x, o.y));
        }

        o.health--;

        if (o.health <= 0) {
            o.remove();
        }

        bullet.remove();
        bullets.splice(i, 1);
        score++;
    });
}
// obstacles
myAnimation.currentAnimation.overlaps(obstacles, (player, o) => {
    if (o.hitCooldown > 0) return;

    score--;
    health--;

    o.health--;
    o.hitCooldown = 30;

    if (o.health <= 0) {
        o.remove();
    } else {
        o.x = random(50, 750);
        o.y = random(50, 550);
    }
});
// food
myAnimation.currentAnimation.overlaps(food, (player, f) => {
    f.remove();
    score++;
    health++;

    // spawn new food
    let newFood = new food.Sprite(
        random(50, 750),
        random(50, 550),
        20
    );
    newFood.shape = 'circle';
    newFood.color = 'green';
    newFood.collider = 'static';
});
for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].draw();

    if (particles[i].alpha <= 0) {
        particles.splice(i, 1);
    }
}
  for (let i = bullets.length - 1; i >= 0; i--) {
        if (!bullets[i].exists) bullets.splice(i, 1);
    }

    allSprites.draw();
}

function shoot() {
    let b = new Sprite(playerX, playerY, 10, 10);
    b.color = 'yellow';
    b.collider = 'none';
    b.vel.x = 5;
    bullets.push(b);
}