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

    text("Cat", 55, 80);
    rect(50, 40, 250, 300);
}