function setup()
{
    createCanvas(600,600)
}

function draw()
{
background(60,70,120);
// make the coordinates show up on the canvas
fill (200);
textSize(20);
text("X: " + mouseX + " Y: " + mouseY, 20, 30);
// the moon
fill (180, 130, 0);
noStroke();
circle (459, 101,50);
fill(60,70,120);
circle (466, 90, 40);
// back mountains
fill(30,120,50);
triangle(-40,400, 118,256, 200,400);
triangle(126,400, 248,221, 365,400);
triangle(331,400, 386,271, 478,400);
triangle(446,450, 500,278, 600,450);
triangle(538,450, 572,320, 630,450)

// front mountains
fill(50,130,70)
triangle(260,450, 334,315, 441,450);
triangle(370,450, 440,340, 516,450);
triangle(430,450, 545,370, 680,450);
fill(60,150,70)
triangle(-60,450, 37,300, 140,450);
triangle(60,450, 147,355, 260,450);
triangle(168,450, 228,336, 334,450);

//foreground
rect (0,450,600,150);

//wolf
fill(100);
triangle (158,520, 312,263, 348,520);
quad(260,349, 291,247, 350,270, 327,382);
//head
triangle (255,230, 393,182, 350, 278);
triangle (286,253, 226,224, 300,213);
triangle (290,230, 244,264, 308,274);
//tail
quad(164,515, 92,447,62,320, 145,410);
//details
fill(115);
rect(328,412, 25, 120);
rect(300,412, 25, 120);
circle (215,500,100);
rect (212,530,100,20);
fill(130);
ellipse (320,375, 90, 110);
triangle(92,447, 62,320, 145,410);
// eyes
fill(0);
circle(326,233,15)
//nose
fill(200,120,80);
circle(390,180,15);


}




