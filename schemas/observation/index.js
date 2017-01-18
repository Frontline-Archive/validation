'use strict';

var indicator                 = require( './indicator' );
var masterEvidence            = require( './master-evidence' );
var masterPrescribedResources = require( './master-prescribed-resources' );
var observation               = require( './observation' );
var rubric                    = require( './rubric' );
var template                  = require( './template' );
var templateAttachment        = require( './template-attachment' );

var validations = {
	'indicator'                   : indicator,
	'master-evidence'             : masterEvidence,
	'master-prescribed-resources' : masterPrescribedResources,
	'observation'                 : observation,
	'rubric'                      : rubric,
	'template'                    : template,
	'template-attachment'         : templateAttachment
};

module.exports = validations;
