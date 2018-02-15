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

function changeLarge() {
    // console.log('hola')
    var textToChange = document.getElementsByClassName("coment").value;
    console.log(textToChange)
    textToChange.style.fontsize = "xx-large"
    
}

// $(document).ready(loadPage);