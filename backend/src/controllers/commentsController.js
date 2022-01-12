const Comments = require('../models/Comments')

module.exports = {

    async index (request, response) {

        const comments = new Comments('comments')

        response.json( await comments.select())
    },

    async store (request, response) {

        const comments = new Comments('comments')
        
        response.json( await comments.insert(request.body))
    }

}