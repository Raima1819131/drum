var crash= new Audio("sounds/crash.mp3");
var tom1= new Audio("sounds/tom-1.mp3");
var tom2= new Audio("sounds/tom-2.mp3");
var tom3= new Audio("sounds/tom-3.mp3");
var tom4= new Audio("sounds/tom-4.mp3");
var kick= new Audio("sounds/kick-bass.mp3");
var snare= new Audio("sounds/snare.mp3");
function playsound(option){
    if(option==='crash'){
        crash.play();
    }
    else if(option==='tom1'){
        tom1.play();
    }
    else if(option==='tom2'){
        tom2.play();
    }
    else if(option==='tom3'){
        tom3.play();
    }
    else if(option==='tom4'){
        tom4.play();
    }
    else if(option==='kick'){
        kick.play();
    }
    else if(option==='snare'){
        snare.play();
    }
}