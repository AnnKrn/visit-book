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

// $(document).ready(loadPage);