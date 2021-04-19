const express = require('express')
const path = require('path')

import "./db.js"

const app = express()
const router = express.Router()
const port = 3000
const hostname = "0.0.0.0"

const tasks = [{"id":1,"text":"abra","done":true}, {"id":2,"text":"abra","done":true}, {"id":3,"text":"abra","done":true}]

router.get('/api/tasks', (req,res) => {
    res.send(JSON.stringify({tasks : tasks}))
    console.log(req.query.id)
})



app.use('/', router)
app.listen(port, hostname, () => console.log("Server Up"))
