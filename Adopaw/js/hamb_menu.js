const hamburgerBtn = document.getElementById('hamburger-btn');
const menu = document.querySelector('.menu-bar');

hamburgerBtn.addEventListener('click', () => {
  menu.classList.toggle('active-menu');
});
