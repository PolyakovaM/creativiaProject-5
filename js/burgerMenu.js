const hamburgerButton = document.querySelector('.burger-menu__button');
const hamburgerMenu = document.querySelector('.burger-menu');
const hamburgerBcg = document.querySelector('.burger-menu__overlay');

hamburgerButton.addEventListener('click', function(ev) {
	hamburgerMenu.classList.toggle('burger-menu_active');
})

window.onmousedown = function(event) {
	if (hamburgerMenu.classList.contains('burger-menu_active') && 
		 (event.target === hamburgerButton || event.target === hamburgerBcg)
	   ) {
		hamburgerMenu.classList.toggle('burger-menu_active');
	} 
}