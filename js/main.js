// const primaryNav = document.querySelector('.primary-navigation');
// const navToggle = document.querySelector('.mobile-nav-toggle');
// const icon = document.querySelector('#hamburger');

// navToggle.addEventListener('click', () => {
//   if (icon.classList.contains('fa-bars')) {
//     primaryNav.classList.toggle('is-active');
//     navToggle.classList.toggle('change-color');
//     icon.classList.replace('fa-bars', 'fa-times');
//   } else {
//     primaryNav.classList.toggle('is-active');
//     navToggle.classList.toggle('change-color');
//     icon.classList.replace('fa-times', 'fa-bars');
//   }
// });

const menuBtn = document.querySelector('.hamburger-btn');
const mobileMenu = document.querySelector('.primary-navigation');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('is-active');
  mobileMenu.classList.toggle('is-active');
});
