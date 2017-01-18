'use strict';

var Joi = require( 'joi' );

module.exports = {

	'title'       : Joi.string().required().description( 'The rubric column name -- Sanitizes HTML' ),
	'description' : Joi.string().required().description( 'The rubric column description -- Sanitizes HTML' ),
	'minRange'    : Joi.number().required().description( 'The minimum score for the range' ),
	'maxRange'    : Joi.number().required().description( 'The maximum score for the range' ),
	'selected'    : Joi.forbidden().description( 'Boolean to show whether a column is selected. We\'re not saving these, just calculating/returning on a get' )

};
