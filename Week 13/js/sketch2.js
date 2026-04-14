/* "Monk Character" (https://skfb.ly/69V9t) by Inuciian is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/). */

let cubes = [];

function preload() {
monk = loadModel('objects/monk.obj', 'objects/monk.mtl');
newfont = loadFont('fonts/Bull Circus.otf');
}

function setup() {
    createCanvas(1200, 700, WEBGL);

}

function draw() {
    background('#7b75d0');

    for (let c of cubes) {
    push();
    translate(c.x, c.y, c.z);
    fill('#fff4ce');
    box(c.size);
    pop();
}
    //monk
    push();
    scale(170);
    translate(0, 1, 0);
    rotateZ(PI);
    normalMaterial();
    model(monk);
    pop();

    push();
    translate(0, -250, 0);
    fill(255);
    textSize(60);
    textAlign(CENTER);
    textFont(newfont);
    text("Wizard", 0, 0);
    pop();

    push();
    translate(0, -200, 0);
    fill(255);
    textSize(30);
    textAlign(CENTER);
    textFont(newfont);
    text("by Reese Highman", 0, 0);

    //square
    push();
    fill('#ea4b4b');
    rotateY(frameCount * 0.02);
    translate(200, 0, 0);
    rotateX(PI / 4);
    box(30);
    pop();

    //sphere
    push();
    fill('#4b7dea');
    rotateX(frameCount * 0.05);
    translate(0, -200, 0);
    rotateY(PI / 4);
    sphere(20);
    pop();

    //cone
    push();
    fill('#4beaa8');
    rotateZ(frameCount * 0.1);
    translate(-200, 0, 0);
    rotateX(PI / 4);
    cone(20, 40);
    pop();

}

function mousePressed() {
    let cube = {
        x: random(-400, 400),
        y: random(-400, 400),
        z: random(-400, 400),
        size: random(20, 60)
    };
    
    cubes.push(cube);
}