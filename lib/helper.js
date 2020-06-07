
// helper.js

/**
 * @Method: for (const key in object) => Array of keys.
 * @Param {any} object
 * @Return {Array<string>}
 */
function getObjectKeys(object) {
	// keysArray: Array<string>
	const keysArray = [];

	for (const key in object) {
		if (object.hasOwnProperty(key)) {
			//const element = object[key];
			keysArray.push(key);
		}
	}

	return keysArray;
}

/**
 * @Method: description.
 * @Param {any} value
 * @Return {boolean}
 */
function getBoolean(value) {
	switch (value) {
		case true:
		case "true":
		case 1:
		case "1":
		case "on":
		case "yes":
			return true;
		default:
			return false;
	}
}

/**
 * @Method: description.
 * @Param {string} input
 * @Return {boolean}
 */
function toBoolean(input) {
	try {
		return Boolean(JSON.parse(input));
	}
	catch (e) {
		return getBoolean(input.toLocaleLowerCase());
	}
}

/**
 * @Method: capitalize.
 * @Param {string} s
 * @Return {string}
 */
function capitalize (s) {
	//if (typeof s !== 'string') { return ''; }
	return s.charAt(0).toUpperCase() + s.slice(1)
}   

module.exports = {
	getObjectKeys, toBoolean, capitalize
}

