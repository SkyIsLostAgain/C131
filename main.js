img = "";

function preload(){
    img = loadImage("dog_cat.jpg");
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("red");
    text("Dog", 45, 74);
    noFill();
    stroke("red");
    rect(30, 60, 450, 350);

    fill("red");
    noFill();
    stroke("red");
    rect(30, 60, 450, 350);
    text("Cat", 80, 90);
    rect(50, 400, 380, 69);
}