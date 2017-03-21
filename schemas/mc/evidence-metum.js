'use strict';

var Joi = require( 'joi' );

module.exports = {
	'id'           : Joi.string().guid().optional().description( 'The microcredentials-metum id' ),
	'evidenceId'   : Joi.string().guid().required().description( 'The microcredentials id' ),
	'attachedFile' : Joi.string().optional().description( 'The evidence of learning file location' ),
	'rubric'       : Joi.array().items( Joi.object( require( './rubric' ) ) ).description( 'The evidence rubric data' )
};
