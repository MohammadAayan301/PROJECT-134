Status = "";
object = [];

function preload(){
    
}


function setup() {
  
}

function modelLoaded() {
    console.log("MODEL LOADED!");
    Status = true;
    
}


function gotresult(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        object = results;
    }
}

function draw() {
    image(video, 0, 0, 380, 380);
    if(image = true){
        document.getElementById("status").innerHTML="OBJECT DETECTED";
        document.getElementById("number_objects").innerHTML="BABY FOUND";
    }
    else{
        document.getElementById("status").innerHTML="OBJECT NOT DETECTED";
        document.getElementById("number_objects").innerHTML="BABY NOT FOUND";
        play("alarm_ring.mp3");
    }
}