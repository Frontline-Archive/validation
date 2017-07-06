'use strict';

var Joi = require( 'joi' );

module.exports = {
	'Id'          : Joi.string().guid().optional().description( 'The id of the goal' ),
	'Title'       : Joi.string().allow( '' ).required().description( 'The title of the goal' ),
	'CompletedAt' : Joi.date().optional().description( 'When the goal was completed' ),
	'CompletedBy' : Joi.number().integer().positive().max( 16777215 ).optional().description( 'Who completed the goal' ),
	'createdAt'   : Joi.date().optional().description( 'When the goal was created' ),
	'CreatedBy'   : Joi.number().integer().positive().max( 16777215 ).optional().description( 'Who created the goal' )
};
