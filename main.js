objects = [];
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

  if(Status != ""){
    objectDetector.detect(video,gotResults);   

    for(i = 0; i < objects.length ; i++){
        document.getElementById("status").innerHTML = "Status : Objects Detected";
        

        fill("#fc0303");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%" ,objects[i].x+20,objects[i].y+20);
        noFill();
        stroke("#fc0303");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);

        if(objects[i].label == input){
           document.getElementById("object_status").innerHTML = objects[i].label+" Detected";
           var synth = window.speechSynthesis;
           var utterThis = new SpeechSynthesisUtterance(objects[i].label);
           synth.speak(utterThis);
          
        }
       else{
           document.getElementById("object_status").innerHTML = "Object Not Detected";
           
        
       }
 }
}
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

function gotResults(error,results){
  if(error){
     console.error(error);
  }
  else{
     console.log(results);
     objects = results;
  }
  }