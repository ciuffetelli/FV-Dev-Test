const { Router } = require("express");
const cors = require('cors')

const commentsController = require("./controllers/commentsController")

const routes = Router();

// routes.options('/', cors())

routes.get('/', commentsController.index)

routes.post('/', commentsController.store)

module.exports = routes;