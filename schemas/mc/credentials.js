'use strict';

var Joi = require( 'joi' );

module.exports = {
	'PersonnelId' : Joi.number().integer().required().description( 'The user\'s id' ),
	'ClientId'    : Joi.number().integer().required().description( 'The id of the school' ),
	'DistrictId'  : Joi.number().integer().required().description( 'The id of the district' )
};
