'use strict';

var Joi = require( 'joi' );

module.exports = {
	'id'                   : Joi.string().guid().optional().description( 'The microcredentials-metum id' ),
	'mcId'                 : Joi.string().guid().required().description( 'The microcredentials id' ),
	'overallPurpose'       : Joi.string().required().allow( [ null, '' ] ).description( 'The purpose of the microcredentials' ),
	'badgeFilename'        : Joi.string().required().description( 'The microcredentials\'s badge location' ),
	'requiredCompetencies' : Joi.string().required().allow( [ null, '' ] ).description( 'The requirements to complete the mc' )
};
