const { teste_webmotors } = require('../models');

const createProduct = async (product) => {
  return teste_webmotors.create(product);
}

module.exports = { createProduct };
