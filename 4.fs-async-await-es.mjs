// Esto solo en los módulos nativos que no tienen promesas nativas
//  { promisify } = require('node:util')
// const readFileProise = promisify(fs.readFile)

// Caso Asincrono secuencial (solo usando await)

import { readFile } from 'node:fs/promises';

console.log('Leyendo el primer archivo...');
const text = await readFile('./archivo.txt', 'utf-8');
console.log('Primer texto:', text);
console.log('---> Hacer cosas mientras lee el archivo...');

console.log('Leyendo el segundo archivo...');
const secondText = await readFile('./archivo2.txt', 'utf-8')
console.log('Segundo texto:', text)
