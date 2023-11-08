

let totalEdad = 0; // Almacena la suma de las edades
let totalNombres = 0; // Almacena la cantidad de nombres

while (true) {
  const NOMBRES = prompt('Ingresa tu nombre y edad o pulsa salir para finalizar :');
  // Si el usuario quiere salir del programa
  if (NOMBRES === 'salir' || NOMBRES === null) {
    break;
  }

  const EDAD = parseInt(prompt('Ingresa tu edad :'));
  // Si el usuario pone una edad incorrecta o una letra
  if (!isNaN(EDAD) && EDAD > 0) {
    totalEdad += EDAD; // Suma la edad de todos los usuarios
    totalNombres++; // Aumenta el contador de nombres. 
  } else {
    alert('Edad no valida. Ingresa una edad mayor que cero.');
  }
}

if (totalNombres > 0) {
  const EDADES = totalEdad / totalNombres;
  alert(`Dentro de los nombres ingresados el promedio de las edades es de :  ${EDADES.toFixed(2)} `);
} else {
  alert('No ingresaste ningun nombre ni edad');
}
