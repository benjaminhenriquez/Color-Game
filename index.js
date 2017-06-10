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

var level = 6;
var newColors = generateRandomColors(level);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var header = document.querySelector("#header");
var pickedColor;




var easy = document.querySelector("#easy")
  easy.addEventListener("click", function(){changeLevel(3)});
var medium = document.querySelector("#medium")
  medium.addEventListener("click", function(){changeLevel(6)});
var hard = document.querySelector("#hard")
  hard.addEventListener("click", function(){changeLevel(9)});



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
        messageDisplay.textContent = "Correct";
        changeColors(clickedColor);
        document.querySelector(".on").style.backgroundColor = pickedColor;
        document.querySelector(".R").style.color = "rgb(50, 50, 50)";
        document.querySelector(".G").style.color = "rgb(50, 50, 50)";
        document.querySelector(".B").style.color = "rgb(50, 50, 50)";
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
  function resetHeaderColor(){
    document.querySelector("#header").style.backgroundColor = "rgb(50, 50, 50)"
    document.querySelector("#header").style.color = "rgb(250, 250, 250)";
    document.querySelector(".on").style.backgroundColor = "rgb(50, 50, 50)";
    document.querySelectorAll(".off")[0].style.backgroundColor = "rgb(240, 240, 240)";
    document.querySelectorAll(".off")[1].style.backgroundColor = "rgb(240, 240, 240)";
    document.querySelector(".R").style.color = "rgb(255, 0, 0)";
    document.querySelector(".G").style.color = "rgb(0, 255, 0)";
    document.querySelector(".B").style.color = "rgb(0, 0, 255)";
  }
  var container = document.querySelector("#container")
  var html =  "<div class='square'></div><div class='square'></div><div class='square'></div>"
  if(num === 3){
    level = 3;
    container.innerHTML = html;
    squares = document.querySelectorAll(".square");
    medium.classList.remove("on")
    medium.classList.add("off")
    hard.classList.remove("on")
    hard.classList.add("off")
    easy.classList.add("on")
    easy.classList.remove("off")
    assignColors();
    resetHeaderColor();
  }
  else if (num === 6){
    level = 6;
    container.innerHTML = html + html;
    squares = document.querySelectorAll(".square");
    easy.classList.remove("on")
    easy.classList.add("off")
    hard.classList.remove("on")
    hard.classList.add("off")
    medium.classList.add("on")
    medium.classList.remove("off")
    assignColors();
    resetHeaderColor();
  }
  else if (num === 9) {
    level = 9;
    container.innerHTML = html + html + html;
    squares = document.querySelectorAll(".square");
    medium.classList.remove("on");
    medium.classList.add("off");
    easy.classList.remove("on");
    easy.classList.add("off")
    hard.classList.add("on");
    hard.classList.remove("off")
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
