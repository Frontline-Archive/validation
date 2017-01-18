'use strict';

var Joi = require( 'joi' );

module.exports = {
	'id'   : Joi.number().integer().required().description( 'The attachment id' ),
	'name' : Joi.string().required().description( 'The attachment name' ),
	'type' : Joi.number().integer().required().description( 'The attachment type' )
};
