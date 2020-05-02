var colorNum = 6;
var colors = generateRandomColor(colorNum);
var squares = document.querySelectorAll(".square");
var displayedcolor = document.querySelector(".displayedcolor");
var pickedcolor = pickcolor();
var message = document.getElementById("message");
var resetbtn = document.querySelector(".newcolors");
var easybtn = document.querySelector("#easy");
var hardbtn = document.getElementById("hard");

displayedcolor.textContent = pickedcolor;



// Easy  function
function easymode() {
    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");
    colorNum = 3;
    //generate new random colors
    colors = generateRandomColor(colorNum);
    //pick a random color from the array
    pickedcolor = pickcolor();
    //Display picked color in displaycolor
    displayedcolor.textContent = pickedcolor;
    //change color of squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i]
        } else {
            squares[i].style.display = "none";
        }
    }

    //Delete the message
    message.textContent = "";
    //CHange text content of new buton
    resetbtn.textContent = "New Colors"



}
//easy mode event listener
easybtn.addEventListener("click", function () {
    easymode();
});

//Hard mode function
function hardmode() {
    hardbtn.classList.add("selected");
    easybtn.classList.remove("selected");
    colorNum = 6;
    //generate new random colors
    colors = generateRandomColor(colorNum);
    //pick a random color from the array
    pickedcolor = pickcolor();
    //Display picked color in displaycolor
    displayedcolor.textContent = pickedcolor;
    //change color of squares
    for (var i = 0; i < squares.length; i++) {

        squares[i].style.backgroundColor = colors[i]
        //Unhide the last three squares by changing display to block
        squares[i].style.display = "block";
        //Delete the message
        message.textContent = "";
        //CHange text content of new buton
        resetbtn.textContent = "New Colors"

    }

}
//Hardbutton event listener
hardbtn.addEventListener("click", function () {
    hardmode();
});






for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    //adding click event 
    squares[i].addEventListener("click", function () {
        var clickedcolor = this.style.backgroundColor;

        //checking if given color matches clicked color
        if (pickedcolor === clickedcolor) {
            changeColor(clickedcolor);
            message.textContent = "You Won";
            resetbtn.textContent = "Play again?"
        } else {
            this.style.backgroundColor = "rgb(0, 0, 0)";
            message.textContent = "Try again!";
        }
    });

}



//change color function
function changeColor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

//Generate Random color array and push into array

function generateRandomColor(num) {
    //add an array
    var arr = []
    //repeat num times
    for (var i = 0; i < num; i++) {
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return array
    return arr;
}

//create random rgb random color
function randomColor() {
    //pick a "red" from 0-255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue from 0-255"
    var b = Math.floor(Math.random() * 256);
    //include in rgb() formate
    var randomnum = "rgb(" + r + ", " + g + ", " + b + ")";
    return randomnum;
}



//pick color

function pickcolor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];

}

//reset function
function reset() {

    //generate new random colors
    colors = generateRandomColor(colorNum);
    //pick a random color from the array
    pickedcolor = pickcolor();
    //Display picked color in displaycolor
    displayedcolor.textContent = pickedcolor;
    //change color of squares
    for (var i = 0; i < squares.length; i++) {

        squares[i].style.backgroundColor = colors[i]
        //Unhide the last three squares by changing display to block
        // squares[i].style.display = "block";}
    }
    //Delete the message
    message.textContent = "";
    //CHange text content of new buton
    resetbtn.textContent = "New Colors"


}

//Reset eventlistener
resetbtn.addEventListener("click", function () {
    reset();

});