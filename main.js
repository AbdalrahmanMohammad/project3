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
let featuresTitle = document.querySelectorAll(".features .container .card .title");
let featuresPrice = document.querySelectorAll(".features .container .card .prices");

features.addEventListener("click", (e) => {
    let card = e.target.closest(".card");
    if (card) {
        console.log(card);
        card.classList.toggle("show");
    }
});

// end features