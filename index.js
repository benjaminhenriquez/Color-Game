var colors = [
  "rgb(255, 0, 0)",
  "rgb(250, 125, 0)",
  "rgb(250, 225, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 0, 255)",
  "rgb(175, 0, 255)"
];


var squares = document.querySelectorAll(".square");

var pickedColor = colors[1];
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
    if( clickedColor === pickedColor){
      alert("Correct");
    }
    else {
      this.style.backgroundColor = "#232323"
    }
  });
}
