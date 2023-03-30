let respuesta = '';

while (respuesta !== 'S') {
  respuesta = prompt('¿Desea salir? (S/N)');
  
  if (respuesta === 'N') {
    console.log('Continuando ejecución...');
  } else if (respuesta !== 'S') {
    console.log('Respuesta inválida. Por favor, responda con S o N.');
  }
}

console.log('Programa detenido.');