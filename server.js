const express = require('express')
const path = require('path')

const app = express()
const router = express.Router()
const port = 3000

router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname+'/front/index.html'))
})

app.use('/', router)
app.listen(port);

