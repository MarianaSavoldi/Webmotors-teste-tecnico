const { teste_webmotors } = require('../models');

const createProduct = async (product) => {
  return teste_webmotors.create(product);
};

const updateProduct = async (idParam, { marca, modelo, versao, ano, quilometragem, observacao }) => {
  const productId = await teste_webmotors.findByPk(idParam);
  if (!productId) {
    return 'Not found!';
  }
  const { id } = productId.dataValues;
  await teste_webmotors.update(
    { marca, modelo, versao, ano, quilometragem, observacao },
    { where: { id } }
  );
  const updatedProd = await teste_webmotors.findByPk(idParam);
  const { dataValues } = updatedProd
  if (!dataValues) {
    return 'Not found!';
  }
  return dataValues;
};

const getAllProducts = async () => {
  return teste_webmotors.findAll();
};

const getById = async ({ id }) => {
  const get = await teste_webmotors.findByPk(id);
  if (!get) {
    return 'Not found!';
  }
  return get;
};

module.exports = { 
  createProduct,
  updateProduct,
  getAllProducts,
  getById,
};
