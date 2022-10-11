const express = require('express')
const bp = require('body-parser')

const app = express()
const port = 3000

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

const arrayDeProdutos = [
    'pao de forma', 
    'pao frances', 
    'cookie'
]

app.get('/produtos', (req, res) => {
    res.send(arrayDeProdutos)
})

app.get('/produtos/:q', (req, res) => {
    const produtosFiltrados = arrayDeProdutos.filter((produto) => {
        return produto.includes(req.params.q)
    })
    res.send(produtosFiltrados)
})

app.post('/produtos', (req, res) => {
    const nomeProduto = req.body.nome
    arrayDeProdutos.push(nomeProduto)
    res.send(`Produto ${nomeProduto} adicionado`)
})

app.listen(port, () => {
    console.log(`Aplicação rodando na porta ${port}`)
})
