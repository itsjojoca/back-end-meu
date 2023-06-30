const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: 'Joyce Rodrigues',
        imagem: 'https://drive.google.com/file/d/18T5qn_svnBq-DQDLPntXhFZOX8NDw4Fb/view?usp=drive_link',
        minibio: 'Historiadora do patrimonio'
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)