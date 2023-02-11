if (/Android/.test(navigator.userAgent)){
  console.log('Я телефон');
  var mySwiper = new Swiper(".swiper-container", {
    direction: "vertical",
    loop: true,
    pagination: ".swiper-pagination",
    grabCursor: true,
    speed: 10000,
    paginationClickable: false,
    parallax: true,
    autoplay: true,
    effect: "slide",
    mousewheelControl: 0
  });
}else{
  console.log('я ноут');

  var mySwiper = new Swiper(".swiper-container", {
    direction: "vertical",
    loop: true,
    pagination: ".swiper-pagination",
    grabCursor: true,
    speed: 1000,
    paginationClickable: true,
    parallax: true,
    autoplay: false,
    effect: "slide",
    mousewheelControl: 1
  });
} 

// var mySwiper = new Swiper(".swiper-container", {
//     direction: "vertical",
//     loop: true,
//     pagination: ".swiper-pagination",
//     grabCursor: true,
//     speed: 10000,
//     paginationClickable: kek,
//     parallax: true,
//     autoplay: true,
//     effect: "slide",
//     mousewheelControl: 0
//   });
  