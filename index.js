'use strict';

var validations = {
	'authentication' : require( './schemas/authentication' ),
	'user'           : require( './schemas/user' ),
	'validate'       : require( './lib/validate' )
};

module.exports = validations;
