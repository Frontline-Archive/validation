'use strict';

var Joi = require( 'joi' );

module.exports = {
	'id'          : Joi.string().guid().optional().description( 'The microcredentials id' ),
	'title'       : Joi.string().required().description( 'The microcredentials title' ),
	'description' : Joi.string().required().description( 'The microcredentials description' ),
	'level'       : Joi.any().valid( [ 'basic', 'premium' ] ).required().description( 'The level for the mc' ),
	'creator'     : Joi.string().required().description( 'The id of the microcredentials creator' ),
	'issuer'      : Joi.string().required().description( 'The id of the microcredentials issuer' ),
	'startDate'   : Joi.date().required().description( 'The mc start date' ),
	'endDate'     : Joi.date().required().description( 'The mc end date' ),
	'expireDate'  : Joi.date().required().description( 'The mc expire date' ),
	'recordState' : Joi.string().valid( [ 'draft', 'publish' ] ).optional().description( 'The edit state of the mc: e.g. draft, publish' ),
	'parentMcId'  : Joi.string().guid().optional().description( 'The parent\'s microcredential id, the old version microcredential id' )
};
