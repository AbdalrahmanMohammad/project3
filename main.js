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

// start top-videos
let videos = document.querySelector(".videos .container");
let videosul = document.querySelector(".videos .container ul");
let videositem = document.querySelectorAll(".videos .container ul li");
let videoimg = document.querySelector(".videos .container .right .image img");
let videotxt = document.querySelector(".videos .container .right .bar div");

videosul.addEventListener("click", (e) => {
    let item = e.target.closest("li");
    if (item) {
        for (let i = 0; i < videositem.length; i++) {
            videositem[i].classList.remove("show");
        }
        videoimg.style.transform = " translateY(-120%)";
        videotxt.style.transform = " translatex(-1000%)";
        let fs = videotxt.style.fontSize;

        item.classList.toggle("show");
        videotxt.innerHTML = item.getAttribute('data-txt');
        document.getElementById("video-image").scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'nearest'
        });
        setTimeout(() => {
            videoimg.src = item.getAttribute('data-img');
            videoimg.style.transform = "translateY(0)";
            videotxt.style.transform = " translatex(0)";

            videotxt.style.fontSize = fs;

        }, 350); // 50 milliseconds delay


        console.log(item);
    }
});
// end top-videos