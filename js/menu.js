//Логика выезжающего меню
const burger = document.querySelector('.burger');
console.log('AAAAAAAAAAAAAAA')
const navList = document.querySelector('.header__nav_list-min');

burger.addEventListener('click', ()=> {
    console.log('AAAAAAAAAAAAAAA')
    navList.classList.add('nav__list-active');
})
