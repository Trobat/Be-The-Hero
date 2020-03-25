const express = require('express');
const crypto = require('crypto');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SectionController = require('./controllers/SectionController');

const routes = express.Router();

routes.post('/sessions', SectionController.create)

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);



routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.post('/incidents')

module.exports = routes;

/* 
* Rota / Recurso 
*/

/**
 * Metodos HTTP
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após o "?" (Filtros, paginação)
 * Route Params: Parâmetros usados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle. Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc.
  */

/**
 * Driver: SELECT * FROM user
 *  Query Builder: table('users).select('*').where()
 */