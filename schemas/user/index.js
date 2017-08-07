'use strict';

var complete = require( './complete' );

var validations = {
	'complete'    : complete,
	'credentials' : require( './credentials' ),

	'id'       : complete( 'PersonnelId' ),
	'password' : complete( 'Password' ),
	'email'    : complete( 'Password' )
};

module.exports = validations;
