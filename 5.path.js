const path = require('node:path')

// barra separadora de carpetas según OS
console.log(path.sep)

// Ybur rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

const pass = '/tmp/midu-secret-files/password.txt'

const base = path.basename(pass)
console.log(base)

const filename = path.basename(pass, '.txt')
console.log(filename)

const extension = path.extname('my.super.image.jpg')
console.log(extension)
