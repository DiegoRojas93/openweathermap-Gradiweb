function templateHtml(HtmlJs) {
	const $BODYHTML = document.implementation.createHTMLDocument();
	$BODYHTML.body.innerHTML = HtmlJs
	return $BODYHTML.body.children[0]
}

function main__information_template (Bogotá) {
	return (`
		<section class="main_information">
			<article class="main_information-icon">
				<img src="http://openweathermap.org/img/wn/${Bogotá.weather[0].icon}@2x.png" alt="icon">
			</article>
			<article class="main_information-temperature">
				<h1>${Bogotá.main.temp} C°</h1>
			</article>
		</section>
	`)
}

function info__locations_template (París) {
	return (`
		<div id="paris">
			<div class="data__important">
				<section class="icon">
					<img src="http://openweathermap.org/img/wn/${París.weather[0].icon}@2x.png" alt="icon">
				</section>
				<section class="general">
					<article class="title"><h1>${París.main.temp} C°</h1></article>
					<article class="country">
						<h2>${París.name}</h2>
						<P>${París.sys.country}</P>
					</article>
				</section>
			</div>
			<div class="data">
				<span>humedad: ${París.main.humidity}</span>
				<span>viento: ${París.wind.speed} metro / seg</span>
				<span>direccion: ${París.wind.speed}°</span>
			</div>
		</div>
	`)
}

(async function Load() {

	async function getData(url){
		const CORS = `https://cors-anywhere.herokuapp.com`;

		const RESPONSE = await fetch(`${CORS}/${url}`)

		const DATA = await RESPONSE.json();

		return DATA
	}

	const INFOWEATHER = await getData(`api.openweathermap.org/data/2.5/group?id=3688685,6269531&units=metric&lang=es&mode=json&appid=35810155ee96c6e88a98b4d0f6c47ee7`);
	console

	const BOGOTÁ = INFOWEATHER.list[0];
	const PARÍS = INFOWEATHER.list[1];



	const $BODY = document.querySelector('body')
	const bodyHtmlJs = main__information_template(BOGOTÁ);
	$BODY.append(templateHtml(bodyHtmlJs))

	const $Francia = document.querySelector('#francia')
	const franciaHtmlJs = info__locations_template(PARÍS);
	// $BODY.append(templateHtml(franciaHtmlJs))

	console.log('body', $Francia);
})()