'use strict';

var Joi = require( 'joi' );

module.exports = {
	'id'         : Joi.string().guid().optional().description( 'The microcredentials-resource id' ),
	'mcId'       : Joi.string().guid().required().description( 'The microcredentials id the resource belongs to' ),
	'evidenceId' : Joi.string().guid().required().description( 'The resource id' ),
	'groupId'    : Joi.string().guid().optional().description( 'The group id, if resource is part of group' )
};
