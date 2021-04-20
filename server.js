const express = require('express')
const path = require('path')

//// import "./db.js"
// require('./db.js')

const app = express()
const router = express.Router()
const port = 3000
const hostname = "0.0.0.0"

const tasks = [
    {"id": 1, "text": "Learn React!", "done": false},
    {"id": 2, "text": "Learn NodeJS!", "done": false},
    {"id": 3, "text": "Learn to Code!", "done": true}
]

router.get('/api/tasks', (req,res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(JSON.stringify({tasks : tasks}))
    // console.log(req.query.id)
})



app.use('/', router)
app.listen(port, hostname, () => console.log("Server Up"))
