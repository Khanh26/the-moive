const btnMenu = document.querySelector('.btn-mb');
const menu = document.querySelector('ul.block-header');
btnMenu.addEventListener('click', () => {
    menu.classList.toggle('open');
})