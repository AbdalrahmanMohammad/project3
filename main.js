// start special heading
let categories = document.querySelectorAll("body > div:not(.menu-container):not(.landing):not(.footer):not(.spikes)");

let headings = document.querySelectorAll(".special-heading");

document.addEventListener("scroll", makeActive);
function makeActive() {
    for (let i = 0; i < categories.length; i++) {
        const heading = categories[i].getBoundingClientRect();
        const VALUE = 100;
        if (heading.top <= VALUE && heading.bottom >= VALUE) {
            categories[i].querySelector(".special-heading").classList.add("special-heading-active");
        } else {
            categories[i].querySelector(".special-heading").classList.remove("special-heading-active");

        }
    }
}
// end special heading
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
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
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
    menu.querySelectorAll("span").forEach(span => {
        span.style.display = "block";
    });
    if (a != "no")
        if (menu.style.display == "flex") {
            menu.style.display = "none";
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }
        else {
            menu.style.display = "flex";
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        }
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

document.addEventListener("scroll", ()=>{makeActiveCard(galleryCard,150)});

// end gallery
// start works
let works = document.querySelector("#works .container");
let worksCard = document.querySelectorAll("#works .container .card");
let worksTitle = document.querySelectorAll("#works .container .card .title");
let worksPrice = document.querySelectorAll("#works .container .card .prices");


works.addEventListener("click", (e) => {
    let card = e.target;
    if (card.tagName == "IMG")
        card = card.parentElement;
    if (card.classList.contains("card"))
        card.classList.toggle("show");

});
// the active effects works from gallery

// end works
// start features
let features = document.querySelector(".features .container");
let featuresCard = document.querySelectorAll(".features .container .card");

features.addEventListener("click", (e) => {
    let card = e.target.closest(".card");
    if (card) {
        card.classList.toggle("show");
    }
});

document.addEventListener("scroll", ()=>{makeActiveCard(featuresCard,150)});

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

document.addEventListener("scroll", makeActivemembers);
function makeActivemembers() {
    for (let i = 0; i < membersCard.length; i++) {
        const heading = membersCard[i].getBoundingClientRect();
        const VALUE = 150;
        if (heading.top <= VALUE && heading.bottom >= VALUE) {
            membersCard[i].classList.remove("hide");
        } else {
            membersCard[i].classList.add("hide");
        }
    }
}
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
document.addEventListener("scroll", ()=>{makeActiveCard(servicesCard,150)});
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

function makeActiveCard(arr,timevalue) {
    for (let i = 0; i < arr.length; i++) {
        const heading = arr[i].getBoundingClientRect();
        const VALUE = timevalue;
        if (heading.top <= VALUE && heading.bottom >= VALUE) {
            arr[i].classList.add("show");
        } else {
            arr[i].classList.remove("show");
        }
    }
}