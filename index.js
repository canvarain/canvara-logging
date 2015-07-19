/**
 * Copyright(c) 2015, canvara Technologies Pvt. Ltd.
 */
'use strict';

/**
 * Main file for the module
 * @author      ritesh
 * @version     1.0.0
 */

/**
 * Module dependencies
 * @private
 */
var winston = require('winston');
var DEFAULT_ERROR_MESSAGE = 'Internal Server Error';

/**
 * Log the error
 * @param  {String}     message         the message with the error instance
 * @param  {Error}      error           error instance
 */
exports.error = function(message, error) {
  winston.error(message || DEFAULT_ERROR_MESSAGE, error.stack);
};

/**
 * Log the wrning
 * @param  {String}     message         the message with the warning
 * @param  {Object}     reason          reason for warning
 */
exports.warn = function(message, reason) {
  winston.warn(message, reason);
};

/**
 * Log the info message
 * @param  {String}     message         the informational message
 * @param  {Object}     data            any additional data associated with message
 */
exports.info = function(message, data) {
  winston.info(message, data);
};

/**
 * Log the debug message
 * @param  {String}     message         the debug message
 * @param  {Object}     data            any additional data associated with message
 */
exports.debug = function(message, data) {
  winston.debug(message, data);
};