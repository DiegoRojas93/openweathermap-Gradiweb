(async function apiWeather() {

	async function getData(url){
		const cors = 'https://cors-anywhere.herokuapp.com'

		const response = await fetch(`${cors}/${url}`)

		const data = await response.json();

		return data
	}

	const info = await getData(`api.openweathermap.org/data/2.5/group?id=3688685,6269531&units=metric&lang=es&mode=json&appid=35810155ee96c6e88a98b4d0f6c47ee7`);

	console.log(info);
})()

