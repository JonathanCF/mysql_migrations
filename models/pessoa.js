'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Telefone, {
        as: 'telefones'
      })
    }
  }
  Pessoa.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    data_nascimento: {
      type: DataTypes.DATEONLY,
      get() {
        const rawValue = this.getDataValue('data_nascimento')
        return rawValue ? rawValue.split('-').reverse().join('/') : null
      },
  }
},
  {
    sequelize,
    modelName: 'Pessoa',
    tableName: 'pessoas'
  });
  return Pessoa;
};