/**
 * Helper Module : provides logging functionalities throughout the application
 */

const colors = require('colors');

// load required modules
const config = require('../config/boilerplate');
require('magic-globals');

class Logger {

	/**
	 * Info for the server.
	 * @param {string} fileName 
	 * @param {string} functionName 
	 * @param {number} lineNumber 
	 * @param {string} message 
	 */
	error(fileName, functionName, lineNumber, message) {
		console.log('ERROR ', colors.red(Date(), '-', fileName + '|' + functionName + '|' + lineNumber + '|' + message))
	}

	/**
	 * Info for the server.
	 * @param {string} fileName 
	 * @param {string} functionName 
	 * @param {number} lineNumber 
	 * @param {string} message 
	 */
	warn(fileName, functionName, lineNumber, message) {
		console.log('WARN ', colors.yellow(Date(), '-', fileName + '|' + functionName + '|' + lineNumber + '|' + message))
	}

	/**
	 * Info for the server.
	 * @param {string} fileName 
	 * @param {string} functionName 
	 * @param {number} lineNumber 
	 * @param {string} message 
	 */
	info(fileName, functionName, lineNumber, message) {
		console.log('INFO ', Date(), '-', fileName + '|' + functionName + '|' + lineNumber + '|' + message);
	}

	/**
	 * Info for the server.
	 * @param {string} fileName 
	 * @param {string} functionName 
	 * @param {number} lineNumber 
	 * @param {string} message 
	 */
	debug(fileName, functionName, lineNumber, message) {
		console.log('DEBUG ', Date(), '-', fileName + '|' + functionName + '|' + lineNumber + '|' + message);
	}

	/**
	 * Info for the server.
	 * @param {string} fileName 
	 * @param {string} functionName 
	 * @param {number} lineNumber 
	 * @param {string} message 
	 */
	trace(fileName, functionName, lineNumber, message) {
		console.log('TRACE ', Date(), '-', fileName + '|' + functionName + '|' + lineNumber + '|' + message);
	}

}

module.exports = new Logger;