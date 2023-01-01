const user_img = [
    "img/person-1_rfzshl.jpg",
    "img/person-2_np9x5l.jpg",
    "img/person-3_ipa0mj.jpg",
    "img/person-4_t9nxjt.jpg"
];
const user_name = ["Susan Smith", "Anna Johnson", "Peter Jones", "Bill Anderson"];
const user_job = ["WEB DEVELOPER", "WEB DESIGNER", "INTERN", "THE BOSS"];
const user_review = [
    "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
];

const img = document.querySelector(".user__img");
const name = document.querySelector(".user__name");
const job = document.querySelector(".user__job");
const review = document.querySelector(".user__review");

const btn_prev = document.querySelector(".pagingBtn_prev");
const btn_next = document.querySelector(".pagingBtn_next");
const btn_random = document.querySelector(".randomBtn");

var id = parseInt(document.querySelector(".content").dataset.id);

btn_prev.addEventListener("click", () => {
    id = (id != 0 ? id-1 : 3);
    changeContent(id);
});

btn_next.addEventListener("click", () => {
    id = (id != 3 ? id+1 : 0);
    changeContent(id);
});

btn_random.addEventListener("click", () => {
    id = getRandomValue(0, 3)
});

function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function changeContent(idx) {
    img.src = user_img[idx];
    name.textContent = user_name[idx];
    job.textContent = user_job[idx];
    review.textContent = user_review[idx];
}