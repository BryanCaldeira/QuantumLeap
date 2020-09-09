let first = document.getElementById("dash-top");
let mid = document.getElementById("dash-middle");
let last = document.getElementById("dash-bottom");
let check = document.getElementById("expand-bar").style.right;


$("#header-button").click(function () {
    $("#expand-bar").animate({
        right: "0"
    }, 200);
    document.body.style.overflow = "hidden";
    $("#dash-top").toggleClass("active-expand-bar-first");
    $("#dash-middle").toggleClass("active-expand-bar-middle");
    $("#dash-bottom").toggleClass("active-expand-bar-last");
});



$(document).mouseup(function (e) {
    let header = $("#header");
    if (!header.is(e.target) && header.has(e.target).length === 0) {
        $("#expand-bar").animate({
            right: "-100%"
        }, 700);

        document.body.style.overflow = "visible";
        first.classList.remove("active-expand-bar-first");
        mid.classList.remove("active-expand-bar-middle");
        last.classList.remove("active-expand-bar-last");
    }
});