module.exports = (sequelize, DataTypes) => {
  const Class = sequelize.define('class', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false }
  });
  return Class;
};
