const sidebar_toggle = document.querySelector(".sidebar_toggle");
const sidebar_close = document.querySelector(".side_header_closeBtn");
const sidebar = document.querySelector(".sidebar");

sidebar_toggle.addEventListener("click", () => {
    sidebar.classList.toggle("show_sidebar");
})

sidebar_close.addEventListener("click", () => {
    sidebar.classList.remove("show_sidebar");
})