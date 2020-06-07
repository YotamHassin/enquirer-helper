
// enquirer.ts - UI (autoComplete, select, confirm, input)

// Stylish CLI prompts that are user-friendly, intuitive and easy to create.
// https://www.npmjs.com/package/enquirer

const { prompt } = require('enquirer');
//import { prompt } from 'enquirer';

const { toBoolean, capitalize } = require('./helper');

const Select = require('./Select');

/**
 * @Method: get question return bool selected with y/n.
 * @Param {string} question
 * @Param {boolean} initial
 * @Return {Promise<boolean>}
 */
async function y_n(question, initial = true) {
	// response: { answer: string }
	const response = await prompt({
		type: 'confirm',
		name: 'answer',
		message: question,
		initial: initial
	})

	//console.log(response); // { answer: 'jonschlinkert' }

	return toBoolean(response.answer);
}


/**
 * @Method: select Yes No.
 * @Param {string} question
 * @Param {boolean} initial
 * @Return {Promise<boolean>}
 */
async function yesNo(question, initial = true) {
	// answer: string
	const answer = await Select.selectWithMessage(question, ['Yes', 'No'], initial ? 'Yes' : 'No');

	return toBoolean(answer);
}

/**
 * @Method: select True False.
 * @Param {string} question
 * @Param {boolean} initial
 * @Return {Promise<boolean>}
 */
async function trueFalse(question, initial = true) {
	// answer: string
	const answer = await Select.selectWithMessage(question, ['True', 'False'], capitalize(String(initial)))

	return toBoolean(answer);
}

module.exports = {
	prompt, y_n, 
	yesNo, trueFalse
}
