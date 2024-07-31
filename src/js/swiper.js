import Swiper from "swiper/bundle";
import "swiper/css/bundle";

var commentSwiper = new Swiper(".response-swiper-container", {
  spaceBetween: 1,
  slidesPerView: 3,
  centeredSlides: true,
  roundLengths: true,
  loop: true,

  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  on: {
    // Обробка події для створення віртуальних дублікатів без збільшення кількості пагінаційних точок
    init: function () {
      this.loopCreate();
      this.updateSlides();
    },
  },
});

var paymentSwiper = new Swiper(".payment-swiper", {
  direction: "horizontal",
  loop: false,
  allowTouchMove: false,

  //  pagination: {
  //       el: '.swiper-pagination',
  //       clickable: true,

  // },

  navigation: {
    nextEl: ".checkout__btn",
    prevEl: ".payment__arrow",
  },
});

var relatedSwiper = new Swiper(".related-product-swiper", {
  direction: "horizontal",
  loop: false,
  allowTouchMove: true,
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500, 
    disableOnInteraction: false,  
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    695: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  }
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
});

