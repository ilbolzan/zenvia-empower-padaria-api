# Preparação para executar

## Instalar Node

Baixar em https://nodejs.org/ e instalar

## Instalar as dependências

`npm install`

# Como executar

`node app.js`

# Desafio

## Postman

- Instalar postman (https://dl.pstmn.io/download/latest/win64)
- Importar collection
  - Dentro do Postman abrir o menu "arquivo > importar"
  - Exolher a collection "Padaria.postman_collection.json"

## Executar a API e realizar as chamadas

### Buscar todos os produtos

GET: http://localhost:3000/produtos

### Filtrar por um produto

GET: http://localhost:3000/produtos/pao

### Cadastrar novo produto

POST: http://localhost:3000/produtos
``` json
{
    "nome": "bolacha"
}
```

### Implementar método DELETE para excluir um produto

- Implementar método DELETE https://expressjs.com/en/starter/basic-routing.html
- Validar e devolver mensagem caso o produto não exista
- Remover produto do array
- Realizar chamada ao endpoint e verificar se o produto foi excluído
- - DELETE: http://localhost:3000/produtos/bolacha

### Implementar validação no POST caso o produto já exista

