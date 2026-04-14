let boxes = [];
let cones = [];

function preload() {

}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

    for (let i = 0; i < 5; i++) {
        cones.push({
            x: -width / 2 + 50 + i * 50,
            y: height / 2 - 50,
            z: 0
        });
    }
}



function draw() {
    background('#0f279c');
  
    scale(0.5);
    if (frameCount % 15 === 0) {
        boxes = [];
        for (let i = 0; i < 50; i++) {
            boxes.push({
                x: random(-700, 700),
                y: random(-700, 700),
                z: random(-700, 700)
            });
        }
    }

    for (let b of boxes) {
        drawBox(20, b.x, b.y, b.z);
    }

    drawMoon();

    drawBackground();

    //drawText();

    for (let c of cones) {
        scale(2);
        translate(300, -100);
        drawCone(c.x, c.y, c.z);

    }
  fill('#fff990');
    textSize(36);
    text("Let's go!", 10, 50);
}


function drawBox(size, translateX, translateY, translateZ, img) {
    push();
    fill('#fff990');
    translate(translateX, translateY, translateZ);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(size);
    pop();

}

function drawMoon() {
    push();
    fill('#fff990');
    scale(2);
    translate(300, -150);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    sphere(40, 60, 40);
    ambientMaterial('#fff1c5');
    pop();
}

function drawCone(x, y, z) {
    push();
    fill('#064527');
    translate(x, y, z);
    rotateX(PI);
    rotateY(frameCount * 0.02);
    rotateZ(frameCount * 0.00001);
    cone(40, 70);
    pop();
}

function drawBackground() {
    push();
    fill('#135a1f');
    translate(-1300, 700, -500);
    rotateZ(PI / 6);
    rotateY(frameCount * 0.01);
    ellipsoid(1000, 600, 700);
    pop();

    push();
    fill('#237c32');
    translate(1300, 700, -500);
    rotateZ(-PI / 6);
    rotateX(frameCount * 0.01);
    ellipsoid(1200, 400, 700);
    pop();
}

/*function drawText() {
    push();
    resetMatrix();
    fill('#fff990');
    translate(0, 0, 0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text('The Stars in the Hills by Reese Highman', width / 2, 40);
    pop();
} */

