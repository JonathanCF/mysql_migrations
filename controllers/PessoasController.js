const axios = require('axios')
const { Pessoa, Telefone } = require('../models/')
let pessoas = []
let alerta = false

class PessoasController {
    static async index(req,res)
    {
    const pessoas = await Pessoa.findAll({include: 'telefones'})
        res.render('index', {
            pessoas: pessoas
        })
    }
    static cadastro(req, res)
    {
        res.render('cadastro')
    }

    static async show(req, res)
    {
        var id = req.params.id
        const pessoa = await Pessoa.findByPk(id)

        console.log(pessoa)
    }

    static async update(req, res)
    {
        let id = req.params.id
        //let nome = req.body.nome
        //let email = req.body.email
        //let data_nascimento = req.body.data_nascimento
        
        const pessoa = await Pessoa.findByPk(id)
        pessoa.nome = "teste"
        //pessoa.email = email
        //pessoa.data_nascimento = data_nascimento
        pessoa.save();
        console.log(pessoa)
        res.redirect('/')
    }

    static async salvar(req, res)
    {
        try{
            const pessoa = await Pessoa.create({
                nome: req.body.nome,
                email: req.body.email,
                data_nascimento: req.body.data_nascimento,
            })
                await Telefone.create({
                    numero: req.body.numero,
                    pessoaId: pessoa.id

            })
            res.redirect('/')

            }catch(error){
                console.log(error.message)
                res.redirect('/')
            }
            
        }
    static async deletar(req, res)
    {
        try{
            const pessoa = await Pessoa.findByPk(req.params.id)
            pessoa.destroy()
            res.redirect('/')
        }catch(error){
            console.log(error.message)
        }
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
    static async create(req, res)
    {

        const pessoa = await Pessoa.create({
            nome: 'Paula',
            data_nascimento: '04/03/1991',
            email: 'paula@gmail.com'
        
       
        })
        res.redirect('/')
    }
   
}

module.exports = PessoasController