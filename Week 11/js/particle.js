class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = random(-3, 3);
        this.vy = random(-3, 3);
        this.alpha = 255;
        this.size = random(4, 8);
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 5;
    }

    draw() {
        noStroke();
        fill(255, 100, 0, this.alpha);
        circle(this.x, this.y, this.size);
    }
}
