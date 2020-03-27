const express = require('express');
const { celebrate, Segments, Joi  } = require('celebrate');
const crypto = require('crypto');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SectionController = require('./controllers/SectionController');

const routes = express.Router();

routes.post('/sessions', celebrate({
  [Segments.BODY]: Joi.object().keys({
    id: Joi.string().required(),
  })
}), SectionController.create)

routes.get('/ongs', OngController.index);
/**
 * Query
 * Route
 * Body
 */

routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(10).max(11),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2),
  })

}), OngController.create);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);


routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    pages: Joi.number(),
  })
}), IncidentController.index);


routes.post('/incidents', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),

  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    value: Joi.number().required(),
  })
}), IncidentController.create);


routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  })
}), IncidentController.delete);

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