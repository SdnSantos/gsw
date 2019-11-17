"use strict";require('../bootstrap');

module.exports = {
  dialect: process.env.DB_DIALECT,
  storage: './__tests__/database.sqlite',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
