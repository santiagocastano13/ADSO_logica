let respuesta = '';

while(respuesta !== 'S'){
  respuesta = prompt('¿Desea salir? (S/N)');
  
  if(respuesta === 'S'){
    console.log('Adiós');
  } else if(respuesta === 'N'){
    console.log('Continuando...');
  } else {
    console.log('Respuesta inválida. Por favor, responda con "S" o "N".');
  }
}