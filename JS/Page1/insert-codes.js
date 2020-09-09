let text = document.getElementById("lang");
let code1 = document.getElementById("insertioncpp");
let code2 = document.getElementById("insertionjava");


function Active(num) {
    switch (num) {
        case 1:
            code1.classList.add("active");
            code2.classList.remove("active");
            text.innerHTML = "C++";
            Close();
            break;
        case 2:
            code1.classList.remove("active");
            code2.classList.add("active");
            Close();
            text.innerHTML = "Java";
            break;


    }
}