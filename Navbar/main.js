const toggleBtn = document.querySelector(".nav__toggleBtn");
const menu = document.querySelector(".nav__menu");

toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    console.log(menu.classList);
});