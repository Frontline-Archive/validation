'use strict';

var Joi = require( 'joi' );

module.exports = {
	'id'              : Joi.string().guid().optional().description( 'The microcredentials-association id' ),
	'mcId'            : Joi.string().guid().required().description( 'The microcredentials id' ),
	'associationType' : Joi.any().valid( [ 'public', 'district', 'school' ] ).required().description( 'The type of association' ),
	'associationId'   : Joi.when( 'associationType', {
		'is'        : [ 'district', 'school' ],
		'then'      : Joi.number().integer().positive().required().description( 'Th id of the association type' ),
		'otherwise' : Joi.forbidden()
	} )
};
