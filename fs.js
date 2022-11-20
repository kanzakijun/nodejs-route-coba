let fs = require('fs')
let http = require('http')

http
  .createServer((req, res) => {
    // baca file
    fs.readFile('index.html', (err, data) => {
      if (err) throw err
      //kirim respon
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(data)
      res.end()
    })
  })
  .listen(8000)

console.log('Server berjalan pada http://localhost:8000')
