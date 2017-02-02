'use strict';

var Joi = require( 'joi' );

module.exports = function () {
	var schema = Joi.object().keys( {
		'oauth_callback'                   : Joi.string().optional().description( 'Open Authorization callback url' ),
		'oauth_consumer_key'               : Joi.string().required().description( 'Open Authorization key' ),
		'oauth_nonce'                      : Joi.string().required().description( 'Open Authorization number used once' ),
		'oauth_signature_method'           : Joi.string().valid( 'HMAC-SHA1' ).required().description( 'Open Authorization method for building signature' ),
		'oauth_signature'                  : Joi.string().required().description( 'Open Authorization built signature' ),
		'oauth_timestamp'                  : Joi.string().required().description( 'Open Authorization timestamp' ),
		'oauth_version'                    : Joi.string().valid( '1.0' ).required().description( 'Open Authorization version number' ),
		'lis_person_contact_email_primary' : Joi.string().email().required().description( 'The user\'s email' ),
		'lis_person_name_given'            : Joi.string().required().description( 'The user\'s first name' ),
		'lis_person_name_family'           : Joi.string().required().description( 'The user\'s last name' ),
		'lis_person_name_full'             : Joi.string().required().description( 'The user\'s full name' ),
		'lti_message_type'                 : Joi.string().valid( 'basic-lti-launch-request' ).required().description( 'The LTI message type' ),
		'lti_version'                      : Joi.string().valid( 'LTI-1p0' ).required().description( 'The LTI version' ),
		'resource_link_id'                 : Joi.string().optional().description( 'Resource id' ),
		'user_id'                          : Joi.string().required().description( 'The user\'s id' ),
		'roles'                            : Joi.string().optional().description( 'The user\'s role' ),
		'custom_location_id'               : Joi.string().required().description( 'The user\'s location id' )
	} ).unknown();

	return schema;
};
