"use strict";

const btn = document.querySelector(".btn_container");
const val = document.querySelector(".value");

btn.addEventListener("click", (event) => {
    const target = event.target;
    let value = parseInt(val.textContent);
    
    switch(target.className) {
        case "btn decrease":
            val.textContent = value-1;
            break

        case "btn reset":
            val.textContent = 0;
            break

        case "btn increase":
            val.textContent = value+1;
            break

        default:
            "오류입니다!"
    }

    if (parseInt(val.textContent) < 0) {
        val.style.color = "red";
        console.log(1);
    } else if (parseInt(val.textContent) > 0) {
        val.style.color = "green";
        console.log(2);
    } else {
        val.style.color = "hsl(209, 61%, 16%)";
        console.log(3);
    }
});