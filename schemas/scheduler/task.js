'use strict';

var Joi = require( 'joi' );

module.exports = {
	'id'          : Joi.string().guid().optional().description( 'The task id' ),
	'messageType' : Joi.string().required().description( 'The mesageType for what needs to be called' ),
	'schedule'    : Joi.string().regex( /^(\*|((\*\/)?[1-5]?[0-9])) (\*|((\*\/)?(1?[0-9]|2[0-3]))) (\*|((\*\/)?([1-9]|[12][0-9]|3[0-1]))) (\*|((\*\/)?([1-9]|1[0-2]))) (\*|((\*\/)?[0-7]))$/ ).required().description( 'The cron-format for the scheduled task (see https://c1.staticflickr.com/8/7472/16199272841_dffe0b2873_b.jpg)' ),
	'payload'     : Joi.object().optional().description( 'What needs to be passed into the lapin call' ),
	'createdBy'   : Joi.string().optional().description( 'PersonnelId of the user that created the task' )
};
