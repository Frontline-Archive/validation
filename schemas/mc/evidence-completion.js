'use strict';

var Joi = require( 'joi' );

module.exports = {
	'id'             : Joi.string().guid().optional().description( 'The microcredentials-metum id' ),
	'evidenceId'     : Joi.string().guid().required().description( 'The microcredentials id' ),
	'userId'         : Joi.string().required().description( 'The user id completing the evidence' ),
	'completionData' : Joi.object().required().description( 'The data completion' ),
	'completedAt'    : Joi.date().required().description( 'The complete date' )
};
