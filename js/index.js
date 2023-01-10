const MENU = document.getElementById('menu');
const POPOUT = document.querySelector('.menu-popout');
const CLOSE = document.querySelector('.closepopout');
MENU.addEventListener('touchstart',()=>{
  POPOUT.classList.add('appear-menu');
});
CLOSE.addEventListener('touchend',()=>{
  POPOUT.classList.remove('appear-menu');
});