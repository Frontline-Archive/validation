'use strict';

var expect = require( 'chai' ).expect;
var Joi    = require( 'joi' );

describe( 'Validate', function () {
	var validate = require( process.cwd() ).validate;

	it( 'should validate successfully', function ( done ) {
		var message = { 'email' : 'miriam@gmail.com' };
		validate( message, { 'email' : Joi.string().email() } )
			.then( function ( val ) {
				expect( message.email ).to.be.equal( val.email );
				done();
			} );
	} );

	it( 'should return Invalid Params when schema unknown', function ( done ) {
		var message = { 'email' : 'miriam@gmail.com' };
		validate( message )
			.catch( function ( error ) {
				expect( error.message ).to.be.equal( 'Invalid Params' );
				done();
			} );
	} );

	it( 'should return Invalid Params when message unknown', function ( done ) {
		validate( null, {} )
			.catch( function ( error ) {
				expect( error.message ).to.be.equal( 'Invalid Params' );
				done();
			} );
	} );

	it( 'should return error', function ( done ) {
		var message = { 'email' : 'miriam.com' };
		validate( message, { 'email' : Joi.string().email() } )
			.catch( function ( error ) {
				expect( error ).to.be.instanceof( Error );
				expect( error.message ).to.be.not.equal( 'Invalid Params' );
				done();
			} );
	} );
} );

