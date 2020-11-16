export default function palindromo(cadena) {
  //estandarizo la cadena
  const cadenaOriginal = cadena.toLowerCase();

  // convierto la cadena en un array
  const letrasEspacios = cadenaOriginal.split("");

  // Elimino los espacios en blanco
  let cadenaSinEspacios = "";
  for(let i in letrasEspacios) {
    if(letrasEspacios[i] !== " ") {
      cadenaSinEspacios += letrasEspacios[i];
    }
  }

  const letras = cadenaSinEspacios.split("");
  const letrasReves = cadenaSinEspacios.split("").reverse();

  // valido leyendo la cadena hecha string
  let iguales = true;
  for(let i in letras) {
    if(!(letras[i] === letrasReves[i])) {
      iguales = false;
    }
  }
  return iguales;
}