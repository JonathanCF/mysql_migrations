const path = require('path')
let pessoas = []
let alerta = false

class PessoasController {
    static index(req,res)
    {
        if(pessoas.length > 0){
            alerta = false
        }else{
            alerta = true
        }
        res.render('index', {
            pessoas: pessoas,
            alerta: alerta
        })

    }
    static cadastro(req, res)
    {
        res.render('cadastro')
    }
    static salvar(req, res)
    {
        pessoas.push(req.body)
        res.redirect('/cadastro')
    }
    static excluir(req, res)
    {
        pessoas.splice(req.body)
        res.redirect('/')
    }
   
}

module.exports = PessoasController