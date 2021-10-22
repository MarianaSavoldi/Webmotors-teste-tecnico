const { teste_webmotors } = require('../models');

const createProduct = async (product) => {
  return teste_webmotors.create(product);
};

const updateProduct = async (idParam, product) => {
  const productId = await teste_webmotors.findOne({ where: { id: idParam } });
  if (!productId) {
    return 'Not found!';
  }
  const { id } = productId.dataValues;
  console.log('--------Esse é o productId:', productId.dataValues);
  console.log('--------Esse é o id:', id);
  const update = await teste_webmotors.update({ where: { id }, ...product });
  console.log('--------Atualizou o produto:', update);
};

module.exports = { 
  createProduct,
  updateProduct,
};
