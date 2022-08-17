const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function() {
    // console.log(links.classList);
    // console.log(links.classList.contains("random"));
    // console.log(links.classList.contains("links"));
    // if (links.classList.contains("show-links")) {
    //   links.classList.remove("show-links");
    // } else {
    //   links.classList.add("show-links");
    // }
    links.classList.toggle("show-links");
    links.style.display = "block";
});

var swiper = new Swiper(".shirt-swiper", {
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,
});


//---------SCROLL REVEAL//
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true  
})



sr.reveal(`.container1,.container2, .container4, .links`)
sr.reveal(`.social-links, .container3, .container5, .foot, .marker, .logo`, { origin: "left" })
sr.reveal(`.divider, .copytext , .scrollup`, { origin: "bottom" })
sr.reveal(`.container6,.container7, .nav-btn`, { origin: 'right' })