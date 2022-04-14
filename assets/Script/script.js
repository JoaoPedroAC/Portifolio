window.onload = function () {
	const manyImages = document.querySelectorAll('.project-blocks img');
	const siteList = [
		'https://github.com/JoaoPedroAC/Interactive-Pricing-Component',
		'https://github.com/JoaoPedroAC/Calculator',
		'https://github.com/JoaoPedroAC/TODO-LIST',
	];
	for (let index=0; index<manyImages.length; index++) {
		manyImages[index].addEventListener('click', function () {
			window.open(`${siteList[index]}`);
		});
	}
};