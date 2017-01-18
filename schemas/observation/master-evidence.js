'use strict';

var Joi = require( 'joi' );

module.exports = {

	'id'          : Joi.string().guid().required().description( 'The evidence id' ),
	'type'        : Joi.any().valid( [ 3, 4, 5, 6, 7, 8 ] ).required().description( 'The evidence type (e.g. 3 for file, 4 for comment, 5 for image, 6 for counter, 7 for timer, 8 for scripting' ),
	'name'        : Joi.string().required().description( 'The evidence name' ),
	'description' : Joi.string().optional().description( 'The evidence description' ),
	'url'         : Joi.string().optional().description( 'The evidence location' ),
	'scope'       : Joi.string().required().description( 'The scope of the evidence' ),
	'timestamp'   : Joi.string().optional().description( 'When the evidence was assigned' )
};
