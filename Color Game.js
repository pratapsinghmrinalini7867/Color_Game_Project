var numsquares = 6 ;
var colors = generateRandomColors(numsquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var shapebtn = document.querySelector("#shape");
var issquare = true;

function generatecolors(numsquares){
    //generate new colors
    colors = generateRandomColors(numsquares);
    //pick a new random colors
    pickedColor = pickColor();
    //change colorDisplay to Match Picked color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for(var i = 0;i< squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    reset.textContent = "NEW COLORS";
    messageDisplay.textContent = "";
}

shapebtn.addEventListener("click" , function(){
    if(issquare){
        for(var i = 0;i<squares.length ;i++){
            squares[i].classList.remove("square");
        }
        for(var i = 0;i<squares.length ;i++){
            squares[i].classList.add("shape");
        }
    } else{
        for(var i = 0;i<squares.length ;i++){
            squares[i].classList.remove("shape");
        }
        for(var i = 0;i<squares.length ;i++){
            squares[i].classList.add("square");
        }
    }
    if(easy){
        generatecolors(3);
    } else{
        generatecolors(6);
    }
    issquare = !issquare;
});

reset.addEventListener("click", function(){
    if(easy){
        generatecolors(3);   
    } else{
        generatecolors(6);
    }
});

easy.addEventListener("click", function(){
    easy.classList.add("selected");
    hard.classList.remove("selected");
    generatecolors(3);
  //last 3 colors
     for(var i = 3;i<squares.length; i++){
        squares[i].style.display = "none";
    }
});

hard.addEventListener("click", function(){
    easy.classList.remove("selected");
    hard.classList.add("selected");
    //generate new colors
    generatecolors(6);
      //change colors of squares
     for(var i = 0;i< squares.length; i++){
         squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
     }
 });

colorDisplay.textContent = pickedColor;

for(var i=0; i< squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    //add click listener to squares
    squares[i].addEventListener("click" , function(){
        var clickedColor = this.style.backgroundColor;
        // compare color to picked color
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            reset.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor ; 
        }else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}
function changeColors(color){
    //loop through all the squares
    for(var i=0 ; i<squares.length ; i++){
        //change all colors to match the given color
        squares[i].style.backgroundColor = color;
    }
}
function pickColor(){
   var random = Math.floor(Math.random() * colors.length) ;
   return colors[random];
}
function generateRandomColors(num){
    //make an array
    var arr = [];
    //add num random colors
    for(var i=0 ; i<num;i++){
        //get random color and push into array
        arr.push(randomColor());
    }
    return arr;
}
function randomColor(){
    //pick a "red" from 0-255
    var r = Math.floor(Math.random()* 256);
    //pick "green" from 0-255
    var g = Math.floor(Math.random()* 256);
    //pick "blue" from 0-255
    var b = Math.floor(Math.random()* 256);
    return "rgb(" + r + ", " + g + ", " + b + ")" ;
}