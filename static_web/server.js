let http = require('http')
let fs = require('fs')
let url = require('url')

http
  .createServer((req, res) => {
    let q = url.parse(req.url, true)
    let filename = '.' + q.pathname

    // baca file
    fs.readFile(filename, function (err, data) {
      if (err) {
        // kirim balasan error
        res.writeHead(404, { 'Content-Type': 'text/html' })
        return res.end('404 Not Found')
      }
      // Kirim balasan dengan isi file statis
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(data)
      return res.end()
    })
  })
  .listen(8000)

console.log('server berjalan di http://localhost:8000')
