const maxLength = 45;
const zero = 0;
const campoObrigatorio = {
  error: true, 
  message: 'Este campo é obrigatório', 
  status: 400,
};
const maxCaracter = {
  error: true,
  message: 'Máximo 45 caracteres',
  status: 400,
};
const apenasNum = {
  error: true,
  message: 'Este campo deve conter apenas números',
  status: 400,
};

const validMarca = (req, _res, next) => {
  const { marca } = req.body;
  if(!marca) {
    return campoObrigatorio
  }
  if(marca.length > maxLength) {
    return maxCaracter
  }
  next();
};

const validModelo = (req, _res, next) => {
  const { modelo } = req.body;
  if(!modelo) {
    return campoObrigatorio
  }
  if(modelo.length > maxLength) {
    return maxCaracter
  }
  next();
};

const validVersao = (req, _res, next) => {
  const { versao } = req.body;
  if(!versao) {
    return campoObrigatorio
  }
  if(versao.length > maxLength) {
    return maxCaracter
  }
  next();
};

const validAno = (req, _res, next) => {
  const { ano } = req.body;
  if(!ano) {
    return campoObrigatorio
  }
  if(typeof ano !== 'number') {
    return apenasNum
  }
  next();
};

const validKm = (req, _res, next) => {
  const { quilometragem } = req.body;
  if(quilometragem < zero) {
    return {
      error: true,
      message: 'O campo deve ser maior que 0 (zero)!',
      status: 400
    }
  }
  if(typeof quilometragem !== 'number') {
    console.log(quilometragem);
    return apenasNum
  }
  next();
};

const validObs = (req, _res, next) => {
  const { observacao } = req.body;
  if(!observacao) {
    return campoObrigatorio
  }
  next();
};

module.exports = {
  validMarca,
  validModelo,
  validVersao,
  validAno,
  validKm,
  validObs,
}