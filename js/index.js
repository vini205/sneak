const MENU = document.getElementById('menu');
const POPOUT = document.querySelector('.menu-popout');
const CLOSE = document.querySelector('.closepopout');
MENU.addEventListener('mousedown',()=>{
  POPOUT.classList.add('appear-menu');
});
CLOSE.addEventListener('mouseup',()=>{
  POPOUT.classList.remove('appear-menu');
});