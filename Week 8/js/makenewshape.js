class makeNewShape {
    //variables
    x;
    y;
    d;
    r;
    g;
    b;

    squareX;
    squareY;
    squareD;
    squareG;
    squareB;

    zombieCenterX;
    zombieCenterY;
    zombieX;
    zombieY;
    size;
    score;
    health;


    constructor(x, y, d, r, g, b) {
        this.x = x;
        this.y = y;
        this.d = d;
        this.r = r;
        this.g = g;
        this.b = b;

        this.squareX = x;
        this.squareY = y;
        this.squareD = d;
        this.squareG = g;
        this.squareB = b;

        this.health = 10;

    }

//make the circles
drawCircle() {
    fill(this.r, this.g, this.b);
    circle(this.x, this.y, this.d);
}
drawSquare() {
    fill(this.squareG, this.squareB, this.squareB);
    rect(this.squareX, this.squareY, this.squareD, this.squareD);
}
checkCollision(zombieX, zombieY, zombieWidth, zombieHeight) {

    let zombieCenterX = zombieX + zombieWidth / 2;
    let zombieCenterY = zombieY + zombieHeight / 2;

    let distance = dist(zombieCenterX, zombieCenterY, this.x, this.y)
    /*let squareDistance = dist(zombieCenterX, zombieCenterY, this.squareX, this.squareY); */

    if (distance < this.d / 2) {
    this.score++;
    return true;
    }
}

checkSquareCollision(zombieX, zombieY, zombieWidth, zombieHeight) {

    let zombieCenterX = zombieX + zombieWidth / 2;
    let zombieCenterY = zombieY + zombieHeight / 2;

    let squareDistance = dist(zombieCenterX, zombieCenterY, this.squareX, this.squareY);

    if (squareDistance < this.squareD / 2) {
        this.health--;
        return true;
    }

    return false;
}



   /* if (squareDistance < this.squareD / 2) {
        return true;
        this.health--;
    }

    return false; 
} */
}