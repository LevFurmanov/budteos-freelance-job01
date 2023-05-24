const btnBurger = document.querySelector('.header-burger');
const btnBurgerMobile = document.querySelector('.header-burger-mobile');

let menu = document.querySelector('.header-mobile-menu');

btnBurger.addEventListener('click', () => {
  if (menu !== 'block') {
    menu.style.display = 'block';
  }
});

btnBurgerMobile.addEventListener('click', () => {
  menu.style.display = 'none';
});

function closeMenu(){
  document.querySelector('.header-mobile-menu').style.display = 'none'
  console.log('Menu closed')
}