function loadPage() {
    $('#user_comment').keyup(paintText)
}

function paintText() {
    var $textInput = $('#user_comment');
    var $inputVal = $textInput.val();
    $('.coment').html.$inputVal
}
$(document).ready(loadPage);