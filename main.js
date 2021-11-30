Status = "";
input = "";
;
function setup(){
   canvas = createCanvas(640,420);
   canvas.center();

   video = createCapture(VIDEO);
   video.hide();
}

function draw(){
  image(video,0,0,640,420);
}

function start(){
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
input = document.getElementById("input").value;
console.log(input);
}

function modelLoaded(){
  console.log("Model Loaded!");
  Status = true;
}