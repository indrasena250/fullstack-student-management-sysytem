const Sequelize = require('sequelize');
const dbConfig = require('../config/db.config');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: dbConfig.pool
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models
db.Student = require('./student.model')(sequelize, Sequelize);
db.Teacher = require('./teacher.model')(sequelize, Sequelize);
db.Class = require('./class.model')(sequelize, Sequelize);

// Associations
db.Class.hasMany(db.Student, { as: 'students' });
db.Student.belongsTo(db.Class, { foreignKey: 'classId', as: 'class' });

module.exports = db;
