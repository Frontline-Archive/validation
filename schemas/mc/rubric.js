'use strict';

var Joi  = require( 'joi' );

module.exports = {
	'id'          : Joi.string().guid().optional().description( 'The rubric id' ),
	'title'       : Joi.string().required().description( 'The rubric column name' ),
	'description' : Joi.string().required().description( 'The rubric column description' ),
	'isComplete'  : Joi.boolean().required().description( 'Whether this completes the evidence' )
};
