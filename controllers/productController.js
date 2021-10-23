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
    return res.status(StatusCodes.OK).send(`Produto atualizado com sucesso! \n Produto: ${product}`)
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Oops... Algo deu errado :(');
  }
};

const getAllProducts = async (_req, res) => {
  try {
    const getAll = await service.getAllProducts();
    const products = JSON.stringify(getAll, null, '\t');
    return res.status(StatusCodes.OK).send(`Lista de produtos: ${products}`);
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Oops... Algo deu errado :(');
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const getOne = await service.getById({ id });
    if (getOne === 'Not found!') {
      return res.status(StatusCodes.NOT_FOUND).send('Produto não encontrado');
    }
    const product = JSON.stringify(getOne, null, '\t');
    return res.status(StatusCodes.OK).send(product);
  } catch (error) {
    
  }
};

const removeProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await service.removeProduct({ id });
    return res.status(StatusCodes.OK).send('Produto deletado com sucesso!')
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Oops... Algo deu errado :(');
  }
}

module.exports = { 
  createProduct,
  updateProduct,
  getAllProducts,
  getProductById,
  removeProduct,
};
