'use strict';

var validations = {
	'authentication' : require( './schemas/authentication' ),
	'user'           : require( './schemas/user' ),
	'observation'    : require( './schemas/observation' )
};

module.exports = validations;
