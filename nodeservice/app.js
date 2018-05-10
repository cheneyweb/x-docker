const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('HelloWorld')
})

app.listen(3636)
console.info(`Node服务启动`)

