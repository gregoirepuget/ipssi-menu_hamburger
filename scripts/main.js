const burgerMenu = document.querySelector('.hamburger')
const burgerNav = document.querySelector('#burger')

burgerMenu.addEventListener(
  'click',
  function(){
    burgerMenu.classList.toggle('is-active')
    burgerNav.classList.toggle('is-active')
  }
)
