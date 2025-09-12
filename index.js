// 🔹 Enable mouse/touch clicks on buttons
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonKey = this.classList[0]; // first class is the key (f, g, h, etc.)
    makesound(buttonKey);
    buttona(buttonKey);
  });
}

// 🔹 Enable keyboard presses
document.addEventListener("keypress", function (event) {
  makesound(event.key);
  buttona(event.key);
});

// 🔹 Play correct sound
function makesound(key) {
  switch (key) {
    case "f":
      new Audio("sound/crash.wav").play();
      break;

    case "g":
      new Audio("sound/tom.wav").play();
      break;

    case "j":
      new Audio("sound/clap.wav").play();
      break;

    case "h":
      new Audio("sound/rim.wav").play();
      break;

    case "c":
    case "k": // extra key for kick
      new Audio("sound/kick.wav").play();
      break;

    case "v":
      new Audio("sound/snare.wav").play();
      break;

    case "b":
      new Audio("sound/ohat.wav").play();
      break;

    case "n":
      new Audio("sound/chat.wav").play();
      break;
  }
}

// 🔹 Button animation (flash effect)
function buttona(currentKey) {
  var activeb = document.querySelector("." + currentKey);
  if (!activeb) return; // avoid errors for wrong keys

  activeb.classList.add("pressed");
  setTimeout(function () {
    activeb.classList.remove("pressed");
  }, 100);
}
