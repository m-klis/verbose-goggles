'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
    res.send('<h2>Muklis Dwi Santoso</h2><br/><p>Jaringan Komputer dari Dicoding</p>')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
