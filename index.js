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
var newColors = generateRandomColors(level);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var header = document.querySelector("#header");
var reset = document.querySelector("#reset");
var pickedColor;
var easy = document.querySelector("#easy")
var medium = document.querySelector("#medium")
var hard = document.querySelector("#hard")

easy.addEventListener("click", function(){changeLevel(3)});
medium.addEventListener("click", function(){changeLevel(6)});
hard.addEventListener("click", function(){changeLevel(9)});
reset.addEventListener("click",function(){generateRandomColors()
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
        var rgb = document.querySelectorAll("#squares")
        for(var i = 0; i < level; i++){
          rgb[i].style.color = black;
        }
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
    // document.querySelector(".on").style.backgroundColor = black;
    // document.querySelectorAll(".off")[0].style.backgroundColor = black;
    // document.querySelectorAll(".off")[1].style.backgroundColor = black;
  }
  var container = document.querySelector("#container")
  var html =  "<div class='square'></div><div class='square'></div><div class='square'></div>"
  if(num === 3){
    level = 3;
    container.innerHTML = html;
    squares = document.querySelectorAll(".square");
    // medium.classList.remove("on")
    // medium.classList.add("off")
    // hard.classList.remove("on")
    // hard.classList.add("off")
    // easy.classList.add("on")
    // easy.classList.remove("off")
    assignColors();
    resetHeaderColor();
  }
  else if (num === 6){
    level = 6;
    container.innerHTML = html + html;
    squares = document.querySelectorAll(".square");
    // easy.classList.remove("on")
    // easy.classList.add("off")
    // hard.classList.remove("on")
    // hard.classList.add("off")
    // medium.classList.add("on")
    // medium.classList.remove("off")
    assignColors();
    resetHeaderColor();
  }
  else if (num === 9) {
    level = 9;
    container.innerHTML = html + html + html;
    squares = document.querySelectorAll(".square");
    // medium.classList.remove("on");
    // medium.classList.add("off");
    // easy.classList.remove("on");
    // easy.classList.add("off")
    // hard.classList.add("on");
    // hard.classList.remove("off")
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



//not used yet

function generateRandomColors(num){
  colors = []
  for(var i = 0; i < 9; i++){
    colors.push(randomColor())
  }
}

function randomColor(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g +", " + b +")";
}
