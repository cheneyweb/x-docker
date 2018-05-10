const express = require('express')
const router = express.Router()
const exec = require('child_process').exec
const app = express()

const PORT = 10001
const ROOT_DIR = '/usr/node'

app.get('/', function (req, res) {
    res.send('OK')
})

router.post('/deploy/:server_name', async function (req, res) {
    //req.headers['x-gitlab-token'] == 'j9hb5ydtetfbRGQy42tNhztmJe1qSvC'
    console.log(`接受到请求，开始自动构建：${req.params.server_name}`)
    deploy(`${ROOT_DIR}/${req.params.server_name}/`)
    res.send('Y')
})

app.listen(PORT)
console.info(`AutoDeploy服务启动【执行环境:${process.env.NODE_ENV},端口:${PORT}】`)

function deploy(path) {
    console.log('进入目录：' + path)
    var commands = [
        'cd ' + path,
        'git pull',
        'npm run build'
    ].join(' && ')
    console.log('自动构建 ...')
    exec(commands, function (error, stdout, stderr) {
        if (error) {
            console.error(`exec error: ${error}`)
            return
        }
        if (stdout) {
            console.log(`stdout: ${stdout}`)
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`)
        }
    })
}

