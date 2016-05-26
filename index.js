'use strict';

var validations = {
	'authentication' : require( './schemas/authentication' ),
	'user'           : require( './schemas/user' )
};

module.exports = validations;
