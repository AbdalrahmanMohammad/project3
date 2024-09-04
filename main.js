// start header
let othersButton = document.querySelector(".others a");
let popUpMenu = document.querySelector("body>header .second-nav");
document.querySelector("body").addEventListener("click", handleBodyClick);
function handleBodyClick(e) {
    let menu = document.querySelector(".menu-container");
    if (othersButton.contains(e.target) || popUpMenu.classList.contains("showHeaderMenu") && !popUpMenu.contains(e.target)) {
        popUpMenu.classList.toggle("showHeaderMenu");
    }
    if (menu.style.display == "flex" && !menu.querySelector(".menu").contains(e.target) && e.target != (document.querySelector("#menu-button"))) {
        menu.style.display = "none";
    }

};

// end header
// start menu
let menuButton = document.querySelector("#menu-button");
menuButton.addEventListener("click", showmenu);
let menu = document.querySelector(".menu-container");
menu.style.display = "none";
let menuPics = document.querySelectorAll(".menu img");
let menuIndex = 0;
for (let i = 0; i < menuPics.length; i++) {
    if (i != menuIndex)
        menuPics[i].style.display = "none";
}
function toggleMenu(a) {
    for (let i = 0; i < menuPics.length; i++) {
        if (i != menuIndex)
            menuPics[i].style.display = "none";
    }
    menuPics[menuIndex].style.display = "block";
    if(a!="no")
    if (menu.style.display == "flex")
        menu.style.display = "none"
    else
        menu.style.display = "flex"
}


function showmenu(e) {
    e.preventDefault();  // You can also use "event" instead of "e" if you prefer
    toggleMenu();
}

let right = document.querySelector(".menu span:first-child");
let left = document.querySelector(".menu span:last-child");
right.addEventListener("click", () => {
    menuIndex++;
    if (menuIndex == menuPics.length)
        menuIndex = 0;
    toggleMenu("no");
});
left.addEventListener("click", () => {
    menuIndex--; if (menuIndex == -1)
        menuIndex = menuPics.length - 1;
    toggleMenu("no");
});



// end menu
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