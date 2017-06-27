'use strict';

var Joi = require( 'joi' );

var signatureInfo = {
	'id'      : Joi.number().integer().required().description( 'personel id of the one signing' ),
	'sign'    : Joi.string().required().description( 'string that the user inputs for digital signatures' ),
	'date'    : Joi.date().timestamp().raw().required().description( 'The date of which the user signed the observation' ),
	'isValid' : Joi.boolean().required().description( 'flag that determines if the signature is valid or not' )
};

module.exports = {
	'observer' : Joi
		.array()
		.optional()
		.items( Joi
			.object()
			.optional()
			.keys( signatureInfo ) )
		.description( 'digital signature info for observer' ),

	'observee' : Joi
		.array()
		.optional()
		.items( Joi
			.object()
			.optional()
			.keys( signatureInfo ) )
		.description( 'digital signature info for observee' ),

	'reviewers' : Joi
		.array()
		.optional()
		.items( Joi
			.object()
			.optional()
			.keys( signatureInfo ) )
		.description( 'digital signature info for observee' )
};
