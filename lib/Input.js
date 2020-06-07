
// enquirer.ts - UI (autoComplete, select, confirm, input)

// Stylish CLI prompts that are user-friendly, intuitive and easy to create.
// https://www.npmjs.com/package/enquirer

const { prompt } = require('enquirer');
//import { prompt } from 'enquirer';

/**
 * @Method: get question (validate?) return answer.
 * @Param {string} question
 * @Param {PredicateOrString<string>} validate
 * @Return {Promise<string>}
 */
async function input(question, validate = undefined) {
	// response: { answer: string }
	const response = await prompt({
		type: 'input',
		name: 'answer',
		message: question,
		validate: validate
	});

	//console.log(response); // { answer: 'jonschlinkert' }

	return response.answer;
}

/**
 * @Method: get question (validate?) return answer.
 * @Param {string} question
 * @Param {boolean} float
 * @Param {PredicateOrString<string>} validate
 * @Return {Promise<string>}
 */
async function number(question, float = true,
	validate = undefined) {
	// response: { answer: string }
	const response = await prompt({
		type: 'numeral',
		name: 'answer',
		message: question,
		validate: validate,
		float: float
	});

	//console.log(response); // { answer: 'jonschlinkert' }

	return response.answer;
}

/**
 * @Method: get PredicateOrString of num (validate?) return PredicateOrString of string.
 * @Param {PredicateOrString<number>} validate
 * @Param {Map<string, number>} parse
 * @Return {PredicateOrString<string>}
 */
function pipeValidate(validate, parse) {
	// func: PredicateOrString<string> = (val: string): boolean | string
	const func = (val) => {
		if (validate) {
			return validate(parse(val))
		}
		else { return true; }
	}
	return func;
}

/**
 * @Method: get question (validate?) return answer.
 * @Param {string} question
 * @Param {number} radix?
 * @Param {PredicateOrString<number>} validate
 * @Return {Promise<number>}
 */
async function int(question, radix = undefined, validate = undefined) {
	// response: string
	const response = await number(question, false, pipeValidate(validate, parseInt));
	return parseInt(response, radix);
}

/**
 * @Method: get question (validate?) return answer.
 * @Param {string} question
 * @Param {PredicateOrString<number>} validate
 * @Return {Promise<number>}
 */
async function float(question, validate = undefined) {
	// response: string
	const response = await number(question, true, pipeValidate(validate, parseFloat));
	return parseFloat(response);
}

/**
 * @Method: don't show chars, get question (validate?) return answer.
 * @Param {string} question
 * @Return {Promise<string>}
 */
async function invisible(question) {
	// response: { answer: string }
	const response = await prompt({
		type: 'invisible',
		name: 'answer',
		message: question
	});

	//console.log(response); // { answer: 'jonschlinkert' }

	return response.answer;
}

// 
/**
 * @Method: show chars as stars, get question (validate?) return answer.
 * @Param {string} question
 * @Return {Promise<string>}
 */
async function password(question) {
	// response: { answer: string }
	const response = await prompt({
		type: 'password',
		name: 'answer',
		message: question,

	});

	//console.log(response); // { answer: 'jonschlinkert' }

	return response.answer;
}

module.exports = {
	prompt, 
	input, number, int, float,
	invisible, password
}

