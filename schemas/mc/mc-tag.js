'use strict';

var Joi = require( 'joi' );

module.exports = {
	'id'    : Joi.string().guid().optional().description( 'The microcredentials-tag id' ),
	'mcId'  : Joi.string().guid().required().description( 'The microcredentials id the tag belongs to' ),
	'tagId' : Joi.number().integer().positive().max( 65535 ).required().description( 'The tag id' )
};
