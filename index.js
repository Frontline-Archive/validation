'use strict';

var fs             = require( 'fs' );
var path           = require( 'path' );
var schemaBasePath = path.join( __dirname, 'schemas' );
var schemas        = fs.readdirSync( schemaBasePath );

function validations () {
	var returnObj = {};

	schemas.forEach( function ( value ) {
		returnObj[ value ] = require( path.join( schemaBasePath, value ) );
	} );

	return returnObj;
}

module.exports = validations();
