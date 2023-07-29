// Esto solo en los módulos nativos que no tienen promesas nativas
//  { promisify } = require('node:util')
// const readFileProise = promisify(fs.readFile)

// Caso Asincrono Paralelo

import { readFile } from 'node:fs/promises';

Promise.all([
    readFile('./archivo.txt', 'utf-8'),
    readFile('./archivo2.txt', 'utf-8')

]).then(([text, secondText]) =>{
    console.log('Primer texto:', text);
    console.log('Segundo texto:', text)

})

console.log('---> Hacer cosas mientras lee archivos...');

