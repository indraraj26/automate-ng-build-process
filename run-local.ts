const { exec } = require('child_process');
import * as chalk from 'chalk';
import * as Confirm from 'prompt-confirm';

const confirm = new Confirm('do you want to run build locally to test ?')
	.run()
	.then((answer) => {
		if (answer) {
			executeCommand();
		} else {
			console.log(chalk.yellow('Okay? You can push this build to git.'));
		}
	});

function executeCommand() {
	exec(`npm run local`, (error, stdout, stderr) => {
		if (error) {
			console.log(chalk.red(`exec error: ${error}`));
			return;
		}
		console.log(chalk.bgMagenta('Running Build in locally!'));
	});
}
