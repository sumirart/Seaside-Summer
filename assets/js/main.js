/* ============ MENU ============ */
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

/* ===== SHOW MENU ===== */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* ===== CLOSE MENU ===== */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/* ===== REMOVE MENU MOBILE ===== */
const navLink = document.querySelectorAll(".nav__link");
console.log(navLink);

const linkAction = () => {
  //   const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};

navLink.forEach((link) => link.addEventListener("click", linkAction));

/* ============ CHANGE BACKGROUND HEADER ============ */
const scrollHeader = (_) => {
  const header = document.getElementById("header");
  // when the scroll is greater than 100 viewport height, add scroll-header class to header
  if (this.scrollY >= 100) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
};

window.addEventListener("scroll", scrollHeader);

/* ============ SWIPER DISCOVER ============ */
const swiper = new Swiper(".discover__container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 32,
  coverflowEffect: {
    rotate: 0,
    // rotate: 50,
    // stretch: 0,
    // depth: 100,
    // modifier: 1,
    // slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

/* ============ VIDEO ============ */
const videoFile = document.getElementById("video-file"),
  videoButton = document.getElementById("video-button"),
  videoIcon = document.getElementById("video-icon");

function playPause() {
  if (videoFile.paused) {
    videoFile.play();

    videoIcon.classList.add("ri-pause-line");
    videoIcon.classList.remove("ri-play-line");
  } else {
    videoFile.pause();

    videoIcon.classList.remove("ri-pause-line");
    videoIcon.classList.add("ri-play-line");
  }
}

videoButton.addEventListener("click", playPause);

function finalVideo() {
  videoIcon.classList.remove("ri-pause-line");
  videoIcon.classList.add("ri-play-line");
}

videoFile.addEventListener("ended", finalVideo);
