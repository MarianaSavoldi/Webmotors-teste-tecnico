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

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { marca, modelo, versao, ano, quilometragem, observacao } = req.body;
    const updatedProd = await service.updateProduct(id, { marca, modelo, versao, ano, quilometragem, observacao });
    if (!updatedProd) {
      return res.status(StatusCodes.NOT_FOUND).send('Produto não encontrado')
    }
    const product = JSON.stringify(updatedProd);
    console.log('--------Olha o produto aqui:', product);
    return res.status(StatusCodes.OK).send(`Produto atualizado com sucesso! \n Produto: ${product}`)
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Oops... Algo deu errado :(');
  }
}

module.exports = { 
  createProduct,
  updateProduct
};
