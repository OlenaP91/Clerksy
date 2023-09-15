"use strict";
// Приховати лінію меню в макс верхній позиції
window.addEventListener('scroll', function () {
	scrollY > 0 ? document.querySelector('.header').classList.add('scroll') : document.querySelector('.header').classList.remove('scroll');
	});

// Прокрутка при кліку

const menuLinks = document.querySelectorAll('.menu__button[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
    function onMenuLinkClick (e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('.header').offsetHeight;
				
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
    
}