require('../bootstrap');

module.exports = {
  dialect: process.env.DB_DIALECT || 'mongodb',
  storage: './__tests__/database.sqlite',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
