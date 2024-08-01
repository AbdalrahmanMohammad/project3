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