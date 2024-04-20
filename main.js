img = "";
status = "";
objects = [];

function preload(){
    img = loadImage("dog_cat.jpg");
}

function setup(){
    canvas = createCanvas(380, 380);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw(){
    image(video, 0, 0, 640, 420);
   
    if(status != ""){
        for (i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status : Objects detected";

            fill("red");
            percent = floor(objects[i].confidence * 100);
            text (objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke("red");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}