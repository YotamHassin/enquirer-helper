
// enquirer.ts - UI (autoComplete, select, confirm, input)

// Stylish CLI prompts that are user-friendly, intuitive and easy to create.
// https://www.npmjs.com/package/enquirer

const { prompt } = require('enquirer');
//import { prompt } from 'enquirer';

const { defaultSelectMessage, defaultSelectMultiMessage, Choice } = require('./common');


/**
 * @Method: get options return answer.
 * @Param {string} question
 * @Param {string[] | Choice[]} choices
 * @Param {string | Choice} initial
 * @Return {Promise<string>}
 */
async function selectWithMessage(message = defaultSelectMessage, choices, initial = undefined) {
	// response: { answer: string }
	const response = await prompt({
		type: 'select',
		name: 'answer',
		message: message,
		choices: choices,
		initial: initial
	});

	//console.log(response); // { answer: 'jonschlinkert' }

	return response.answer;
}


/**
 * @Method: get options return answer.
 * @Param {string[] | Choice[]} choices
 * @Param {string | Choice} initial
 * @Return {Promise<string>}
 */
async function select(choices, initial = undefined) {
	return await selectWithMessage(defaultSelectMessage, choices, initial);
}

/**
 * @Method: get options return sorted.
 * @Param {string} message
 * @Param {string[] | Choice[]} choices
 * @Param {string | Choice} initial
 * @Return {Promise<string[]>}
 */
async function sort(message = defaultSelectMessage, choices, initial = undefined) {
	// response: { answer: string[] }
	const response = await prompt({
		type: 'sort',
		name: 'answer',
		message: message,
		choices: choices,
		hint: 'Use <Shift>+<Up/Down> to sort, and <Enter> to select',
		numbered: true,
	});

	//console.log(response); // { answer: 'jonschlinkert' }

	return response.answer;
}

/**
 * @Method: get options return multi.
 * @Param {string} message
 * @Param {string[] | Choice[]} choices
 * @Param {string | Choice} initial
 * @Return {Promise<string[]>}
 */
async function multiWithMessage(message = defaultSelectMultiMessage, choices, initial = undefined) {
	// response: { answer: string[] }
	const response = await prompt({
		type: 'multiselect',
		name: 'answer',
		message: message,
		hint: 'Use <Up/Down> and <Space> to Toggle, and <Enter> to Select',
		choices: choices,
		initial: initial
	});

	//console.log(response); // { answer: 'jonschlinkert' }

	return response.answer;
}

/**
 * @Method: get options return multi.
 * @Param {string[] | Choice[]} choices
 * @Param {string | Choice} initial
 * @Return {Promise<string[]>}
 */
async function multi(choices, initial = undefined) {
	return await multiWithMessage(defaultSelectMultiMessage,
		choices, initial);
}

module.exports = {
	prompt, Choice,
	selectWithMessage, select,
	sort,
	multiWithMessage, multi
}
