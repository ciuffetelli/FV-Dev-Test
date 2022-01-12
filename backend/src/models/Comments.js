const striptags = require('striptags')
const Database = require('../database/database')

class Comments {

    database
    tableName
    columns = ['firstName', 'surname', 'email', 'tel', 'gender', 'birth', 'comments']

    constructor(tableName) {
        this.tableName = tableName
        this.database = new Database()        
    }

    sanitization(data) {

        const dataSanitized = {}

        Object.keys(data).map( (key) => {
            dataSanitized[striptags(key)] = striptags(data[key])
        })

        return dataSanitized
    }

    validate(data) {
        const columns = Object.keys(data)
        const values = Object.values(data)

        if(JSON.stringify(this.columns) !== JSON.stringify(columns)) return false

        return !(values.includes(''))
    }

    async select() {
        return await this.database.select({
            table: this.tableName
        })
    }

    async insert(data) {

        data = this.sanitization(data)

        if(!this.validate(data)) return undefined

        const columns = Object.keys(data)
        const values = Object.values(data)


        return await this.database.insert({
            columns,
            table: this.tableName,
            values
        })
    }
}

module.exports = Comments