const express = require('express')
const app = express()
const port = 5000
const path = require('path');

app.get('/', (req, res) => {
    res.send('Hello Worlds!')
})


app.get('/data/sample.json', (req, res) => {
    res.sendFile(path.join(__dirname, '/data', 'sample.json'));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})