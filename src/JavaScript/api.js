// /*-------------Peticiones a API's usando Callbacks------------- */

// /* Para este caso vamos a consumir la API  de Rick and Morty, la cual nos va a permitir traer los personajes y usando los callbacks permitiendonos saber el planeta de cada personaje*/

// /*------------------------------------------------------------- */

// //XMLHttpRequest es un objeto de JS que nos permite hacer peticiones a servicios en la nube

// //Guardamos en una variable el requerimiento de node xmlhttprequest
// let XMLHtmlRequest = require ('xmlhttprequest').XMLHttpRequest;
// let API = `api.openweathermap.org/data/2.5/weather?id=3688685&lang=es&appid=35810155ee96c6e88a98b4d0f6c47ee7`;

// // Aqui, crearemos una función que traiga la informacion desde la API que queramos utilizar
// function fetchData(url_api, callBack) {

//   // Se genera una instancia al objeto que se necesita
//   let xhttp = new XMLHtmlRequest();

//   /* SE HACE EL LLAMADO A LA URL */
//   /*xhttp.open (metodo, url de la api, ¡va ha menejar de forma asincronoa?) */
//   xhttp.open('GET', url_api, true);

//   // Escuchar el cambio de estado durante el envio de peticion
//   xhttp.onreadystatechange = function (event) {
//     /* Se dara la validación para que se ejecute el Callback */

//     // Validar la finalizacion del stado es igual a 4 lo que significa que se ha completado
//     if (xhttp.readyState === 4) {
//       // validar el stado es igual a 200 significA que todo esta "OK"
//       if (xhttp.status === 200) {
//         //ejecutar el callback para persear el string resultante a json

//         //*El método JSON.parse() analiza una cadena de texto como JSON, transformando opcionalmente  el valor producido por el análisis.
//         callBack(null, JSON.parse(xhttp.responseText))
//       }else{
//         // Si no se cumple las condiciones del if entonces retornara el error callback
//         const error =new Error ('Error' + url_api)
//         return callBack(error, null)
//       }
//     }
//   }

//   // Se envia la solicitud
//   xhttp.send();
// }

// // /* --------------------------Callback-------------------------- */

// fetchData(API, function (error1, data1 ) {
//   if(error1) return console.error(error1);
//   console.log(data1.co0rd.lat);
// })

// const cors = `https://cors-anywhere.herokuapp.com/`
// var xhr = new XMLHttpRequest();

// xhr.open('GET', `http://miservidor.com/recurso`, true);
// xhr.send();

// xhr.onReadyStateChange = function() {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         console.log(xhr.responseText)
//     }
// }

// const xhr = new XMLHttpRequest();
// xhr.open('GET', '//api.awesomemag.com/magazines');
// xhr.onload = function() {
//   if(xhr.readyState === 4) {
//     // respuesta lista para procesar
//   }
// }

// xhr.send();














// function cargar() {
// 	var xhttp = new XMLHttpRequest();
// 	xhttp.onreadystatechange = function () {
// 		if(this.readyState == 4 & this.status == 200) {
// 			const $html = document.implementation.createHTMLDocument()

// 			$html.body.innerHTML = this.responseText;
// 		}
// 	}

// 	xhttp.open('GET', 'https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/group?id=3688685,6269531&units=metric&lang=es&mode=json&appid=35810155ee96c6e88a98b4d0f6c47ee7', true)
// 	xhttp.send();
// }

// console.log('html',cargar())

