'use strict';

var Joi = require( 'joi' );

module.exports = {
	'id'          : Joi.string().guid().required().description( 'The template reference file id' ),
	'type'        : Joi.any().valid( [ 18 ] ).required().description( 'The evidence type (e.g. 18 for instructional files)' ),
	'name'        : Joi.string().required().description( 'The template reference name' ),
	'description' : Joi.string().optional().description( 'The template reference file name' )
};
