const axios = require('axios')
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
    static async buscarCep(req, res)
    {
        let cep = '69065030'
            
        let rota = process.env.API_BASE+''+cep+'/json/'

        let endereco = await axios.get(rota)
        .then(function (response) {
          console.log(response.data);
          return response.data
        })
        .catch(function (error) {
          console.error(error);
          return error
        })
        res.render('endereco', {
            endereco: endereco
        })
    }
   
}

module.exports = PessoasController