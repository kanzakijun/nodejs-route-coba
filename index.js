// import modul momentjs
let moment = require('moment')
let salam = require('./salam')

//menggunakan modul momentjs
console.log('Sekarang: ' + moment().format('D MMMM YYYY, h:mm:ss a'))
console.log(salam.salamPagi())
