window.onload = function () {
	const manyImages = document.querySelectorAll('#project-blocks');
	const images = document.getElementsByTagName('img');
	const siteList = [
		'https://github.com/JoaoPedroAC/Interactive-Pricing-Component',
		'https://github.com/JoaoPedroAC/Calculator',
		'https://github.com/JoaoPedroAC/TODO-LIST',
	];
	for (let someImages of manyImages) {
		someImages.addEventListener('click', function () {
			for (let indexImage in manyImages) {
				window.open(`${siteList[indexImage]}`);
			}
		});
	}
};

/* bug ao abrir o link das imagens */