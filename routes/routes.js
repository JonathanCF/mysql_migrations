const express = require('express')
const PessoasController = require('../controllers/PessoasController')
const routes = express.Router()

routes.get('/', PessoasController.index)

routes.get('/cadastro', PessoasController.cadastro)

routes.post('/cadastro', PessoasController.salvar)

routes.get('/deletar/:id', PessoasController.deletar)

routes.get('/buscarCep', PessoasController.buscarCep)

routes.get('/create', PessoasController.create)

routes.get('/show/:id', PessoasController.show)

routes.get('/atualizar/:id', PessoasController.update)


module.exports = routes