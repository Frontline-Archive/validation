'use strict';

var Joi = require( 'joi' );

module.exports = {
	'id'          : Joi.string().guid().optional().description( 'The id of the resource' ),
	'title'       : Joi.string().required().description( 'The title of the resource' ),
	'description' : Joi.string().required().description( 'The description of the resource' ),
	'type'        : Joi.any().valid( [ 'file' ] ).required().description( 'The type of the evidence' ),
	'customId'    : Joi.string().required().description( 'The id of the type' )
};
