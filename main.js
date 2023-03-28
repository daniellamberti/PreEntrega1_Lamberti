


/* Primera interaccion con el usuario, se le pide sus datos. */

alert("¿Quieres saber si has aprobado tu curso?")

let nombre = prompt("Hola! por favor ingresa tu nombre y apellido");

/* Se obtienen las notas de los 3 examenes de INSTRUMENTO y se realiza el promedio de las mismas. */

alert("Hola " + nombre + " , comenzaremos por la materia INSTRUMENTO, ingresa las 3 calificaciones obtenidas");

let suma = 0;
let promedioInst = 0;

promNotaMatInst();

/* Se obtienen las notas de los 3 examenes de TEORIA y se realiza el promedio de las mismas. */

alert("Ahora continuaremos con tus notas de Teoría");
suma = 0;
let promedioTeoria = 0;
promNotaMatTeoria();


/* Se obtienen las notas de los 3 examenes de ARMONIA y se realiza el promedio de las mismas. */

alert("Ahora veamos las 3 notas de Armonía");
suma = 0
let promedioArm = 0;
promNotaMatArm();


/* Se obtienen las notas de los 3 examenes de ENSAMBLE y se realiza el promedio de las mismas. */

alert("Y ahora, por último, ingresa las 3 notas de Ensamble");
suma = 0
let promedioEns = 0;
promNotaMatEns();

/* Se averigua si el usuario asistio alguna o algunas clases extras del curso. */

let opt = parseInt(prompt("Has asistido a alguna o a algunas clases extras del curso? " + "\n" + "1- SI"  + "\n" + "2- NO"));
let puntoExtra  = 0;
switch(opt) {
    case 1:
        puntoExtra = 1;
        alert("Por haber asistido a alguna o a algunas clases extras del curso tienes " + puntoExtra + " punto a agregar en tu nota promedio FINAL.");
        break;

    case 2:
        puntoExtra = 0;
        alert("Por no haber asistido a alguna o algunas clases extras del curso tienes " + puntoExtra + " puntos a agregar en tu nota promedio FINAL.");
        break;
}

/* Se recuerda al usuario cuales son los promedios de cada una de las materias rendidas. */


alert("Te recordamos que has obtenido las siguientes notas promedio a saber: " + "\n" + "Instrumento: " + promedioInst.toFixed(2) + "\n" + "Teoria: " + promedioTeoria.toFixed(2) + "\n" + "Armonia: " + promedioArm.toFixed(2) + "\n" + "Ensamble: " + promedioEns.toFixed(2));
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


let notaPromFinal = [(promedioInst + promedioTeoria + promedioArm + promedioEns) / 4] + puntoExtra - faltas;

alert("Segun los datos ingresados, considerando la nota promedio de las 4 notas de Instrumento, Teoría, Armonía y Ensamble, más el agregado eventual de 1 punto por haber asistido a clases extras, más el descuento eventual de 2 puntos por faltas, tu nota promedio final del curso es " + notaPromFinal.toFixed(2));

if(notaPromFinal >=6) {
    alert("Tu nota promedio final de curso es igual o mayor que 6 por lo tanto estas APROBADO");
}
else {
    alert("Tu nota promedio final de curso es menor a 6 por lo tanto estas REPROBADO y debes cursarlo nuevamente");
}


/*                              =====<<<  FUNCIONES  ======>>>  */

/* funcion para obtener las 3 notas (y su nota promedio) de la materia INSTRUMENTO. */

function promNotaMatInst() {

    for (i = 1; i <= 3; i++) {
        let instNotaParcial = parseFloat(prompt("Ingresa la nota de tu examen " + i));
        if(instNotaParcial > 10 || instNotaParcial < 0) {
            alert("La nota ingresada debe ser un numero entre 0 y 10");
            suma = suma - instNotaParcial;
            i = i - 1;
            }
    suma = instNotaParcial + suma;
    promedioInst = suma / 3;
        }

    alert("El promedio de tus tres notas de exámenes de instrumento es " + promedioInst.toFixed(2));
    if (promedioInst >= 6) {
        alert("Tu promedio es igual o mayor que 6 por lo tanto tienes esta materia aprobada");
    }
    else {
        alert("Tu promedio es menor que 6 por lo tanto debes repetir el examen o examenes reprobados para poder aprobar la materia");
    }
    return promedioInst;
    }

/* funcion para obtener las 3 notas (y su nota promedio) de la materia TEORIA. */

function promNotaMatTeoria() {

    for(i = 1; i <= 3; i++) {
        let teorNotaParcial = parseFloat(prompt("Ingresa la nota de tu examen " + i));
        if(teorNotaParcial > 10 || teorNotaParcial < 0) {
            alert("la nota ingresada debe ser un número entre 0 y 10");
            suma = suma - teorNotaParcial;
            i = i-1;
        }
        suma = teorNotaParcial + suma;
        promedioTeoria = suma / 3;
        }
    alert("El promedio de tus tres notas teoria es " + promedioTeoria.toFixed(2));
    if(promedioTeoria>=6) {
        alert("Tu promedio es igual o mayor que 6 por lo tanto tienes esta materia aprobada");
    }
    else {
        alert("Tu promedio es menor que 6 por lo tanto debes repetir el examen o examenes reprobados para poder aprobar la materia");
    }
    return promedioTeoria;
    }


/* funcion para obtener las 3 notas (y su nota promedio) de la materia ARMONIA. */

    function promNotaMatArm() {

        for(i = 1; i <= 3; i++) {
            let armNotaParcial = parseFloat(prompt("Ingresa la nota de tu examen " + i));
            if(armNotaParcial > 10 || armNotaParcial < 0) {
                alert("la nota ingresada debe ser un número entre 0 y 10");
                suma = suma - armNotaParcial;
                i = i-1;
            }
            suma = armNotaParcial + suma;
            promedioArm = suma / 3;
            }
        alert("El promedio de tus tres notas de instrumento es " + promedioArm.toFixed(2));
        if(promedioArm>=6) {
            alert("Tu promedio es igual o mayor que 6 por lo tanto tienes esta materia aprobada");
        }
        else {
            alert("Tu promedio es menor que 6 por lo tanto debes repetir el examen o examenes reprobados para poder aprobar la materia");
        }
        return promedioArm;
        }


/* funcion para obtener las 3 notas (y su nota promedio) de la materia ENSAMBLE. */


        function promNotaMatEns() {

            for(i = 1; i <= 3; i++) {
                let ensNotaParcial = parseFloat(prompt("Ingresa la nota de tu examen " + i));
                if(ensNotaParcial > 10 || ensNotaParcial < 0) {
                    alert("la nota ingresada debe ser un número entre 0 y 10");
                    suma = suma - ensNotaParcial;
                    i = i-1;
                }
                suma = ensNotaParcial + suma;
                promedioEns = suma / 3;
                }
            alert("El promedio de tus tres notas de ensamble es " + promedioEns.toFixed(2));
            if(promedioEns>=6) {
                alert("Tu promedio es igual o mayor que 6 por lo tanto tienes esta materia aprobada");
            }
            else {
                alert("Tu promedio es menor que 6 por lo tanto debes repetir el examen o examenes reprobados para poder aprobar la materia");
            }
            return promedioEns;
            }
