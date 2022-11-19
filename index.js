const express = require('express')
const app = express()
const { engine } = require('express-handlebars')
const helpers = require('./helpers/handlebar')
require('dotenv').config()


app.engine('handlebars', engine({
    helpers: helpers,
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
}))

app.set('view engine', 'handlebars')

const routes = require('./routes/routes')

app.use(express.urlencoded({extended:true}))

app.use('/', routes)

app.listen(process.env.PORTA, ()=>{
    console.log('Server Rodando na porta http://localhost:'+ process.env.PORTA)
})