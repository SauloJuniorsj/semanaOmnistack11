const knex = require('knex'); //importanto knex
const configuration = require('../../knexfile'); // importando configurações do banco de dados

const connection = knex(configuration.development);

module.exports = connection; //exporta a conexão com o banco de dados