const swiper = new Swiper('.wemade__swiper', {
	loop: true,
	spaceBetween: 20,
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next2',
		prevEl: '.swiper-button-prev2',
	},

});

const swiper2 = new Swiper('.partners__conatiner', {
	loop: true,
	spaceBetween: 20,
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 1,
	// Navigation arrows
	breakpoints: {

		590: {
			slidesPerView: 3,
		},
	},

});
const swiper3 = new Swiper('.build__cintainer', {
	loop: true,
	spaceBetween: 20,
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 1,
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next3',
		prevEl: '.swiper-button-prev3',
	},
});
const swiper4 = new Swiper('.testiomonials__container', {
	loop: true,
	spaceBetween: 20,
	grabCursor: true,
	slidesPerView: 1,
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next4',
		prevEl: '.swiper-button-prev4',
	},
});


const nav = document.getElementById('header')
function scrollHeader() {
	// When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
	if (this.scrollY >= 80) nav.classList.add('scroll-header');
	else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)



const buttonTeme = document.querySelector('.change__teame');
buttonTeme.onclick = function () {
	const bodyTeme = document.querySelector('body');
	buttonTeme.classList.toggle('active');
	bodyTeme.classList.toggle('teme-active')
};

const burger = document.querySelector(".nav__burger");
const burgerMenu = document.querySelector('.nav__menu');
const burgerMenuOpen = document.querySelector('.nav__menu.active');

burger.addEventListener('click', function () {
	burger.classList.toggle('active');
	burgerMenu.classList.toggle('active');
});


document.onclick = function (e) {
	if (e.target !== burger && e.target !== burgerMenu && e.target !== nav) {
		burgerMenu.classList.remove('active');
		burger.classList.remove('active');
	}
}



ScrollReveal({
	distance: '60px',
	duration: 2500,
	delay: 100,
	reset: false,
});
ScrollReveal().reveal(".made__content h1 , .section__title ", { delay: 200, origin: "bottom" });
ScrollReveal().reveal(".made__content p , .wemade__card , .work__card ,.contact__form input:nth-child(2) ,.contact__phone ", { delay: 300, origin: "left", interval: 300 });
ScrollReveal().reveal(".made__content .button__main ", { delay: 400, origin: "bottom" });
ScrollReveal().reveal(".contact__form input:nth-child(1),.contact__form input:nth-child(3) , .partners__conatiner   ", { delay: 300, origin: "right", interval: 300 });