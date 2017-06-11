//variables

var colors = [
  "rgb(255, 0, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 0, 255)",
  "rgb(255, 150, 0)",
  "rgb(255, 255, 0)",
  "rgb(150, 0, 255)",
  "rgb(0, 255, 255)",
  "rgb(255, 0, 255)",
  "rgb(255, 255, 255)"
];
var black = "rgb(50, 50, 50)";
var white = "rgb(250, 250, 250)";
var level = 6;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var header = document.querySelector("#header");
var reset = document.querySelector("#reset");
var pickedColor;
var easy = document.querySelector("#easy")
var medium = document.querySelector("#medium")
var hard = document.querySelector("#hard")

//on page load

easy.addEventListener("click", function(){changeLevel(3);});
medium.addEventListener("click", function(){changeLevel(6);});
hard.addEventListener("click", function(){changeLevel(9);});
reset.addEventListener("click",function(){
  generateRandomColors();
  assignColors();})

assignColors();

// functions below

function assignColors(){
  pickedColor = pickColor()
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < level; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
      var clickedColor = this.style.backgroundColor;
      if( clickedColor === pickedColor){
        reset.classList.remove("hidden")
        messageDisplay.textContent = "Correct";
        changeColors(clickedColor);
        header.style.backgroundColor = clickedColor;
        header.style.color = black;
      }
      else {
        this.style.backgroundColor = black;
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function changeLevel(num){
  function resetHeaderColor(){
    document.querySelector("#header").style.backgroundColor = black
    document.querySelector("#header").style.color = white;
  }
  var container = document.querySelector("#container")
  var html =  "<div class='row'><div class='square'></div><div class='square'></div><div class='square'></div></div>"
  if(num === 3){
    level = 3;
    container.innerHTML = html;
    squares = document.querySelectorAll(".square");
    assignColors();
    resetHeaderColor();
  }
  else if (num === 6){
    level = 6;
    container.innerHTML = html + html;
    squares = document.querySelectorAll(".square");
    assignColors();
    resetHeaderColor();
  }
  else if (num === 9) {
    level = 9;
    container.innerHTML = html + html + html;
    squares = document.querySelectorAll(".square");
    assignColors();
    resetHeaderColor();
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * level);
  return colors[random];
}


function changeColors(color){
  for(var i = 0; i < level; i++){
    squares[i].style.backgroundColor = color;
  }
}

function generateRandomColors(num){
  colors = []
  for(var i = 0; i < 9; i++){
    colors.push(randomColor())
  }
  reset.classList.add("hidden")
  document.querySelector("#header").style.backgroundColor = black
  document.querySelector("#header").style.color = white;
}

function randomColor(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g +", " + b +")";
}
