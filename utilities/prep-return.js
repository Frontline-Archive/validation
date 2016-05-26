'use strict';

var Joi = require( 'joi' );

module.exports = function ( baseObject, keyArray ) {
	var returnObj;

	if ( !keyArray ) {
		return baseObject;
	} else if ( typeof keyArray === 'string' ) {
		return baseObject[ keyArray ] || Joi.forbidden();
	}

	if ( keyArray.length ) {
		keyArray.forEach( function ( value ) {
			returnObj[ value ] = baseObject[ value ] || Joi.forbidden();
		} );

		return returnObj;
	}

	return baseObject;
};
