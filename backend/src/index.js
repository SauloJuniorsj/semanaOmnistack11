const express = require('express');
const routes = require('./routes'); //o "." referencia a mesma pasta do arquivo index
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
/**
 * get: busca info do backend /acessa a rota do navegador
 * post: cria info no backend
 * put : altera info no backend
 * delete : deleta info no backend
 */

/**
 * Tipos de parâmetros:
 *
 * Query Params: parâmetros nomeados enviados na rota após o ? serve pra Filtros, paginação
 * Route Params: parâmetros utilizados para identificar recursos.
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */


