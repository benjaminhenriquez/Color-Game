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



var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var level = 6;
var newColors = generateRandomColors(level);
var header = document.querySelector("#header");


document.querySelector("#easy").addEventListener("click", changeLevel(3));
document.querySelector("#medium").addEventListener("click", changeLevel(6));
document.querySelector("#hard").addEventListener("click", changeLevel(9));

colorDisplay.textContent = pickedColor;

assignColors();

function assignColors(){
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
      var clickedColor = this.style.backgroundColor;
      if( clickedColor === pickedColor){
        messageDisplay.textContent = "Correct";
        changeColors(clickedColor);
        header.style.backgroundColor = clickedColor;
        header.style.color = "rgb(50, 50, 50)";
        var rgb = document.querySelectorAll("#squares")
        for(var i = 0; i < level; i++){
          rgb[i].style.color = "rgb(50, 50, 50)";
        }
      }
      else {
        this.style.backgroundColor = "rgb(50, 50, 50)";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function changeLevel(num){
  if(num === 3){
    level = 3;
    document.querySelector("#container").innerHTML = "<div class='square'></div><div class='square'></div><div class='square'></div>";
    squares = document.querySelectorAll(".square");
    assignColors();
  }
  else if (num === 6){
    level = 6;
    document.querySelector("#container").innerHTML = "<div class='square'></div><div class='square'></div><div class='square'></div><div class='square'></div><div class='square'></div><div class='square'></div>";
    squares = document.querySelectorAll(".square");
    assignColors();
  }
  else if (num === 9) {
    level = 9;
    document.querySelector("#container").innerHTML = "<div class='square'></div><div class='square'></div><div class='square'></div><div class='square'></div><div class='square'></div><div class='square'></div><div class='square'></div><div class='square'></div><div class='square'></div>";
    squares = document.querySelectorAll(".square");
    assignColors();
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
  var arr = []
  for(var i = 0; i < num; i++){
    arr.push(randomColor())
  }
}

function randomColor(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g +", " + b +")";
}
