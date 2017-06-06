var colors = [
  "rgb(255, 0, 0)",
  "rgb(250, 150, 0)",
  "rgb(250, 250, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 0, 255)",
  "rgb(125, 0, 255)"
];



var squares = document.querySelectorAll(".square");
var pickedColor = pickColor(colors);
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var newColors = generateRandomColors(6);
var header = document.querySelector("#header");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
    if( clickedColor === pickedColor){
      messageDisplay.textContent = "Correct";
      changeColors(clickedColor);
      header.style.backgroundColor = clickedColor;
      header.style.color = "rgb(50, 50, 50)";
      var rgb = document.querySelectorAll("span")
      for(var i = 0; i < rgb.length; i++){
        rgb[i].style.color = "rgb(50, 50, 50)";
      }
    }
    else {
      this.style.backgroundColor = "rgb(50, 50, 50)";
      messageDisplay.textContent = "Try Again";
    }
  });
}

function pickColor(arr){
  var random = Math.floor(Math.random() * colors.length);
  return arr[random];
}


function changeColors(color){
  for(var i = 0; i < squares.length; i++){
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
