const express = require('express')
const path = require('path')
const Database_Worker= require('./db.js')
const crypto = require('crypto');

const app = express()
const router = express.Router()
const port = 3000
const hostname = "0.0.0.0"


const DataWorker = new Database_Worker("db.db")

// const tasks = [
//     {"id": 1, "text": "Learn React!", "done": false},
//     {"id": 2, "text": "Learn JS!", "done": false},
//     {"id": 3, "text": "Learn to Code!", "done": true},
// ]

app.use(express.static('front'));

router.get('/api/tasks', (req,res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    DataWorker.excute_request_all("SELECT * FROM tasks").then(rows => {
        res.send({ tasks: rows })
    })
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

router.post('/api/update_task/:id', (req,res) => {
    if(req.query.text === undefined){
        return res.sendStatus(400)
    }
    else if(req.query.done === undefined){
        return res.sendStatus(400)
    }
    else{
        var id = req.params.id
        var name = req.query.text
        var done = req.query.done
        res.sendStatus(200)
        DataWorker.excute_request('UPDATE tasks SET text="'+name+'", done='+done+' WHERE id ="'+id+'";')
    }
})

router.get('/api/init_table', (req, res) => {
    DataWorker.excute_request("CREATE TABLE IF NOT EXISTS tasks (id varchar(250), text varchar(250), done BIT, UNIQUE (id));")
    res.sendStatus(200);
})

router.get('/', (req,res) => {
    res.sendFile(__dirname+"/front/index.html")
})


app.use('/', router)
app.listen(port, hostname, () => console.log("Server Up"))
