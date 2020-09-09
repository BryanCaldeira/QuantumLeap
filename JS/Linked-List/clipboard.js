function copyClipboard(num, type) {
    var range = document.createRange();
    if (num == 1 && type == "insertionsort") {
        $("#copytag").css("display", "block").hide().slideDown().delay(1000).fadeOut();
        range.selectNode(document.getElementById("insertioncpp"));
    }
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}