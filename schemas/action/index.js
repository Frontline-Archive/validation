'use strict';

var Joi = require( 'joi' );

module.exports = {
	'id'        : Joi.string().guid().optional().description( 'The id of the event' ),
	'namespace' : Joi.any().valid( [ 'edivate-feedback', 'gatewayCfm', 'login', 'pdVideo', 'RecommendationWidgets', 'search' ] ).required().description( 'The category of the thing (for example, group or video' ),
	'user'      : Joi.string().required().description( 'The id of the user doing the action' ),
	'action'    : Joi.string().required().description( 'The description-word of the action (e.g. likes or dislikes' ),
	'thing'     : Joi.string().required().description( 'The id of the item being acted on' ),
	'meta'      : Joi.object().optional().description( 'Extra data to be stored for the action' )
};
