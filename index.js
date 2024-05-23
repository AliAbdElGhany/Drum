var drumNum = document.querySelectorAll(".drum").length;
var tom1 = new Audio("sounds/tom-1.mp3");
var tom2 = new Audio("sounds/tom-2.mp3");
var tom3 = new Audio("sounds/tom-3.mp3");
var tom4 = new Audio("sounds/tom-4.mp3");
var crash = new Audio("sounds/crash.mp3");
var kick = new Audio("sounds/kick-bass.mp3");
var snare = new Audio("sounds/snare.mp3");



for (let i = 0; i < drumNum ; i++) {
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        animation(buttonInnerHTML);
    })    
    
}

for (let i = 0; i < drumNum; i++) {
  document.addEventListener("keydown",function(event){
    var key = (event.key);
    makeSound(event.key);
    animation(event.key);

  })
  
  
}

function makeSound(input){
  switch (input) {
    case "w":
      tom1.play();
      break;
    case "a":
      tom2.play();
      break;
    case "s":
      tom3.play();
      break;
    case "d":
      tom4.play();
      break;
    case "j":
      crash.play();
      break;
    case "k":
      kick.play();
      break;
    case "l":
      snare.play();
      break;

    default:
      console.log(input)
      break;
  }
}

function animation(input){
  var activeKey = document.querySelector("." + input);
  activeKey.classList.add("pressed");

  setTimeout(function(){
    activeKey.classList.remove("pressed");
  }, 100);
}