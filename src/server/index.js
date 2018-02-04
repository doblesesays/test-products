import http from 'http'
import { write } from 'fs';

const PORT = 3000

const app = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.write('Hola')
    res.end()
})

app.listen(PORT, () => {
    console.log('Server running at port')
})