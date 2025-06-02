const swiper = new Swiper(".swiper", {
  // 設定輪播數量
  slidesPerView: 3,
  // 每張 slide 的間距
  spaceBetween: 24,
  // 斷點，注意是 mobile first 寫法
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    992: {
      slidesPerView: 3
    },
  },
  // 綁定控制上一張、下一張輪播的按鈕元素
  navigation: {
    nextEl: ".slider-btn-next",
    prevEl: ".slider-btn-prev"
  }
});
