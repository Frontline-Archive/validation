'use strict';

var Promise = require( 'bluebird' );
var Joi     = require( 'joi' );

/*
 * Validate using Hapi JS Joi Validate
 * @params message {Object}
 * 				- object message/value to be validated ( required )
 * @params schema {Object}
 * 				- object or joi object schema for validation ( required )
 * @params options {Object}
 * 			- addition joi options ( optional)
 * 			refer here https://github.com/hapijs/joi/blob/v9.0.0-2/API.md#validatevalue-schema-options-callback )
 *
 * 	@return returns a Promise object
 */

module.exports = function validate ( message, schema, options ) {
	return new Promise( function ( resolve, reject ) {

		// will throw validation error
		if ( !schema || !message ) {
			return reject( new Error( 'Invalid Params' ) );
		}

		Joi.validate( message, schema, options || {}, function ( error, value ) {
			if ( error ) {
				return reject( error );
			}
			resolve( value );
		} );
	} );
};

