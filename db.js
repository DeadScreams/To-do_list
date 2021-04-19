const sqlite3 = require('sqlite3').verbose();

class Database_Worker {
    constructor(database_name) {
        this.db = new sqlite3.Database(database_name, (err) =>{
        if (err) {
            return console.error(err.message);
        }
        console.log('Connected to the database.')
        })
    }

    excute_request(query){
        this.db.run(query, err => {
            if (err) throw err;
        })
    }

    async excute_request_all(query){
        var promise = new Promise((resolve, reject) => {
            this.db.all(query, [], (err, rows) => {
                if (err) {
                    reject(err);
                    throw err
                }
                // return rows
                resolve(rows);
            })
        })

        return promise;
    }

    close_database(){
        this.db.close((err) => {
            if (err) {
                return console.error(err.message);
            }
            console.log('Close the database connection.')
        })
    }
}


// let sql = `INSERT INTO tasks VALUES(1, "Win ban", 0);`
let sql = `SELECT * FROM tasks;`

const Worker = new Database_Worker("db.db")
// console.log(Worker.excute_request_all(sql))
Worker.excute_request_all(sql).then(rows => {
    console.log(rows);
    Worker.close_database()
})