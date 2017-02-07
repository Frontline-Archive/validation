'use strict';

var Joi = require( 'joi' );

module.exports = function () {
	var schema = Joi.object().keys( {
		'query' : {
			'limit'         : Joi.number().integer().default( 10 ),
			'offset'        : Joi.number().integer().optional(),
			'sort'          : Joi.string().optional(),
			'fltr_status'   : Joi.string().optional(),
			'fltr_mcTitle'  : Joi.string().optional(),
			'fltr_userName' : Joi.string().optional(),
			'field'         : Joi.string().optional()
		}
	} ).unknown();

	return schema;
};
