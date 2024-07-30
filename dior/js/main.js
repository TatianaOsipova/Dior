const swiperTop = new Swiper('.top__swiper', {
   effect: 'fade',
   autoplay: {
    delay: 3500,
    disableOnInteraction: false,
   },     
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },      
  });

  const swiperAbout = new Swiper(".about__slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },      
  });