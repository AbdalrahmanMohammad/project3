// start gallery
let gallery = document.querySelector(".gallery .container");
let galleryCard = document.querySelectorAll(".gallery .container .card");
let galleryTitle = document.querySelectorAll(".gallery .container .card .title");
let galleryPrice = document.querySelectorAll(".gallery .container .card .prices");


gallery.addEventListener("click", (e) => {
    let card = e.target;
    if (card.tagName == "IMG")
        card = card.parentElement;
    if (card.classList.contains("card"))
        card.classList.toggle("show");

});
// end gallery
// start features
let features = document.querySelector(".features .container");
let featuresCard = document.querySelectorAll(".features .container .card");

features.addEventListener("click", (e) => {
    let card = e.target.closest(".card");
    if (card) {
        card.classList.toggle("show");
    }
});

// end features
// start members
let members = document.querySelector(".members .container");
let membersCard = document.querySelectorAll(".members .container .card");

for (let i = 0; i < membersCard.length; i++)
    membersCard[i].classList.add("hide");

members.addEventListener("click", (e) => {
    let card = e.target.closest(".card");
    if (card) {
        card.classList.toggle("hide");
    }
});
// end members

// start services
let services = document.querySelector(".services .container");
let servicesCard = document.querySelectorAll(".services .container .card");

services.addEventListener("click", (e) => {
    let card = e.target.closest(".card");
    if (card) {
        card.classList.toggle("show");
    }
});
// end services