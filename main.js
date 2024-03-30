img = "";

function preload(){
    img = loadImage("dog_cat.jpg");
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("red");
    text("Dog", 45, 74);
    noFill();
    stroke("red");
    rect(30, 60, 450, 350);

    fill("red");
    text("Cat", 320, 120);
    noFill();
    stroke("red");
    rect(300, 90, 270, 320);
}