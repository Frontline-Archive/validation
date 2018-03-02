'use strict';

var Joi      = require( 'joi' );
var prepUtil = require( '../../utilities/prep-return' );

var userId = Joi.number().integer().positive().max( 16777215 );

module.exports = function ( keyArray ) {
	var baseObject;

	baseObject = {
		'ClientId'        : Joi.number().integer().positive().max( 4294967295 ).description( 'The client id for the user' ),
		'Created'         : Joi.date().description( 'The date the user was created' ),
		'Creator'         : userId.description( 'The user that created this user' ),
		'EmailAddress'    : Joi.string().email().max( 128 ).description( 'The email address for the user' ),
		'FirstName'       : Joi.string().max( 64 ).description( 'The first name for the user' ),
		'IsActivated'     : Joi.any().valid( 0, 1 ).description( 'Whether the account has been activated' ),
		'LastLogin'       : Joi.date().allow( null ).description( 'The date that the user last logged in' ),
		'LastName'        : Joi.string().max( 64 ).description( 'The last name for the user' ),
		'LicenseAccepted' : Joi.date().allow( null ).description( 'The date that the user accepted the license' ),
		'LicenseInitials' : Joi.string().allow( null, '' ).max( 10 ).description( 'The initials the user used for accepting the license' ),
		'LoginCount'      : Joi.number().integer().positive().max( 5 ).allow( 0 ).description( 'The number of times the user has logged in' ),
		'LoginName'       : Joi.string().max( 128 ).description( 'The login name for the user' ),
		'Modified'        : Joi.date().description( 'The date the user was modified' ),
		'Modifier'        : userId.description( 'The user that modified this user' ),
		'Password'        : Joi.string().max( 25 ).description( 'The encrypted password for the user' ),
		'PersonnelId'     : userId.description( 'The personnel id of the user' ),
		'Removed'         : Joi.date().description( 'The date the user was removed' ),
		'Remover'         : userId.description( 'The user that removed this user' ),
		'RoleTypeId'      : Joi.any().valid( 1, 3, 4 ).description( 'The role type id for the user' ).notes( [ '1 : user', '2 : NOT USED', '3 : SINET Employee', '4 : Trial User (on its way out, not sure if it\'s used' ] ),
		'UseWizards'      : Joi.any().valid( 0, 1 ).description( 'Whether the user should use the wizards' ).notes( 'This might no longer be used' ),
		'Verified'        : Joi.date().description( 'Whether the account has been verified' )
	};

	return prepUtil( baseObject, keyArray );
};
