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

app.post('/produtos', validMarca, validModelo, validVersao,
validAno, validKm, validObs, controller.createProduct);

app.get('/', (_req, res) => {
  res.send('Bem-vindo(a) à Webmotors! \n Para acessar nossos produtos digite "/produtos" ao final da sua URL')
})

app.listen(PORT, () => console.log(`Webmotors teste rodando na porta ${PORT}`))