const express = require('express')
const PessoasController = require('../controllers/PessoasController')
const routes = express.Router()

routes.get('/', PessoasController.index)

routes.get('/cadastro', PessoasController.cadastro)

routes.post('/cadastro', PessoasController.salvar)

routes.get('/excluir', PessoasController.excluir)

routes.get('/buscarCep', PessoasController.buscarCep)


module.exports = routes