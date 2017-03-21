'use strict';

var Joi = require( 'joi' );

module.exports = {
	'id'            : Joi.string().guid().optional().description( 'The feedback id' ),
	'affiliateType' : Joi.any().valid( [ 'evidence', 'microcredential' ] ).required().description( 'The feedback type' ),
	'affiliateId'   : Joi.string().guid().required().description( 'The affiliiate id' ),
	'feedbackId'    : Joi.string().guid().required().description( 'The feedback id' )
};
