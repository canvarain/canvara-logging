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
// default to system log directory
var LOG_DIR = '/var/log/canvara';
var fse = require('fs-extra');

// ensure that the log directory exists
fse.ensureDirSync(LOG_DIR);

// add file transport
var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.DailyRotateFile)({
      name: 'info-file',
      filename: '/var/log/canvara/info.log',
      level: 'info'
    }),
    new (winston.transports.DailyRotateFile)({
      name: 'error-file',
      filename: '/var/log/canvara/error.log',
      level: 'error'
    })
  ]
});

var DEFAULT_ERROR_MESSAGE = 'Internal Server Error';

/**
 * Log the error
 * @param  {String}     message         the message with the error instance
 * @param  {Error}      error           error instance
 */
exports.error = function(message, error) {
  logger.error(message || DEFAULT_ERROR_MESSAGE, error.stack);
};

/**
 * Log the wrning
 * @param  {String}     message         the message with the warning
 * @param  {Object}     reason          reason for warning
 */
exports.warn = function(message, reason) {
  logger.warn(message, reason);
};

/**
 * Log the info message
 * @param  {String}     message         the informational message
 * @param  {Object}     data            any additional data associated with message
 */
exports.info = function(message, data) {
  logger.info(message, data);
};

/**
 * Log the debug message
 * @param  {String}     message         the debug message
 * @param  {Object}     data            any additional data associated with message
 */
exports.debug = function(message, data) {
  logger.debug(message, data);
};