module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('teste_webmotors',
    [
      {
        "ID": 1,
        "marca": "Honda",
        "modelo": "City",
        "versao": "2.0 EXL 4X4 16V GASOLINA 4P AUTOMÁTICO",
        "ano": 2018,
        "quilometragem": 0,
        "observacao": "Cor: Azul, Fabricado em: 2017, Preço médio: 59000,00"
      },
      {
        "ID": 2,
        "marca": "Mitsubishi",
        "modelo": "Lancer",
        "versao": "2.0 EVO 4P AUTOMÁTICO",
        "ano": 2012,
        "quilometragem": 47500,
        "observacao": "Cor: Branco, Fabricado em: 2012, Preço médio: 49000,00"
      },
      {
        "ID": 3,
        "marca": "Honda",
        "modelo": "Fit",
        "versao": "1.4 LXL 16V FLEX 4P AUTOMÁTICO",
        "ano": 2018,
        "quilometragem": 0,
        "observacao": "Cor: Preto, Fabricado em: 2018, Preço médio: 78000,00"
      },
      {
        "ID": 4,
        "marca": "Mitsubishi",
        "modelo": "Lancer",
        "versao": "2.0 EVO 4P AUTOMÁTICO",
        "ano": 2016,
        "quilometragem": 12900,
        "observacao": "Cor: Vermelho, Fabricado em: 2015, Preço médio: 59000,00"
      },
      {
        "ID": 5,
        "marca": "Honda",
        "modelo": "Fit",
        "versao": "1.4 LXL 16V FLEX 4P AUTOMÁTICO",
        "ano": 2016,
        "quilometragem": 12000,
        "observacao": "Cor: Azul, Fabricado em: 2016, Preço médio: 55000,00"
      },
      {
        "ID": 6,
        "marca": "Chevrolet",
        "modelo": "Agile",
        "versao": "1.4 MPFI EFFECT 8V FLEX 4P AUTOMATIZADO",
        "ano": 2014,
        "quilometragem": 12000,
        "observacao": "Cor: Vermelho, Fabricado em: 2013, Preço médio: 37000,00"
      },
      {
        "ID": 7,
        "marca": "Chevrolet",
        "modelo": "Agile",
        "versao": "1.4 MPFI EFFECT 8V FLEX 4P AUTOMATIZADO",
        "ano": 2018,
        "quilometragem": 0,
        "observacao": "Cor: Cinza, Fabricado em: 2017, Preço médio: 45000,00"
      },
      {
        "ID": 8,
        "marca": "Ford",
        "modelo": "Ecosport",
        "versao": "1.6 FREESTYLE 16V FLEX 4P MANUAL",
        "ano": 2013,
        "quilometragem": 93000,
        "observacao": "Cor: Branco, Fabricado em: 2012, Preço médio: 45000,00"
      },
      {
        "ID": 9,
        "marca": "Chevrolet",
        "modelo": "Agile",
        "versao": "1.4 MPFI EFFECT 8V FLEX 4P AUTOMATIZADO",
        "ano": 2014,
        "quilometragem": 12000,
        "observacao": "Cor: Vermelho, Fabricado em: 2013, Preço médio: 37000,00"
      },
      {
        "ID": 10,
        "marca": "Honda",
        "modelo": "Fit",
        "versao": "1.4 LXL 16V FLEX 4P AUTOMÁTICO",
        "ano": 2016,
        "quilometragem": 12000,
        "observacao": "Cor: Azul, Fabricado em: 2016, Preço médio: 55000,00"
      }
    ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('teste_webmotors', null, {});
  },
};