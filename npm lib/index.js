'use strict'
const fetch = require('node-fetch');

async function getNotificacion(url, token, res) {
	// if (typeof id == 'undefined') { 	//Si el id no fue ingresado, obtengo todas las notificaciones
	// 	var datos = await fetch(url)
	// 		.then(response => response.json())
	// 		.then(data => {
	// 			return data;
	// 		});
	// 	res = await datos;
	// 	return res;
	// } else { 							// Si el id fue ingresado obtengo la notificación con ese ID
		var datos = await fetch(url + "?token=" + token)
			.then(response => response.json())
			.then(data => {
				return data;
			});
		return datos;
	// }
	// Buscar notificación por ID puede ser útil si el usuario quiere ver en detalle una notificación específica
}

const postRegimen = function (url, cuerpo) {
	fetch(url, {
		method: 'POST', //acá le digo que lo que quiero hacer es un post
		body: JSON.stringify(cuerpo), //acá paso lo que me ingresan como json a texto
		headers: { 'Content-Type': 'application/json' } //acá le aviso que lo que le paso como texto es un json
	}) //el procedimiento de antes lo hago porque en la documentación lo hacen así
		.then(res => res.json())
		.then(json => {
			console.log("Se cargó correctamente el siguiente registro: ");
			console.log(json)
		})
		.catch(err => console.log(err));
}

const generarRegimen = function (anio, mes, registros, fecha_carga, inputCuit, nombre_empresa) {
	//Inicializo la variable sal
	var sal = {};

	// Control sobre el año, si es incorrecto hago que la función devuelva "undefined" que tengo entendido que es como vacío
	if (2020 > anio || anio > 9999) {
		console.error("El año ingresado es incorrecto");
		return undefined;
	} else {
		anio = anio.toString()
	}

	// Control sobre el mes, si es incorrecto hago que la función devuelva "undefined" que tengo entendido que es como vacío
	if (mes < 1 || mes > 12) {
		console.error("El mes ingresado es incorrecto");
		return undefined;
	} else {
		mes = mes.toString()
	}

	// Control sobre la fecha de carga, si es incorrecta hago que la función devuelva "undefined" que tengo entendido que es como vacío
	if (typeof fecha_carga == 'undefined') {
		fecha_carga = new Date().toISOString();
	} else {
		if (typeof fecha_carga != 'string') {
			console.error("La fecha debe ser un string");
			return undefined;
		} else {
			fecha_carga = new Date(fecha_carga);
			if (fecha_carga.getFullYear() < 2021) {
				console.error("Por favor revise la fecha de carga");
				return undefined;
			}
		}
	}

	// Control sobre el cuit, si es incorrecto hago que la función devuelva "undefined" que tengo entendido que es como vacío
	if (inputCuit < 9999999999 || inputCuit > 99999999999 || inputCuit.length > 11) {
		console.error("Por favor revise el CUIT, este debe tener al 11 cifras sin espacios, puntos o guiones.");
		return undefined;
	} else {
		inputCuit = parseInt(inputCuit);
	}

	// Control sobre el nombre de la empresa, si es incorrecto hago que la función devuelva "undefined" que tengo entendido que es como vacío
	if (typeof nombre_empresa != 'string') {
		console.error("Por favor revise el nombre de la empresa");
		return undefined;
	}

	// Cargo los valores que fueron revisados y corregidos previamente a la variable de salida en forma de json.
	sal = {
		"periodo": {
			"year": anio,
			"month": mes
		},
		"listaRegistro": registros,
		"date_upload": fecha_carga,
		"day_limit": 10,
		"infoEmpresa": {
			"cuit": inputCuit,
			"razon_social": nombre_empresa
		}
	};
	return sal;
};

const cargarRegistro = function (reg, listaReg) {
	if (typeof listaReg == 'undefined') {
		listaReg = [reg];
	} else {
		listaReg.push(reg);
	}
	return listaReg;
}

const generarRegistro = function (denom, ean, precioUn, unidadMed, cantProd, cantVend) {

	if (typeof denom != 'string') {
		console.error("Compruebe que la denominacion ingresada sea correcta");
		return undefined;
	}

	if ((typeof ean != 'number') || (ean > 9999999999999) || (ean < 999999999999)) {
		console.error("Compruebe que el codigo EAN tenga el formato correcto");
		return undefined;
	}

	if (typeof precioUn != 'number') {
		console.error("Compruebe que el precio ingresado sea correcto");
		return undefined;
	}

	if (typeof unidadMed != 'string') {
		console.error("Compruebe que la unidad medida ingresada sea correcta");
		return undefined;
	}

	if ((typeof cantVend != 'number') || (cantVend < 0)) {
		console.error("Compruebe que la cantidad vendida ingresada sea correcta");
		return undefined;
	}

	if (typeof cantProd != 'number' || (cantProd < 0)) {
		console.error("Compruebe que la cantidad producida ingresada sea correcta");
		return undefined;
	}

	const sal = {
		"denominacion": denom,
		"codigo_ean": ean,
		"precio_unidad": precioUn,
		"unidad_medida": unidadMed,
		"cantidad_prod": cantProd,
		"cantidad_vend": cantVend
	}

	return sal;
}

//+"?username="+username+ "&password="+ password

const loginMinisterio = function (url, user, pass) {
	const logMinisterio = {
		"_id":1,
		"username": user,
		"password": pass,
		"token": "e7d26ea1-fc15-47b5-8974-b0bffec667273abdba"
	}
	return logMinisterio.token 

	//PARA PROXIMA ENTREGA:
	/*
	fetch(url + "?username="+ new URLSearchParams({
		username: user,
		password: pass
	}))
		.then(response => response.json())
		.then(json => {
			if (json[0].password == pass) {
				console.log(json[0].token)
			} else {
				console.error("Contraseña incorrecta");
			}
		}) 
	*/

		

}
//exports.printMsg = function() {
//	console.log("This is a message from the demo package");
  //}
  
module.exports = {
	getNotificacion: getNotificacion,
	postRegimen: postRegimen,
	loginMinisterio: loginMinisterio,
	generarRegimen: generarRegimen,
	generarRegistro: generarRegistro,
	cargarRegistro: cargarRegistro
}