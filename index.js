const express = require('express');

const { 
  validMarca,
  validModelo,
  validVersao,
  validAno,
  validKm,
  validObs, } = require('./middlewares/validations')
const controller = require('./controllers/productController');

const PORT = 3000;
const app = express();

app.use(express.json());

// Criar um novo produto
app.post('/produtos', validMarca, validModelo, validVersao,
validAno, validKm, validObs, controller.createProduct);

// Atualizar um produto
app.put('/produtos/:id', controller.updateProduct);

// Consultar todos os produtos
app.get('/produtos', controller.getAllProducts);

// Consultar um único produto
app.get('/produtos/:id', controller.getProductById);

// Remover um produto da lista
app.delete('/produtos/:id', controller.removeProduct);

app.get('/', (_req, res) => {
  res.send('Bem-vindo(a) à Webmotors! \n Para acessar nossos produtos digite "/produtos" ao final da sua URL')
})

app.listen(PORT, () => console.log(`Webmotors teste rodando na porta ${PORT}`))