'use strict';

var Joi = require( 'joi' );

module.exports = {

	'consumerOnly' : Joi.object( {
		'x-engine-id'     : Joi.string().required().description( 'Application id' ),
		'x-engine-secret' : Joi.string().required().description( 'Application secret' )
	} ).unknown(),

	'required' : Joi.object( {
		'authorization'   : Joi.string().required().description( 'Bearer token' ),
		'x-engine-id'     : Joi.string().required().description( 'Application id' ),
		'x-engine-secret' : Joi.string().required().description( 'Application secret' )
	} ).unknown()

};
