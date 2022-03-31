const body = document.getElementsByTagName('body')[0];
body.onload = function () {
	// Abrirá de acordo com o link incerido
	const pricing = document.getElementById('images');
	pricing.addEventListener('click', function () {
		window.open('https://github.com/JoaoPedroAC/Interactive-Pricing-Component');
	});
};
