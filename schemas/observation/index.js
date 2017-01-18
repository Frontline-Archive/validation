'use strict';

var indicator                = require( './indicator' );
var masterEvidence           = require( './master-evidence' );
var masterPrescribedResource = require( './master-prescribed-resource' );
var observation              = require( './observation' );
var rubric                   = require( './rubric' );
var template                 = require( './template' );
var templateAttachment       = require( './template-attachment' );

var validations = {
	'indicator'                  : indicator,
	'master-evidence'            : masterEvidence,
	'master-prescribed-resource' : masterPrescribedResource,
	'observation'                : observation,
	'rubric'                     : rubric,
	'template'                   : template,
	'template-attachment'        : templateAttachment
};

module.exports = validations;
