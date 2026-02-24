class animations {
    idleImages = [];
    walkImages = [];

    constructor() {
        for (var i = 0; i < 15; i++) {
        this.idleImages[i] = loadImage("images/sprites/zombie female/idle/Idle (" + (i + 1) + ").png");
        console.log("AAAAAAAAA");
        }
        for (var i = 0; i < 10; i++) {
        this.walkImages[i] = loadImage("images/sprites/zombie female/walk/Walk (" + (i + 1) + ").png");
        console.log("BBBBBBBBB");
    }
}
    

    
resizeanimation() {
    for (var i = 0; i < this.idleImages.length; i++) {
        this.idleImages[i].resize(0, 200); 
    }
    for (var i = 0; i < this.walkImages.length; i++) {
        this.walkImages[i].resize(0, 200);
}

}

}
