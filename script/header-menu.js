const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.header__menu-btn--open');
const menuCloseBtn = document.querySelector('.header__menu-btn--close');
const menuLink = document.querySelector('.menu__nav-list');

menuBtn.addEventListener('click', toogleMenu);
menuCloseBtn.addEventListener('click', toogleMenu);
menuLink.addEventListener('click', onLinkClick);

function toogleMenu() {
    menu.classList.toggle('menu--active');
    
    document.body.classList.toggle('lock');
}

function onLinkClick() {
    menu.classList.remove('menu--active');
    document.body.classList.remove('lock');
}