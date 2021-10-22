const { StatusCodes } = require('http-status-codes');
const service = require('../services/productService');

const createProduct = async (req, res) => {
  try {
    const { marca, modelo, versao, ano, quilometragem, observacao } = req.body;
    const newProduct = await service.createProduct({marca, modelo, versao, ano, quilometragem, observacao});
    if (newProduct.error) {
      return res.status(newProduct.status).json({ message: newProduct.message })
    }
    const product = JSON.stringify(newProduct)
    return res.status(StatusCodes.CREATED).send(`Produto criado com sucesso! \n Produto: ${product}`);  
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Oops... Algo deu errado :(');
  }
};

module.exports = { createProduct };
