'use strict';

var validations = {
	'authentication' : require( './schemas/authentication' ),
	'lti'            : require( './schemas/lti' ),
	'observation'    : require( './schemas/observation' ),
	'user'           : require( './schemas/user' )
};

module.exports = validations;
