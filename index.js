
// enquirer.ts - UI (autoComplete, select, confirm, input)

// Stylish CLI prompts that are user-friendly, intuitive and easy to create.
// https://www.npmjs.com/package/enquirer

const { prompt } = require('enquirer');
//import { prompt } from 'enquirer';

const AutoComplete = require('./lib/AutoComplete');
const Confirm = require('./lib/Confirm');
const Input = require('./lib/Input');
const Select = require('./lib/Select');
const common = require('./lib/common');

module.exports = {
	prompt,
	// AutoComplete
	AutoComplete, autoComplete: AutoComplete.autoComplete,
	LoopCommand: AutoComplete.LoopCommand,
	loopCommand: AutoComplete.loopCommand,
	runSingle: AutoComplete.runSingle,

	// Confirm
	Confirm, yesNo: Confirm.yesNo, trueFalse: Confirm.trueFalse,

	// Input
	Input, input: Input.input,

	// Number
	int: Input.int, float: Input.float,

	// secure 
	invisible: Input.invisible, password: Input.password,

	// Select
	Select, select: Select.select, multi: Select.multi, sort: Select.sort,
	selectWithMessage: Select.selectWithMessage, multiWithMessage: Select.multiWithMessage,

	// common
	common, Choice: common.Choice, createSeparator: common.createSeparator,
	defaultSelectMessage: common.defaultSelectMessage, defaultSelectMultiMessage: common.defaultSelectMultiMessage

}

