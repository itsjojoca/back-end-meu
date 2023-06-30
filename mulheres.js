const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Joyce Rodrigues', 
        imagem: 'https://drive.google.com/file/d/18T5qn_svnBq-DQDLPntXhFZOX8NDw4Fb/view?usp=drive_link',
        minibio: 'Historiadora do Patrimônio'
    }, 
    {
        nome: 'Iana Chan',
        imagem: 'https://drive.google.com/file/d/1uhWMPiFsFYXwM0IrP-GvKAGxzarcxu15/view?usp=drive_link',
        minibio: 'Fundadora da Programaria'
    }, 
    {
        nome: 'Nina da Hora', 
        imagem: 'https://drive.google.com/file/d/1I4pRmxgrwZZ1p9jfpBQx0_ftMTbyHJzr/view?usp=drive_link',
        minibio: 'Hacker antirracista'
    }


]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)