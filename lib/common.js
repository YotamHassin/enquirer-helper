
// enquirer.ts - UI (autoComplete, select, confirm, input)

// Stylish CLI prompts that are user-friendly, intuitive and easy to create.
// https://www.npmjs.com/package/enquirer

//const { prompt } = require('enquirer');
//import { prompt } from 'enquirer';

var defaultSelectMessage = 'Select option from list';
var defaultSelectMultiMessage = 'Select multiple options from list';

/**
 * @Method: create Choice for options.
 * @Param {string} name
 * @Param {string} message?
 * @Param {string} value?
 * @Param {string} hint
 * @Param {boolean} disabled
 * @Return {Promise<string>}
 */
class Choice {
	// shortName is what will return as answer and will display after select,
	// longName, if exist, will display only on select time
	constructor(shortName, longName = undefined) {
		this.name = shortName;
		if (longName) {
			this.message = longName;
		}
	}

	name;
	message;
	value;
	hint;
	disabled;

	static init(shortName, longName = undefined) {
		return new Choice(shortName, longName);
	}
}

module.exports = {
	defaultSelectMessage, defaultSelectMultiMessage,
	Choice
}

