
// enquirer.ts - UI (autoComplete, select, confirm, input)

// Stylish CLI prompts that are user-friendly, intuitive and easy to create.
// https://www.npmjs.com/package/enquirer

const { prompt } = require('enquirer');
//import { prompt } from 'enquirer';

const { getObjectKeys } = require('./helper');
const { defaultSelectMessage, Choice } = require('./common');

/**
 * @Method: 
 * @Param {string} message
 * @Param {string[] | Choice[]} choices
 * @Param {number} maxChoices
 * @Param {PredicateOrString<string>} validate
 * @Return {Promise<string[]>}
 */
async function full(message = defaultSelectMessage, choices,
	maxChoices = undefined, validate = undefined) {
	// response: { answer: string };
	var response = await prompt({
		type: 'autocomplete',
		name: 'answer',
		message: message,
		choices: choices,
		maxChoices: maxChoices,
		validate: validate,
	});

	//console.log(response); // { answer: 'jonschlinkert' }

	return response.answer;
}

/**
 * @Method: 
 * @Param {string} message
 * @Param {string[] | Choice[]} choices
 * @Param {number} maxChoices
 * @Return {Promise<string[]>}
 */
async function autoComplete(message = defaultSelectMessage, choices, maxChoices) {
	return await full(message, choices, maxChoices);
}

// custum able.
class LoopCommand {
	// message can be replaced while run.
	message = 'select option';

	constructor(exitCommand = undefined) {
		if (exitCommand != undefined) {
			this._exitCommand = exitCommand;
		}
	}

	// exitCommand canNot be replaced while run, can be init in constructor
	_exitCommand = 'exit';

	get exitCommand() {
		return this._exitCommand;
	}

	/**
 * @Method: run func by it's name (name indexer - forin)
 * @Param {Name: Action} commandObj ([commandName: string]: Action;)
 * @Return {void}
 */
	async run(commandObj) {
		// saved for exit command, throw Error or delete
		if (commandObj[this.exitCommand] != undefined) {
			// throw Error or Fix
			//throw new Error("commandObj can't have exit command {"+ exitCommand+"}");

			delete commandObj[this.exitCommand];
		}

		// add exitCommand to commandArr
		// commandArr: Array<string>
		const commandArr = [
			this.exitCommand,
			...getObjectKeys(commandObj)
		];

		//console.log('commandArr', commandArr);

		// command: string
		var command;
		while (true) {
			try {
				command = await autoComplete(this.message, commandArr);
			} catch (error) {
				console.log(error);
				throw error;
			}

			if (command == this.exitCommand) {
				return;
			} else {
				commandObj[command]();
			}
		}

	}

}

// default config run.
const _loopCommandObj = new LoopCommand();

// not working, [this] problems
//export const loopCommand = _loopCommandObj.run

// working fine
const loopCommand = _loopCommandObj.run
	.bind(_loopCommandObj);


module.exports = {
	prompt, Choice,
	full, autoComplete,
	LoopCommand, loopCommand
}
