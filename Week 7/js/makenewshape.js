class makeNewShape {
    //variables
    x;
    y;
    d;
    r;
    g;
    b;

    zombieCenterX;
    zombieCenterY;
    zombieX;
    zombieY;
    size;
    score;


    constructor(x, y, d, r, g, b) {
        this.x = x;
        this.y = y;
        this.d = d;
        this.r = r;
        this.g = g;
        this.b = b;

    }

//make the circles
drawCircle() {
    fill(this.r, this.g, this.b);
    circle(this.x, this.y, this.d);
}
drawSquare() {
    fill(this.r, this.g, this.b);
    rect(this.x, this.y, this.d, this.d);
}
checkCollision(zombieX, zombieY, zombieWidth, zombieHeight) {

    let zombieCenterX = zombieX + zombieWidth / 2;
    let zombieCenterY = zombieY + zombieHeight / 2;

    let distance = dist(zombieCenterX, zombieCenterY, this.x, this.y)

    if (distance < this.d / 2) {
        return true;
        this.score++;
    }

    return false;
}
}