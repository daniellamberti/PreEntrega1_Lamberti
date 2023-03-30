/* Primera interaccion con el usuario, se le pide sus datos. */
alert("¿Quieres saber si has aprobado tu curso?")

const nombre = prompt("Hola! por favor ingresa tu nombre y apellido");

/* Se obtienen las notas de los 3 examenes de INSTRUMENTO y se realiza el promedio de las mismas. */
alert("Hola " + nombre + " , comenzaremos por la materia INSTRUMENTO, ingresa las 3 calificaciones obtenidas");
const promedioInstrumento = promedioExamenes('instrumento', 3)

/* Se obtienen las notas de los 3 examenes de TEORIA y se realiza el promedio de las mismas. */
alert("Ahora continuaremos con tus 5 notas de Teoría");
const promedioTeoria = promedioExamenes('teoria', 5);

/* Se obtienen las notas de los 3 examenes de ARMONIA y se realiza el promedio de las mismas. */

alert("Ahora veamos las 4 notas de Armonía");
const promedioArmonia = promedioExamenes('armonia', 4);

/* Se obtienen las notas de los 3 examenes de ENSAMBLE y se realiza el promedio de las mismas. */
alert("Y ahora, por último, ingresa las 3 notas de Ensamble");
const promedioEnsamble = promedioExamenes('ensamble', 3);

/* Se averigua si el usuario asistio alguna o algunas clases extras del curso. */
const opt = parseInt(prompt("Has asistido a alguna o a algunas clases extras del curso? " + "\n" + "1- SI"  + "\n" + "2- NO"));

let puntoExtra;

if (opt === 1) {
	puntoExtra = 1
} else if (opt === 2) {
	puntoExtra = 0
}

alert("Por haber asistido a alguna o a algunas clases extras del curso tienes " + puntoExtra + " punto a agregar en tu nota promedio FINAL.");
/* Se recuerda al usuario cuales son los promedios de cada una de las materias rendidas. */

alert("Te recordamos que has obtenido las siguientes notas promedio a saber: " + "\n" + "Instrumento: " + promedioInstrumento.toFixed(2) + "\n" + "Teoria: " + promedioTeoria.toFixed(2) + "\n" + "Armonia: " + promedioArmonia.toFixed(2) + "\n" + "Ensamble: " + promedioEnsamble.toFixed(2));
alert("Tambien has obtenido " + puntoExtra + " punto/s por asistir a alguna o algunas clases extras");

/* Se averigua si el usuario falto a mas de 3 clases del curso */
let faltas = parseInt(prompt("Has faltado a más de 3 clases del curso? " + "\n" + "1- SI"  + "\n" + "2- NO"));
switch(faltas) {
	case 1:
		faltas = 2;
		alert("Por haber faltado más de 3 clases del curso tienes un descuento de 2 puntos en tu nota promedio final.");
		break;

	case 2:
		faltas = 0;
		break;
}

/* Se realizan las operaciones necesarias para obtener la NOTA PROMEDIO FINAL del curso. */
let notaPromFinal = [(promedioInstrumento + promedioTeoria + promedioArmonia + promedioEnsamble) / 4] + puntoExtra - faltas;

alert("Segun los datos ingresados, considerando la nota promedio de las 4 notas de Instrumento, Teoría, Armonía y Ensamble, más el agregado eventual de 1 punto por haber asistido a clases extras, más el descuento eventual de 2 puntos por faltas, tu nota promedio final del curso es " + notaPromFinal.toFixed(2));

if (notaPromFinal >=6) {
	alert("Tu nota promedio final de curso es igual o mayor que 6 por lo tanto estas APROBADO");
} else {
	alert("Tu nota promedio final de curso es menor a 6 por lo tanto estas REPROBADO y debes cursarlo nuevamente");
}

/*                              =====<<<  FUNCIONES  ======>>>  */

/* funcion para obtener las 3 notas (y su nota promedio) de la materia INSTRUMENTO. */
function promedioExamenes(materia, cantExamenes) {
	let suma = 0;
	let i = 1;

	while (i <= cantExamenes) {
		let notaExamen = parseFloat(prompt("Ingresa la nota de tu examen " + i + " de " + materia));
		if (isNaN(notaExamen) || notaExamen > 10 || notaExamen < 0) {
			alert("La nota ingresada debe ser un numero entre 0 y 10");
			continue
		}
		suma = suma + notaExamen;
		i++
	}
	const promedio = suma / cantExamenes;

	alert("El promedio de tus tres notas de exámenes de " + materia + " es " + promedio.toFixed(2));
	if (promedio >= 6) {
		alert("Tu promedio es igual o mayor que 6 por lo tanto tienes esta materia aprobada");
	} else {
		alert("Tu promedio es menor que 6 por lo tanto debes repetir el examen o examenes reprobados para poder aprobar la materia");
	}
	return promedio;
}