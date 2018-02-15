var textArea = document.getElementById("user_comment");
textArea.addEventListener('keyup', paintText)

// function loadPage() {
    //     $('#user_comment').keyup(paintText)
    // }
    
    // funcion de preview
function paintText() {
    var $textInput = $('#user_comment');
    var $inputVal = $textInput.val();
        // console.log($inputVal)
   $('.coment').html($inputVal)
}

// Botón para hacer más grande la letra
var largeBtn = document.getElementById("large");
    // console.log(largeBtn)
largeBtn.addEventListener("click", changeLarge)
// variable global que trae el texto a modificar con los botones
var textToChange = document.getElementsByClassName("coment")[0];
function changeLarge() {
    // console.log('hola')
    // con clase me regresa un array, tendria que indicar la posición que quiero
    console.log(textToChange)
    textToChange.style.fontSize = "xx-large";
}

// Botón letra medium
var mediumBtn = document.getElementById("medium");

mediumBtn.addEventListener("click", changeMedium);

function changeMedium () {
    // console.log('hola')
    textToChange.style.fontSize = "medium";
}

// Botón letra pequeña
var smallBtn = document.getElementById("small");

smallBtn.addEventListener("click", changeSmall);

function changeSmall() {
    textToChange.style.fontSize = "x-small"
}

// Botón color de texto
var colorTextBtn = document.getElementById("color_text");

colorTextBtn.addEventListener("click", changeColorText);

function changeColorText() {
    var userColor = prompt('Dame un color en hexadecimal')
    textToChange.style.color = "#" + userColor;
}

// Botón color de fondo
var backColorBtn = document.getElementById("back_color");

backColorBtn.addEventListener("click", changeBackColor);

function changeBackColor() {
    var userColor = prompt('Dame un color en hexadecimal')
    textToChange.style.backgroundColor = "#" + userColor;
}

// Botón texto izquierda
var leftTextBtn = document.getElementById("left");

leftTextBtn.addEventListener("click", changeTextLeft);

function changeTextLeft() {
    textToChange.style.textAlign = "left";
}

// Botón texto centro
var centerTextBtn = document.getElementById("center");

centerTextBtn.addEventListener("click", changeTextCenter);

function changeTextCenter() {
    textToChange.style.textAlign = "center";
}

// Botón texto derecha
var rightTextBtn = document.getElementById("right");

rightTextBtn.addEventListener("click", changeTextRight);

function changeTextRight() {
    textToChange.style.textAlign = "right";
}
// $(document).ready(loadPage);