'use strict';

var Joi = require( 'joi' );

module.exports = {
	'id'             : Joi.string().guid().optional().description( 'The group id' ),
	'title'          : Joi.string().required().description( 'The group title' ),
	'description'    : Joi.string().required().description( 'The group description' ),
	'numberRequired' : Joi.number().integer().positive().required().description( 'The number required to complete group' )
};
