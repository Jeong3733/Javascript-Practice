const main = document.querySelector("main");
const backgroundChangeBtn = document.querySelector(".change");
const backgroundColor = document.querySelector(".backgroundColor");
const colorCode = ['A', 'B', 'C', 'D', 'E', 'F',
                    '0', '1', '2', '3', '4',
                    '5', '6', '7', '8', '9'];

backgroundChangeBtn.addEventListener("click", () => {
    let color = "#";

    for (let i=0; i < 6; i++) {
        color += colorCode[getRandomValue(0, colorCode.length)];
    }

    main.style.background = `${color}`;
    backgroundColor.textContent = `${color}`;
});            

function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}



