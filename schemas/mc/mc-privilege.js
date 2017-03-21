'use strict';

var Joi = require( 'joi' );

module.exports = {
	'id'             : Joi.string().guid().optional().description( 'The id of the resource' ),
	'assigneeType'   : Joi.any().valid( [ 'district', 'school', 'user' ] ).required().description( 'The type of assignee' ),
	'assigneeId'     : Joi.string().required().description( 'The id for the assignee' ),
	'privilegeType'  : Joi.any().valid( [ 'view', 'edit', 'submit', 'assess' ] ).required().description( 'The type of privilege' ),
	'constraintType' : Joi.any().valid( [ 'district', 'school', 'user' ] ).optional().description( 'The type of constraint' ),
	'constraintId'   : Joi.string().optional().description( 'The id for the constraint' ),
	'mcId'           : Joi.string().guid().required().description( 'The GUID for the microcredential' )
};
