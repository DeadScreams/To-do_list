const { Worker } = require('cluster')
const express = require('express')
const path = require('path')
const Database_Worker= require('./db.js')
const crypto = require('crypto');
const { Console } = require('console');

const app = express()
const router = express.Router()
const port = 3000
const hostname = "0.0.0.0"

const DataWorker = new Database_Worker("db.db")

const tasks = [
    {"id": 1, "text": "Learn React!", "done": false},
    {"id": 2, "text": "Learn JS!", "done": false},
    {"id": 3, "text": "Learn to Code!", "done": true},
]

router.get('/api/tasks', (req,res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(JSON.stringify({tasks : tasks}))
    // console.log(req.query.id)
})

router.post('/api/add_task', (req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var name = req.query.text
    res.sendStatus(200)
    var id = crypto.randomBytes(8).toString('hex');
    DataWorker.excute_request('INSERT OR IGNORE INTO tasks VALUES ("'+id+'", "'+name+'", 0);')
})

router.post('/api/delete_task/:id', (req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var id = req.params.id
    DataWorker.excute_request('DELETE FROM tasks WHERE id="'+id+'";')
    res.sendStatus(200)
})

router.get('/api/db_visual', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    DataWorker.excute_request_all("SELECT * FROM tasks").then(rows => {
        res.send(rows)
    })
})

// run once
router.get('/api/init_table', (req, res) => {
    DataWorker.excute_request("CREATE TABLE tasks (Id varchar(250), Text varchar(250), Done BIT, UNIQUE (Id));")
    res.sendStatus(200);
})


app.use('/', router)
app.listen(port, hostname, () => console.log("Server Up"))
