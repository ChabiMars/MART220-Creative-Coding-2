class makeNewShape {
    //variables
    x;
    y;
    d;
    r;
    g;
    b;


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
}