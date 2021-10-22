const Product = (sequelize, DataTypes) => {
  const product = sequelize.define('teste_webmotors', {
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING,
    versao: DataTypes.STRING,
    ano: DataTypes.INTEGER,
    quilometragem: DataTypes.INTEGER,
    observacao: DataTypes.TEXT,
  },
  {
    timestamps: false,
    tablename: 'teste_webmotors'
  });

  return product;
};

module.exports = Product;