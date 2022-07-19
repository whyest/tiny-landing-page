//tabs
const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".top");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove active from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

//swiper
const gallerySlider = new Swiper(".swiper", {
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  speed: 500,
  simulateTouch: true,
  centeredSlides: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },
    576: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 5,
      slidesPerGroup: 1,
      spaceBetween: 40,
    },
  },

  a11y: {
    prevSlideMessage: "Предыдущий",
    nextSlideMessage: "Следующий",
  },
});
