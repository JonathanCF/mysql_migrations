'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Telefone extends Model {

    static associate(models) {
    }
  }
  Telefone.init({
    numero: DataTypes.STRING,
    pessoaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Telefone',
    tableName: 'telefones'
  });
  return Telefone;
};