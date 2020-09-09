let burger = document.getElementById("side-menu");
let codes = document.getElementById("codes");

function Open() {
    burger.style.display = "block";
    let pos = document.getElementById("codes").scrollTop;
    $("#side-menu").css("top", pos);
    $(".closingTap").css("top", pos);

    $("#side-menu").animate({
            left: "0",
        },
        500
    );
    codes.style.overflow = "hidden";
}

function Close() {
    $("#side-menu").css("position", "absolute");
    $("#side-menu").animate({
            left: "-200px",
        },
        500
    );
    codes.style.overflow = "scroll";
}