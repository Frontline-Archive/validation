'use strict';

var Joi = require( 'joi' );

module.exports = {

	'id'                     : Joi.string().guid().required().description( 'The resource id' ),
	'resourceId'             : Joi.number().integer().required().description( 'The id for the resource itself (e.g. contentId, groupId)' ),
	'type'                   : Joi.any().required().valid( [ 1 ] ).description( 'The resource type (e.g. 1 for content)' ),
	'name'                   : Joi.forbidden(),
	'description'            : Joi.forbidden(),
	'segmentLengthInSeconds' : Joi.forbidden(),
	'dueDate'                : Joi.date().optional().description( 'The due date of observed to complete assigned resource' ),
	'completedDate'          : Joi.date().optional().description( 'The completed date' )

};
