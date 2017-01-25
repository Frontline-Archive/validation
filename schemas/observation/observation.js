'use strict';

var Joi = require( 'joi' );

module.exports = function ( level ) {
	var schema = {
		// Observation id
		'id' : Joi.string().guid().required().description( 'The observation uuid' ),

		// Observation name
		'name' : Joi.string().required().description( 'The name of the observation' ),

		// Observer details
		'observer' : Joi.object().required().keys( {
			'id'        : Joi.number().integer().required().description( 'Observer should have id' ),
			'firstName' : Joi.forbidden(),
			'lastName'  : Joi.forbidden()
		} ).description( 'The observer information' ),

		// Observee details
		'observee' : Joi.object().required().keys( {
			'id'        : Joi.number().integer().required().description( 'Observee should have id' ),
			'firstName' : Joi.forbidden(),
			'lastName'  : Joi.forbidden()
		} ).description( 'The observee information' ),

		// Location
		'location' : Joi.object().required().keys( {
			'observeeClientId' : Joi.number().required().description( 'The id of the location' ),
			'state'            : Joi.forbidden(),
			'districtName'     : Joi.forbidden(),
			'schoolName'       : Joi.forbidden()
		} ).description( 'The location of the observation' ),

		// Dates portion
		'scheduledDate' : Joi.date().optional().description( 'The date the observation is scheduled for' ),
		'startDate'     : Joi.date().required().description( 'The observation start date' ),
		'endDate'       : Joi.date().optional().description( 'The observation due date' ),
		'submitDate'    : Joi.date().optional().description( 'When the observation was submitted' ),

		'partialSubmission' : Joi.boolean().required().description( 'If observation is partially completed' ),
		'inReview'          : Joi.boolean().optional().description( 'If observation is in review' ),

		/*
		 * We were told there might be times where a user would want multiple types (e.g. a formal self assessment)
		 */

		'type' : Joi.array().optional().description( 'The type of the observation' ),

		/*
		 * CONCERNS
		 *
		 * Iterate and validate the values inside the tags
		 * Joi cant handle this but we can check for now if its and array or object
		 */
		'tags' : Joi.array().optional().description( 'The tag information of the observation' ),

		// Get template schema this is separate so that it would be reusable for templates resources
		'template' : Joi
			.object()
			.optional()
			// Get common template schema
			.keys( require( './template' )( level ) )
			.description( 'The template data of the observation' ),

		// If the attributes are static this can be handled
		'evidences' : Joi.array().optional()
			.items( Joi.string().guid().required().description( 'The evidence uuid' ) )
			.description( 'The evidence assigned at the observation level' ),

		'masterEvidences' : Joi
			.array()
			.optional()
			// Get common evidences schema
			.items( Joi.object().optional().keys( require( './master-evidence' ) ) )
			.description( 'All of the evidences assigned in the observation' ),

		'prescribedResources' : Joi.array().optional()
			// Get common prescibed resources schema
			.items( Joi.string().guid().required().description( 'The observation uuid' ) )
			.description( 'The prescribed resources assigned at the observation level' ),

		'masterPrescribedResources' : Joi
			.array()
			.optional()
			// Get common prescibed resources schema
			.items( Joi.object().optional().keys( require( './master-prescribed-resource' ) ) )
			.description( 'All of the prescribed resources assigned in the observation' ),

		// Not clear yet whats inside this archive
		'archive' : Joi.array().optional(),

		/*
		 * CONCERNS
		 * Where did this come from? Its not in the wiki
		*/
		'manualScore' : Joi.number().optional().description( 'The manually-assigned score of the observation' )
	};

	return schema;
};
