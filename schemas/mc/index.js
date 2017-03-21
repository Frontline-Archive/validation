'use strict';

var credentials        = require( './credentials' );
var evidence           = require( './evidence' );
var evidenceCompletion = require( './evidence-completion' );
var evidenceMetum      = require( './evidence-metum' );
var feedback           = require( './feedback' );
var group              = require( './group' );
var mc                 = require( './mc' );
var mcAssociation      = require( './mc-association' );
var mcEvidence         = require( './mc-evidence' );
var mcMetum            = require( './mc-metum' );
var mcPrivilege        = require( './mc-privilege' );
var mcTag              = require( './mc-tag' );
var rubric             = require( './rubric' );

var validations = {
	'credentials'        : credentials,
	'evidenceCompletion' : evidenceCompletion,
	'evidenceMetum'      : evidenceMetum,
	'evidence'           : evidence,
	'feedback'           : feedback,
	'group'              : group,
	'mcAssociation'      : mcAssociation,
	'mcEvidence'         : mcEvidence,
	'mcMetum'            : mcMetum,
	'mcPrivilege'        : mcPrivilege,
	'mcTag'              : mcTag,
	'mc'                 : mc,
	'rubric'             : rubric
};

module.exports = validations;
