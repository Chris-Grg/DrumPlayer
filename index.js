var noOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfDrumButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}
//Detecting button press
function handleClick() {
  buttonInnerhtml = this.innerHTML;
  makeSound(buttonInnerhtml);
}
//Detecting keyboard press

document.addEventListener("keydown", function (event) {
  makeSound(event.key, event);
});
function changeBgColor(key) {
  document.getElementsByClassName(key)[0].classList.add("selected");
  setTimeout(function () {
    document.getElementsByClassName(key)[0].classList.remove("selected");
  }, 100);
}

function makeSound(key, event) {
  switch (key) {
    case "w":
      var audio = new Audio("./sounds/tom-1.mp3");
      changeBgColor(key);
      break;
    case "a":
      var audio = new Audio("./sounds/tom-2.mp3");
      changeBgColor(key);
      break;
    case "s":
      var audio = new Audio("./sounds/tom-3.mp3");
      changeBgColor(key);

      break;
    case "d":
      var audio = new Audio("./sounds/tom-4.mp3");
      changeBgColor(key);

      break;
    case "j":
      var audio = new Audio("./sounds/crash.mp3");
      changeBgColor(key);

      break;
    case "k":
      var audio = new Audio("./sounds/kick-bass.mp3");
      changeBgColor(key);

      break;
    case "l":
      var audio = new Audio("./sounds/snare.mp3");
      changeBgColor(key);

      break;
    default:
      break;
  }

  audio.play();
}
