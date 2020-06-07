
# enquirer-helper
Helper For Enquirer, async-await, Stylish CLI prompts that are user-friendly, intuitive and easy to create.

## Installation 
```sh
cd <my_location>
npm install enquirer-helper --save
```

## Usage

```javascript
const enquirerHelper = require('enquirer-helper');

function myLog(name, ans, desc) {
	var descStr = desc ? ('- ' + desc) : '';
	console.log(name + descStr + ': ', ans);
	console.log();
}

async function run() {
	// AutoComplete
	const t1 = await enquirerHelper.autoComplete('not the defaultSelectMessage', ['option 1', 'option 2']);
	myLog('autoComplete', t1, 'not the default Select Message');

	const t2 = await enquirerHelper.autoComplete(undefined, ['option 1', 'option 2']);
	myLog('autoComplete', t2, 'default Select Message');

	// Confirm
	const t3 = await enquirerHelper.trueFalse('select true or false');
	myLog('trueFalse', t3);

	const t4 = await enquirerHelper.yesNo('select yes or no');
	myLog('yesNo', t4);
	
	// Input
	const t5 = await enquirerHelper.input('input text');
	myLog('input', t5);

	// Number
	//int: Input.int, float: Input.float, 
	const t6 = await enquirerHelper.int('input integer');
	myLog('int', t6);

	const t7 = await enquirerHelper.float('input float');
	myLog('float', t7);

	// Secure 
	//invisible: Input.invisible, password: Input.password, 
	const t8 = await enquirerHelper.invisible('input don\'t show chars');
	myLog('invisible', t8);
	
	const t9 = await enquirerHelper.password('show chars as stars');
	myLog('password', t9);

	// Select
	const t10 = await enquirerHelper.select(['option 1', 'option 2']);
	myLog('select', t10);

	const t11 = await enquirerHelper.selectWithMessage('select With custom Message', ['option 1', 'option 2']);
	myLog('selectWithMessage', t11);

	const t12 = await enquirerHelper.multi(['option 1', 'option 2']);
	myLog('multi', t12, 'select');

	const t13 = await enquirerHelper.multiWithMessage('multi select With custom Message', ['option 1', 'option 2']);
	myLog('multiWithMessage', t13, 'select');

	const t14 = await enquirerHelper.sort('sort some array', ['option 1', 'option 2', 'option 3']);
	myLog('sort', t14);

	await enquirerHelper.loopCommand({
		'option 1': () => { console.log('print option 1'); },
		'option 2': () => { console.log('print option num 2'); },
		'option number 3': () => { console.log('and so on and so forth'); },
	});
	
	//myLog('loopCommand', t15);
}

var r = run();
r.catch(reason => {
	if (reason) {
		console.error('catch in tests with reason', reason);
	}
	else {
		console.log('catch in tests');		
		process.exit();
	}
});
r.then(() => { 
	console.log('then in tests'); 
});
//r.finally(() => { console.log('finally in tests'); });

```

