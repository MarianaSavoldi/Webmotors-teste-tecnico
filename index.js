const express = require('express');

const PORT = 3000;
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bem-vindo(a) à Webmotors! \n Para acessar nossos produtos digite "/produtos" na sua URL')
})

app.listen(PORT, () => console.log(`Webmotors teste rodando na porta ${PORT}`))