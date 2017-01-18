'use strict';

var Joi = require( 'joi' );

// ---Rubric items and indicators will accept/sanitize HTML text ---
module.exports = function ( level ) {
	function setEvidences () {
		if ( level === 'strict' ) {
			return Joi.forbidden();
		}
		return Joi.array().optional()
			.items( Joi.string().guid().required().description( 'The evidence uuid' ) )
			.description( 'The evidences assigned' );
	}

	var schema = {
		// Template id
		'id' : Joi.string().guid().required().description( 'The template uuid' ),

		// Template name
		'name' : Joi.string().required().description( 'The name of the template' ),

		// Template parentId
		'parentId' : Joi.string().guid().optional().description( 'The template parentId' ),

		// Template originId
		'originId' : Joi.string().guid().optional().description( 'The template originId' ),

		// Template types
		'types' : Joi.array().required().description( 'Template types' ),

		// Template formula
		'formula' : Joi.string().optional().description( 'The template formula' ),

		// TBD when would this be optional when this would be removed? API errors on this
		// replace with templateAdmin
		'creator' : Joi.object().optional().description( 'The creator of the template' ),

		'rubric' : Joi
			.array()
			.optional()
			// Get common rubric schema
			.items( Joi.object().optional().keys( require( './rubric' ) ) )
			.description( 'The rubric data of the template -- Sanitizes HTML' ),

		/*
		 * CONCERNS
		 * This should be dynamically checked
		 * for now it just checks if it a array of objects
		 * will be implemented for dynamic validator
		 */
		'tags' : Joi.array().optional().description( 'The tag information of the template' ),

		// for template level pd
		'templateAttachments' : Joi
				.array()
				.optional()
				.items( Joi.object().optional().keys( require( './template-attachment' ) ) )
				.description( 'The template attachments' ),

		'groups' : Joi.array().required().items( Joi.object().optional().keys( {

			'id'   : Joi.string().guid().required(),
			'name' : Joi.string().required(),

			'indicators' : Joi
				.array()
				// TBD if required or optional
				.optional()
				.items( Joi.object().optional().keys( require( './indicator' )( level ) ) )
				.description( 'Indicators array -- Sanitizes HTML' ),

			'prescribedResources' : Joi.array().optional()
				.items( Joi.string().guid().required().description( 'The observation uuid' ) )
				.description( 'The prescribed resources assigned at the observation level' ),

			/* eslint no-extra-parens: [2, "functions"] */
			'evidences' : ( setEvidences() ),

			'templateAttachments' : Joi
				.array()
				.optional()
				.items( Joi.object().optional().keys( require( './template-attachment' ) ) )
				.description( 'The template attachments' ),

			// Formula for each group?
			'formula' : Joi.string().optional(),

			'rubric' : Joi
				.array()
				.optional()
				// Get common rubric schema
				.items( Joi.object().optional().keys( require( './rubric' ) ) )
				.description( 'The rubric data of the group -- Sanitizes HTML' ),

			'manualScore' : Joi.number().optional().description( 'The manually-assigned score of the group' )
		} ) ).description( 'The group data' ),

		// Created Date
		'createdAt' : Joi.date().optional().strip().description( 'The created date of the template. This will not be saved to the template object.' ),

		// Updated Date
		'updatedAt' : Joi.date().optional().strip().description( 'The updated date of the template. This will not be saved to the template object.' )
	};

	return schema;
};
