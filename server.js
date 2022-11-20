// let http = require('http')

// let server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/html' })
//   res.write('Hello <b>World</b>!')
//   res.end()
// })

// server.listen(8000)

// console.log('Server running On http://localhost:8000')

// Membuat routing:
let http = require('http')

let server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  switch (req.url) {
    case '/about':
      res.write('Halaman About')
      break
    case '/profile':
      res.write('Halaman profile')
      break
    case '/produk':
      res.write('Halaman Produk')
      break
    default:
      res.write('404 : Halaman tidak ditemukan!')
  }
  res.end()
})

server.listen(8000)

console.log('Server running On http://localhost:8000')
