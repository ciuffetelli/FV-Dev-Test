const sqlite3 = require('sqlite3').verbose()

class Database {

    databaseFilePath = './src/database/database.db'

    connect(){
        return new sqlite3.Database(this.databaseFilePath, sqlite3.OPEN_READWRITE, (error) => {

            if(error) return console.error(error.message)

            console.log("Connected to SQLITE")
        })
    }

    select(parans) {

        const db = this.connect()

        const sqlParans = {
            columns: parans.fields || '*',
            table: `${parans.table} ` || '',
            where: (parans.where) ? ` WHERE ${parans.where} ` : '',
            order: (parans.order) ? ` ORDER BY ${parans.order} ` : ' ORDER BY id '
        }        

        const sql = `Select ${sqlParans.columns} FROM ${sqlParans.table}${parans.where}${parans.order}`       

        return new Promise((resolve, reject) => {

            db.all(sql, [], (error, rows) => {

                if(error) return reject(error.message)
    
                resolve(rows)
            })

            db.close();
        })
    }

    insert(parans) {

        const db = this.connect()

        const sqlParans = {
            columns: parans.columns || [],
            table: `${parans.table} ` || '',
            values: parans.values || []
        }

        const placeholders = sqlParans.values.map( columns => ('(?)')).join(',')
        
        const sql = `INSERT INTO ${sqlParans.table} (${sqlParans.columns.join(',')}) VALUES (${placeholders})`

        return new Promise( (resolve, reject) => {

            db.run(sql, sqlParans.values, error => {

                if(error) return reject(error)

                resolve()
            })
        })
    }
}

module.exports = Database

// const sqlite3 = require('sqlite3').verbose()

// const databaseFilePath = './src/database/database.db'

// var table = ''

// function connect(){

//     return new sqlite3.Database('./src/database/database.db', sqlite3.OPEN_READWRITE, (error) => {

//         if(error) return console.error(error.message)

//         console.log("Connected to SQLITE")
//     })
// }

// function select(parans, response) {

//     const db = connect()

//     const sqlParans = {
//         fields: parans.fields || '*',
//         table: `${parans.table} ` || '',
//         where: (parans.where) ? ` WHERE ${parans.where} ` : '',
//         order: (parans.order) ? ` ORDER BY ${parans.order} ` : ' ORDER BY id '
//     }

//     const sql = `Select ${sqlParans.fields} FROM ${sqlParans.table}${parans.where}${parans.order}`

//     db.all(sql, [], (error, rows) => {

//         if(error) return console.error(error.message)

//         response(rows)
//     })

//     db.close();
// }

// function insert(data, table) {

//     const column = Object.keys(data)
//     const value = Object.values(data)

//     console.log(column)

//     // const sql = `INSERT INTO ${table} VALUES`

// }

// module.exports = {
//     connect,
//     setTable: (tableName) => {
//         table = tableName
//     },

//     select,
//     insert,
// }