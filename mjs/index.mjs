// .js ==> por defecto utiliza ComonJS
// .mjs ==> para utilizarr ES Modules
// .cjs ==> para utilizar CommonJS

import { sum, sub, mult } from './sum.mjs';

console.log(sum(1, 2));
console.log(sub(5, 4));
console.log(mult(3, 4));