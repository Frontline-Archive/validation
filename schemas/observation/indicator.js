'use strict';
/* eslint no-extra-parens: [2, "functions"] */

var Joi = require( 'joi' );

module.exports = function ( level ) {
	// The below functions/properties should only exist in the embedded version of the template (e.g. within an observation)
	function setAnswerText () {
		if ( level === 'strict' ) {
			return Joi.forbidden();
		}
		return Joi.string().optional().description( 'The text of the answer -- Sanitizes HTML' );
	}

	function setEvidences () {
		if ( level === 'strict' ) {
			return Joi.forbidden();
		}
		return Joi.array().optional()
			.items( Joi.string().guid().required().description( 'The evidence uuid' ) )
			.description( 'The evidences assigned' );
	}

	function setNotApplicable () {
		if ( level === 'strict' ) {
			return Joi.forbidden();
		}
		return Joi.boolean().optional().description( 'If notApplicable has been checked' );
	}

	function setScore () {
		if ( level === 'strict' ) {
			return Joi.forbidden();
		}
		return Joi.number().optional().description( 'The score recieved' );
	}

	function setSelected () {
		if ( level === 'strict' ) {
			return Joi.forbidden();
		}
		return Joi.boolean().description( 'If option is selected' );
	}

	var schema = {
		'id'            : Joi.string().guid().required().description( 'The indicator id' ),
		'type'          : Joi.number().integer().required().description( 'The indicator type' ),
		'questionText'  : Joi.string().required().description( 'The text of the question -- Sanitizes HTML' ),
		'answerText'    : ( setAnswerText() ),
		'notApplicable' : ( setNotApplicable() ),
		'value'         : Joi.number().optional().description( 'The point value for indicator' ),
		'score'         : ( setScore() ),
		'isRequired'    : Joi.boolean().default( false ).description( 'Whether the indicator response is required for observation completion' ),

		'prescribedResources' : Joi.array().optional()
			.items( Joi.string().guid().required().description( 'The observation uuid' ) )
			.description( 'The prescribed resources assigned at the observation level' ),

		'evidences' : ( setEvidences() ),

		'templateAttachments' : Joi
			.array()
			.optional()
			.items( Joi.object().optional().keys( require( './template-attachment' ) ) )
			.description( 'The template attachments' ),

		'answerOptions' : Joi.array().optional().items( Joi.object().optional().keys( {
			'id'          : Joi.string().guid().required().description( 'The answer id' ),
			'type'        : Joi.number().integer().optional().description( 'The answer type' ),
			'optionText'  : Joi.string().required().description( 'The answer text -- Sanitizes HTML' ),
			'description' : Joi.string().optional().description( 'The answer description -- Sanitizes HTML' ),
			'value'       : Joi.number().optional().description( 'The value of the answer' ),
			'score'       : ( setScore() ),
			'selected'    : ( setSelected() ),

			'subOptions' : Joi.array().optional().items( Joi.object().optional().keys( {
				'id'         : Joi.string().guid().required().description( 'The subOption id' ),
				'type'       : Joi.number().integer().optional().description( 'The subOption type' ),
				'optionText' : Joi.string().required().description( 'The subOption text -- Sanitizes HTML' ),
				'value'      : Joi.number().optional().description( 'The subOption point value' ),
				'score'      : ( setScore() ),
				'selected'   : ( setSelected() )
			} ) ).description( 'Sub options' )
		} ) ).description( 'Answer options ' )
	};

	return schema;
};
